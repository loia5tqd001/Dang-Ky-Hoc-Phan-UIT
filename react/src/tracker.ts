import { logEvent } from 'firebase/analytics';
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import ReactGA from 'react-ga4';
import { doWhenIdle, getBrowserName, getOsName, getVisitorFingerprint } from './tracking.utils';
import { log } from './utils';
import { analytics, db, isProd } from '.';

type AllowedPropertyValues = string | number | boolean | null | undefined;
type EventGroup = 'tkb_table' | 'so_tc' | 'drawer' | 'page1' | 'page2' | 'page3' | 'page';
type EventAction = 'clicked' | 'hovered' | 'toggled' | 'changed' | 'shown' | 'resulted';
type EventRecord<IsFirebase extends boolean = false> = {
  name: `[${EventGroup}] ${string}${EventAction}`;
  location: string;
  time: IsFirebase extends true ? Timestamp : number;
  data: {
    [propertyName: string]: AllowedPropertyValues;
  };
};
type SessionRecord<IsFirebase extends boolean = false> = {
  visitorId: string;
  startLocation: string;
  startTime: IsFirebase extends true ? Timestamp : number;
  endTime: IsFirebase extends true ? Timestamp : number;
  engagementTime: number;
  timeZone: string;
  browser: string;
  os: string;
  hasAdBlocker: boolean;
  leftDrawerInitiallyOpen: boolean;
  referral: string;
  events: EventRecord<IsFirebase>[];
};
const LOCAL_STORAGE_KEY = 'TRACKING_EVENTS';
const PAGE_VISIBILITY_CHANGED_EVENT_NAME: EventRecord['name'] = '[page] visibility_changed';

/**
 * cache events to localStorage
 * dump events to firestore when visibility changed to hidden, or in a new session if previous session was closed unexpectedly
 */
export const buildTracker = () => {
  const visitorId = getVisitorFingerprint();
  const startLocation = window.location.href;
  const browser = getBrowserName();
  const os = getOsName();
  const referral = document.referrer;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const startTime = Date.now();
  let leftDrawerInitiallyOpen: boolean;
  let hasAdBlocker: boolean;
  const currentSessionId = `${visitorId}-${startTime}`;
  type TrackingEventsLocalStorage = Record<typeof currentSessionId, SessionRecord>;
  const events: EventRecord[] = [];
  let numEventsDumpedToFirestore = 0;
  let isDumpingToFirestore = false;

  const track = (eventName: EventRecord['name'], properties?: EventRecord['data']) => {
    log('>>track', eventName, properties);
    // custom tracking
    events.push({
      name: eventName,
      location: window.location.href,
      time: Date.now(),
      data: properties ?? {},
    });
    doWhenIdle(cacheToLocalStorage);

    // firebase analytics
    logEvent(analytics, eventName, properties);
    // GA4
    ReactGA.event(eventName, properties);
  };

  const updateProperty = <TKey extends keyof SessionRecord>(key: TKey, value: SessionRecord[TKey]) => {
    switch (key) {
      case 'hasAdBlocker':
        hasAdBlocker = value as boolean;
        break;

      case 'leftDrawerInitiallyOpen':
        leftDrawerInitiallyOpen = value as boolean;
        break;

      default:
    }
  };

  const getLocalSessionRecord = (): SessionRecord<false> => {
    const endTime = Date.now();
    return {
      visitorId,
      startLocation,
      startTime,
      endTime,
      engagementTime: Math.floor(endTime / 1000 - startTime / 1000), // as seconds
      timeZone,
      browser,
      os,
      hasAdBlocker,
      leftDrawerInitiallyOpen,
      referral,
      events,
    };
  };

  const getFirebaseSessionRecord = (localSessionRecord: SessionRecord<false>): SessionRecord<true> => {
    return {
      ...localSessionRecord,
      startTime: Timestamp.fromMillis(localSessionRecord.startTime),
      endTime: Timestamp.fromMillis(localSessionRecord.endTime),
      events: localSessionRecord.events.map((event) => ({
        ...event,
        time: Timestamp.fromMillis(event.time),
      })),
    };
  };

  const getCachedTrackingFromLocalStorage = (): TrackingEventsLocalStorage => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
  };

  const cacheToLocalStorage = () => {
    if (events.length) {
      const cachedSessions = getCachedTrackingFromLocalStorage();
      const currentSessionRecord = getLocalSessionRecord();
      log('>>cacheToLocalStorage', { cachedSessions, currentSessionId, currentSessionRecord });
      cachedSessions[currentSessionId] = currentSessionRecord;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cachedSessions));
    }
  };

  // if the user just switch back and forth between tabs without doing any additional meaningful actions, we don't need to dump to firestore
  const hasMoreMeaningfulEvents = (localStorageSessionRecord: SessionRecord) => {
    if (numEventsDumpedToFirestore >= localStorageSessionRecord.events.length) return; // something might have been wrong
    const additionalEvents = localStorageSessionRecord.events.slice(numEventsDumpedToFirestore);
    return additionalEvents.some((event) => event.name !== PAGE_VISIBILITY_CHANGED_EVENT_NAME);
  };
  // has taken care of:
  // - multiple tabs (multiple sessions) opened simultaneously
  // - events from previous sessions (closed unexpectedly), but not yet dumped to firestore
  const dumpToFirestore = async () => {
    if (isDumpingToFirestore) return;
    isDumpingToFirestore = true;
    const cachedSessions = getCachedTrackingFromLocalStorage();
    log('>>dumpToFirestore', { cachedSessions });
    const promises = Object.entries(cachedSessions).map(async ([sessionId, sessionRecord]) => {
      if (sessionId === currentSessionId && !hasMoreMeaningfulEvents(sessionRecord)) return;
      const firestoreSessionId = isProd ? sessionId : `__DEV__${sessionId}`;
      const newOrExistingDoc = doc(db, 'trackingEvents', firestoreSessionId);
      return setDoc(newOrExistingDoc, getFirebaseSessionRecord(sessionRecord))
        .then(() => {
          if (sessionId === currentSessionId) {
            numEventsDumpedToFirestore = sessionRecord.events.length;
          }
          delete cachedSessions[sessionId];
        })
        .catch((e) => {
          // it's OK, we'll try again next time
          log('>>dumpToFirestore error', e);
        });
    });
    await Promise.all(promises);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cachedSessions));
    isDumpingToFirestore = false;
  };

  document.addEventListener('visibilitychange', async (e) => {
    log('>>visibilitychange', document.visibilityState);
    // add this to more accurately track engagement time
    // since dumping to localStorage is a sync operation, it'll be sured operated, whereas dumping to firestore is async and not sure,
    // in that case, we leveraged localStorage to leave a dirt for future sessions to dump to firestore in case the current session was closed unexpectedly
    track(PAGE_VISIBILITY_CHANGED_EVENT_NAME, { visibility: document.visibilityState });
    if (document.visibilityState === 'hidden') {
      dumpToFirestore();
    }
  });

  const cachedSessions = getCachedTrackingFromLocalStorage();
  // if there are trackings from previous sessions, dump them to firestore
  if (Object.keys(cachedSessions).length) {
    doWhenIdle(dumpToFirestore);
  }

  return {
    track,
    updateProperty,
  };
};

// TODO: write unit test
