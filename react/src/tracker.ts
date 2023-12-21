import { logEvent } from 'firebase/analytics';
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import ReactGA from 'react-ga4';
import { getBrowserName, getOsName, getVisitorFingerprint } from './tracking.utils';
import { log } from './utils';
import { analytics, db, isProd } from '.';

type AllowedPropertyValues = string | number | boolean | null | undefined;
type EventGroup = 'tkb_table' | 'so_tc' | 'drawer' | 'page1' | 'page2' | 'page3' | 'page';
type EventAction = 'clicked' | 'hovered' | 'toggled' | 'changed' | 'shown' | 'resulted';
type EventRecord<IsFirebase extends boolean = false> = {
  name: `[${EventGroup}] ${string}${EventAction}` | 'page_loaded';
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
  const sessionId = `${visitorId}-${startTime}`;
  type TrackingEventsLocalStorage = Record<typeof sessionId, SessionRecord>;
  const events: EventRecord[] = [];

  const track = (eventName: EventRecord['name'], properties?: EventRecord['data']) => {
    log('>>track', eventName, properties);
    // custom tracking
    events.push({
      name: eventName,
      location: window.location.href,
      time: Date.now(),
      data: properties ?? {},
    });
    cacheToLocalStorage();

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
      const existingEvents = getCachedTrackingFromLocalStorage();
      const sessionRecord = getLocalSessionRecord();
      log('>>cacheToLocalStorage', { existingEvents, sessionId, sessionRecord });
      existingEvents[sessionId] = sessionRecord;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existingEvents));
    }
  };

  const dumpToFirestore = async () => {
    // has taken care of:
    // - multiple tabs (multiple sessions) opened simultaneously
    // - events from previous sessions (closed unexpectedly), but not yet dumped to firestore
    const existingEvents = getCachedTrackingFromLocalStorage();
    log('>>dumpToFirestore', { existingEvents });
    const promises = Object.entries(existingEvents).map(([sessionId, sessionRecord]) => {
      const finalSessionId = isProd ? sessionId : `__DEV__${sessionId}`;
      const newOrExistingDoc = doc(db, 'trackingEvents', finalSessionId);
      return setDoc(newOrExistingDoc, getFirebaseSessionRecord(sessionRecord)).then(() => {
        delete existingEvents[sessionId];
      });
    });
    await Promise.all(promises);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existingEvents));
  };

  document.addEventListener('visibilitychange', async (e) => {
    log('>>visibilitychange', document.visibilityState);
    // add this to more accurately track engagement time
    // since dumping to localStorage is a sync operation, it'll be sured operated, whereas dumping to firestore is async and not sure,
    // in that case, we leveraged localStorage to leave a dirt for future sessions to dump to firestore in case the current session was closed unexpectedly
    track('[page] visibility_changed', { visibility: document.visibilityState });
    if (document.visibilityState === 'hidden') {
      dumpToFirestore();
    }
  });

  const existingEvents = getCachedTrackingFromLocalStorage();
  // if there are trackings from previous sessions, dump them to firestore
  if (Object.keys(existingEvents).length) {
    dumpToFirestore();
  }

  return {
    track,
    updateProperty,
  };
};
