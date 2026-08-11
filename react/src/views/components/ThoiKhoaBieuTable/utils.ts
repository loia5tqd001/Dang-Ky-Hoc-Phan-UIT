import { VLU_CA_TIMES, VLU_ONLINE_INDEX } from 'vlu/config';

export const tietOnline = {
  index: VLU_ONLINE_INDEX,
  stringValue: '*',
  label: 'Online',
} as const;

export const timeLookup: string[] = [
  ...VLU_CA_TIMES,
  tietOnline.label,
];

export const getTietIndex = (tietString) => {
  if (tietString === tietOnline.stringValue) return tietOnline.index;
  if (tietString === '0') return 9;
  const num = parseInt(tietString, 10);
  if (!isNaN(num)) return num - 1;
  return 0;
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
