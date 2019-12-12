const fs = require('fs')
const XLSX = require('./xlsx.full.min.js')
////www.quora.com/How-do-I-read-a-xls-file-in-nodejs

https: function dataArrayToObject(array) {
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
    Thu: array[10],
    Tiet: array[11],
    CachTuan: array[12],
    PhongHoc: array[13],
    KhoaHoc: array[14],
    HocKy: array[15],
    NamHoc: array[16],
    HeDT: array[17],
    KhoaQL: array[18],
    NBD: array[19],
    NKT: array[20],
    GhiChu: array[21],
    NgonNgu: array[22]
  }
}

fs.readdirSync('./').forEach(file => {
  if (/.xlsx/.test(file)) {
    
    const wb = XLSX.readFile(file)
    const wsLyThuyet = wb.Sheets[wb.SheetNames[0]]
    const wsThucHanh = wb.Sheets[wb.SheetNames[1]]
    const dataLyThuyet = XLSX.utils.sheet_to_json(wsLyThuyet, { header: 1 })
    const dataThucHanh = XLSX.utils.sheet_to_json(wsThucHanh, { header: 1 })
    const dataInArray = [...dataLyThuyet, ...dataThucHanh].filter(
      row => typeof row[0] === 'number'
    )
    const dataInObject = dataInArray.map(array => dataArrayToObject(array))
    const saveData = {
      'last-update': (new Date()).toLocaleString(),
      'data': dataInObject
    }

    fs.writeFileSync('tkb.json', JSON.stringify(saveData, null, '\t'))
    console.log('done')
  }
})
