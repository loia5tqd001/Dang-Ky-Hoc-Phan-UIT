import ReactGA from 'react-ga4';

type SendTrackingEventOptions = Omit<Exclude<Parameters<(typeof ReactGA)['event']>[0], string>, 'category'>;

export const sendTrackingEvent = {
  leftDrawer: (options: SendTrackingEventOptions) => {
    return ReactGA.event({
      ...options,
      category: 'left_drawer',
    });
  },
  page1: (options: SendTrackingEventOptions) => {
    return ReactGA.event({
      ...options,
      category: 'page1',
    });
  },
  page2: (options: SendTrackingEventOptions) => {
    return ReactGA.event({
      ...options,
      category: 'page2',
    });
  },
  page3: (options: SendTrackingEventOptions) => {
    return ReactGA.event({
      ...options,
      category: 'page3',
    });
  },
  common: (options: SendTrackingEventOptions) => {
    return ReactGA.event({
      ...options,
      category: 'common',
    });
  },
};
