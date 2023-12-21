// cannot use fingerprintjs because AdBlocker blocks it so I create a simple one myself
export const getVisitorFingerprint = (): string => {
  const { screen, navigator } = window;
  const data = `${navigator.userAgent}${screen.width}${screen.height}${navigator.language}`;
  const hash = (str: string): string => {
    let hashValue = 0 >>> 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hashValue = (hashValue << 5) - hashValue + char;
      hashValue = hashValue >>> 0;
    }
    return hashValue.toString(16);
  };
  return hash(data);
};

// https://stackoverflow.com/a/65532927/9787887
export function checkAdBlocker(): Promise<boolean> {
  return fetch(
    new Request('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
      method: 'HEAD',
      mode: 'no-cors',
    }),
  )
    .then((res) => {
      return res.redirected; // uBlock Origin
    })
    .catch(() => {
      return true; // others
    });
}

export function getBrowserName(): string {
  const nAgt: string = navigator.userAgent;
  let browserName: string = navigator.appName;

  if (nAgt.includes('OPR')) {
    browserName = 'Opera';
  } else if (nAgt.includes('Edg')) {
    browserName = 'Microsoft Edge';
  } else if (nAgt.includes('MSIE')) {
    browserName = 'Microsoft Internet Explorer';
  } else if (nAgt.includes('Chrome')) {
    browserName = 'Chrome';
  } else if (nAgt.includes('Safari')) {
    browserName = 'Safari';
  } else if (nAgt.includes('Firefox')) {
    browserName = 'Firefox';
  } else {
    const nameOffset: number = nAgt.lastIndexOf(' ') + 1;
    const verOffset: number = nAgt.lastIndexOf('/');
    if (nameOffset < verOffset) {
      browserName = nAgt.substring(nameOffset, verOffset);
    }
  }

  return browserName;
}

export function getOsName(): string {
  const userAgent: string = navigator.userAgent;
  let osName: string = 'Unknown OS';

  if (userAgent.includes('Windows')) {
    osName = 'Windows';
  } else if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS')) {
    osName = 'MacOS';
  } else if (userAgent.includes('X11') || userAgent.includes('UNIX')) {
    osName = 'UNIX';
  } else if (userAgent.includes('Linux')) {
    osName = 'Linux';
  } else if (userAgent.includes('Android')) {
    osName = 'Android';
  } else if (userAgent.includes('iOS')) {
    osName = 'iOS';
  }

  return osName;
}

export function doWhenIdle(cb: () => void): void {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(cb);
  } else {
    // Safari
    cb();
  }
}
