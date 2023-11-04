import { ClassModel } from 'models';

export function arrayToTkbObject(array: any[]) {
  // convert excel based date (1989-Dec-30) to Js based date (1970-Jan-01)
  function convertExcelDateToStringDate(excelDate) {
    // in Excel, based date is 1989-Dec-30: https://stackoverflow.com/questions/36378476/why-does-the-date-returns-31-12-1899-when-1-is-passed-to-it
    // @ts-ignore
    const offsetOfBases = new Date(0) - new Date(1899, 11, 31);
    const jsDate = new Date(excelDate * 24 * 60 * 60 * 1000 - offsetOfBases);
    return (
      jsDate.getFullYear() +
      '-' +
      (jsDate.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      jsDate.getDate().toString().padStart(2, '0')
    );
  }

  return {
    STT: array[0],
    MaMH: array[1],
    MaLop: array[2],
    TenMH: array[3],
    MaGV: array[4],
    TenGV: array[5],
    SiSo: array[6],
    SoTc: parseInt(array[7]),
    ThucHanh: array[8],
    HTGD: array[9],
    Thu: String(array[10]),
    Tiet: String(array[11]),
    CachTuan: String(array[12]),
    PhongHoc: array[13],
    KhoaHoc: String(array[14]),
    HocKy: String(array[15]),
    NamHoc: String(array[16]),
    HeDT: array[17],
    KhoaQL: array[18],
    NBD: typeof array[19] === 'string' ? array[19] : convertExcelDateToStringDate(array[19]),
    NKT: typeof array[20] === 'string' ? array[20] : convertExcelDateToStringDate(array[20]),
    GhiChu: array[21],
    NgonNgu: array[22],
  } as ClassModel;
}

// from Date object to 'hh:mm dd/MM/yyyy' format
export function toDateTimeString(date: Date) {
  return (
    date.getHours().toString().padStart(2, '0') +
    ':' +
    date.getMinutes().toString().padStart(2, '0') +
    ' ' +
    date.getDate().toString().padStart(2, '0') +
    '/' +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    '/' +
    date.getFullYear()
  );
}

// copied from: https://github.com/SheetJS/sheetjs/blob/master/demos/react/sheetjs.jsx#L134-L136
export const sheetJSFT = [
  '.xlsx',
  '.xlsb',
  '.xlsm',
  '.xls',
  // '.xml',
  '.csv',
  // '.txt',
  // '.ods',
  // '.fods',
  // '.uos',
  // '.sylk',
  // '.dif',
  // '.dbf',
  // '.prn',
  // '.qpw',
  // '.123',
  // '.wb*',
  // '.wq*',
  // '.html',
  // '.htm',
].join(',');
