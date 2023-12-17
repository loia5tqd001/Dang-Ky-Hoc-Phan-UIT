import ReactGA from 'react-ga4';

type TrackEventOptions = Omit<Exclude<Parameters<(typeof ReactGA)['event']>[0], string>, 'category'>;

export const trackEvent = {
  leftDrawer: (options: TrackEventOptions) => {
    return ReactGA.event({
      ...options,
      category: 'left_drawer',
    });
  },
  page1: (options: TrackEventOptions) => {
    return ReactGA.event({
      ...options,
      category: 'page1',
    });
  },
  page2: (options: TrackEventOptions) => {
    return ReactGA.event({
      ...options,
      category: 'page2',
    });
  },
  page3: (options: TrackEventOptions) => {
    return ReactGA.event({
      ...options,
      category: 'page3',
    });
  },
  common: (options: TrackEventOptions) => {
    return ReactGA.event({
      ...options,
      category: 'common',
    });
  },
};
