const fs = require('fs');
const XLSX = require('./xlsx.full.min.js');

// https://www.quora.com/How-do-I-read-a-xls-file-in-nodejs

function dataArrayToObject(array) {
  // convert excel based date (1989-Dec-30) to Js based date (1970-Jan-01)
  function convertExcelDateToStringDate(excelDate) {
    // in Excel, based date is 1989-Dec-30: https://stackoverflow.com/questions/36378476/why-does-the-date-returns-31-12-1899-when-1-is-passed-to-it
    const offsetOfBases = new Date(0) - new Date(1899, 11, 31)
    const jsDate = new Date(excelDate * 24 * 60 * 60 * 1000 - offsetOfBases)
    return jsDate.getFullYear() + '-' +
        (jsDate.getMonth() + 1).toString().padStart(2, '0') + '-' +
        jsDate.getDate().toString().padStart(2, '0')
  }

  return {
    STT: array[0],
    MaMH: array[1],
    MaLop: array[2],
    TenMH: array[3],
    MaGV: array[4],
    TenGV: array[5],
    SiSo: array[6],
    SoTc: array[7],
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
  };
}

function saveArrayDataToJson(arrayData) {
  const now = new Date();
  const dataInObject = arrayData.map((array) => dataArrayToObject(array));
  const saveData = {
    'last-update':
      now.getHours().toString().padStart(2, '0') +
      ':' +
      now.getMinutes().toString().padStart(2, '0') +
      ' ' +
      now.getDate().toString().padStart(2, '0') +
      '/' +
      (now.getMonth() + 1).toString().padStart(2, '0') +
      '/' +
      now.getFullYear(),
    data: dataInObject,
  };

  fs.writeFileSync('tkb.json', JSON.stringify(saveData, null, '\t'));
  console.log('done');
}

const dataInArray = [];
fs.readdirSync('./').forEach((file) => {
  if (/.xlsx/.test(file)) {
    const wb = XLSX.readFile(file);
    const wsLyThuyet = wb.Sheets[wb.SheetNames[0]];
    const wsThucHanh = wb.Sheets[wb.SheetNames[1]];
    const dataLyThuyet = XLSX.utils.sheet_to_json(wsLyThuyet, { header: 1 });
    const dataThucHanh = XLSX.utils.sheet_to_json(wsThucHanh, { header: 1 });
    const _dataInArray = [...dataLyThuyet, ...dataThucHanh].filter(
      (row) => typeof row[0] === 'number'
    );
    dataInArray.push(..._dataInArray);
  }
});
saveArrayDataToJson(dataInArray);
