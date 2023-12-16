export const timeLookup = [
  /* tiet 1 */ '(7:30 - 8:15)',
  /* tiet 2 */ '(8:15 - 9:00)',
  /* tiet 3 */ '(9:00 - 9:45)',
  /* tiet 4 */ '(10:00 - 10:45)',
  /* tiet 5 */ '(10:45 - 11:30)',
  /* tiet 6 */ '(13:00 - 13:45)',
  /* tiet 7 */ '(13:45 - 14:30)',
  /* tiet 8 */ '(14:30 - 15:15)',
  /* tiet 9 */ '(15:30 - 16:15)',
  /* tiet 10 */ '(16:15 - 17:00)',
  /* tiet 11 */ '🌚',
  /* tiet 12 */ '🌚',
  /* tiet 13 */ '🌚',
];

export const getTietIndex = (tietString) => {
  return tietString === '0' ? 9 : tietString - 1;
};

// Plagiarize from: https://github.com/gillyb/reimg/blob/master/reimg.js
export const downloadFromCanvas = (canvasElement, filename = 'thoikhoabieu.png') => {
  const a = document.createElement('a');
  a.href = canvasElement.toDataURL();
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
};
