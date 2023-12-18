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
