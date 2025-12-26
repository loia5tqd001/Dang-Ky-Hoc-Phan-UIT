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
  if (tietString === '*') return 10; // Thứ 3 Tiết * -> Thứ 3 Học Online Buổi tối, để tạm vô tiết 10
  if (tietString === '0') return 9;
  return tietString - 1;
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
