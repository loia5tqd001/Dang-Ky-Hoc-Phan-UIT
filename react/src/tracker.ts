import { logEvent } from 'firebase/analytics';
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import ReactGA from 'react-ga4';
import { getBrowserName, getOsName, getVisitorFingerprint } from './tracking.utils';
import { log } from './utils';
import { analytics, db } from '.';

type AllowedPropertyValues = string | number | boolean | null | undefined;
type EventGroup = 'tkb_table' | 'so_tc' | 'drawer' | 'page1' | 'page2' | 'page3';
type EventAction = 'clicked' | 'hovered' | 'toggled' | 'changed' | 'shown' | 'resulted';
type EventRecord = {
  name: `[${EventGroup}] ${string}${EventAction}` | 'page_loaded';
  location: string;
  time: Timestamp;
  data: {
    [propertyName: string]: AllowedPropertyValues;
  };
};
type SessionRecord = {
  visitorId: string;
  startLocation: string;
  startTime: Timestamp;
  endTime: Timestamp;
  engagementTime: number;
  timeZone: string;
  browser: string;
  os: string;
  hasAdBlocker: boolean;
  leftDrawerInitiallyOpen: boolean;
  referral: string;
  events: EventRecord[];
};

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

  const events: EventRecord[] = [];

  const track = (eventName: EventRecord['name'], properties?: EventRecord['data']) => {
    log('>>track', eventName, properties);
    // custom tracking
    events.push({
      name: eventName,
      location: window.location.href,
      time: Timestamp.now(),
      data: properties ?? {},
    });
    // firebase analytics
    logEvent(analytics, eventName, properties);
    // GA4
    ReactGA.event(eventName, properties);
    dump();
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

  const dump = () => {
    const finalStartTime = Timestamp.fromMillis(startTime);
    const finalEndTime = Timestamp.now();
    const sessionRecord: SessionRecord = {
      visitorId,
      startLocation,
      startTime: finalStartTime,
      endTime: finalEndTime,
      engagementTime: finalEndTime.seconds - finalStartTime.seconds,
      timeZone,
      browser,
      os,
      hasAdBlocker,
      leftDrawerInitiallyOpen,
      referral,
      events,
    };
    const newDoc = doc(db, 'trackingEvents', `${visitorId}-${startTime}`);
    setDoc(newDoc, sessionRecord);
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon#sending_analytics_at_the_end_of_a_session
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      // dump();
    }
  });

  setTimeout(() => {
    dump();
  }, 3000);

  return {
    track,
    updateProperty,
  };
};
