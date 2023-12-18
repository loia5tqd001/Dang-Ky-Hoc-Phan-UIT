import { logEvent } from 'firebase/analytics';
import ReactGA from 'react-ga4';
import { analytics } from '.';

type GaEvent = Exclude<Parameters<(typeof ReactGA)['event']>[0], string>;
type TrackEventOptions = Omit<GaEvent, 'category'>;

const getFirebaseEvent = ({ category, action, ...others }: GaEvent) => {
  return {
    eventName: `${category}__${action}`,
    eventParams: others,
  };
};

const convertToMultipleEvents = (category: string) => {
  return (options: TrackEventOptions) => {
    // google analytics 4
    const gaEvent: GaEvent = {
      ...options,
      category,
    };
    ReactGA.event(gaEvent);

    // firebase analytics
    const firebaseEvent = getFirebaseEvent(gaEvent);
    logEvent(analytics, firebaseEvent.eventName, firebaseEvent.eventParams);
  };
};

export const trackEvent = {
  leftDrawer: convertToMultipleEvents('left_drawer'),
  page1: convertToMultipleEvents('page1'),
  page2: convertToMultipleEvents('page2'),
  page3: convertToMultipleEvents('page3'),
  common: convertToMultipleEvents('common'),
};
