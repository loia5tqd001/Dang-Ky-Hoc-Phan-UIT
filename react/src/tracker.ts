import { logEvent } from 'firebase/analytics';
import { doc, setDoc } from 'firebase/firestore';
import ReactGA from 'react-ga4';
import { getBrowserName, getOsName, getVisitorFingerprint } from './tracking.utils';
import { analytics, db } from '.';

type AllowedPropertyValues = string | number | boolean | null | undefined;
type EventGroup = 'tkb_table' | 'so_tc' | 'drawer' | 'page1' | 'page2' | 'page3';
type EventAction = 'clicked' | 'hovered' | 'toggled' | 'changed' | 'shown' | 'resulted';
type EventRecord = {
  name: `[${EventGroup}] ${string}${EventAction}` | 'page_loaded';
  location: string;
  time: number;
  data?: {
    [propertyName: string]: AllowedPropertyValues;
  };
};
type SessionRecord = {
  visitorId: string;
  startLocation: string;
  startTime: number;
  endTime: number;
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
    // custom tracking
    events.push({
      name: eventName,
      location: window.location.href,
      time: Date.now(),
      data: properties,
    });
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

  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon#sending_analytics_at_the_end_of_a_session
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      const endTime = Date.now();
      const sessionRecord: SessionRecord = {
        visitorId,
        startLocation,
        startTime,
        endTime,
        engagementTime: endTime - startTime,
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
    }
  });

  return {
    track,
    updateProperty,
  };
};
