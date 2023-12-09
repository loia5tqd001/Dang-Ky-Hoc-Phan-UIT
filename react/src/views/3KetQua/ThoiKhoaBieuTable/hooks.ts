import React from 'react';
import { useSelector } from 'react-redux';
import { selectPhanLoaiHocTrenTruong } from 'redux/xepTkb/selectors';
import { getDanhSachTiet } from '../../../utils';
import { getTietIndex } from './utils';

/* // Uncomment to see how rowData can be conducted:
const rowDataExample = [
  { Thu2: {  }, Thu3: {  }, Thu4: {  }, Thu5: null, Thu6: null, Thu7: null }, // tiet 1
  { Thu2: 'xx', Thu3: 'xx', Thu4: 'xx', Thu5: null, Thu6: {  }, Thu7: null }, // tiet 2
  { Thu2: 'xx', Thu3: 'xx', Thu4: 'xx', Thu5: null, Thu6: 'xx', Thu7: null }, // tiet 3
  { Thu2: {  }, Thu3: 'xx', Thu4: 'xx', Thu5: null, Thu6: 'xx', Thu7: null }, // tiet 4
  { Thu2: 'xx', Thu3: 'xx', Thu4: null, Thu5: null, Thu6: 'xx', Thu7: null }, // tiet 5
  { Thu2: {  }, Thu3: null, Thu4: {  }, Thu5: {  }, Thu6: null, Thu7: null }, // tiet 6
  { Thu2: 'xx', Thu3: null, Thu4: 'xx', Thu5: 'xx', Thu6: null, Thu7: null }, // tiet 7
  { Thu2: 'xx', Thu3: null, Thu4: 'xx', Thu5: 'xx', Thu6: null, Thu7: null }, // tiet 8
  { Thu2: 'xx', Thu3: null, Thu4: 'xx', Thu5: null, Thu6: null, Thu7: null }, // tiet 9
  { Thu2: 'xx', Thu3: null, Thu4: 'xx', Thu5: null, Thu6: null, Thu7: null }, // tiet 10
];
*/

export const CELL = {
  /** không có lớp học vào thời điểm này */
  ABSENT: null,
  /** có lớp học vào thời điểm này, nhưng sẽ được render đè bởi cell khác (lớp có tiết 12345 thì chỉ tiết 1 là phải render) */
  OCCUPIED: 'xx',
} as const;
export const OCCUPIED_CELL = 'xx';

const initRowData = () => [
  { Thu2: CELL.ABSENT, Thu3: CELL.ABSENT, Thu4: CELL.ABSENT, Thu5: CELL.ABSENT, Thu6: CELL.ABSENT, Thu7: CELL.ABSENT }, // tiet 1
  { Thu2: CELL.ABSENT, Thu3: CELL.ABSENT, Thu4: CELL.ABSENT, Thu5: CELL.ABSENT, Thu6: CELL.ABSENT, Thu7: CELL.ABSENT }, // tiet 2
  { Thu2: CELL.ABSENT, Thu3: CELL.ABSENT, Thu4: CELL.ABSENT, Thu5: CELL.ABSENT, Thu6: CELL.ABSENT, Thu7: CELL.ABSENT }, // tiet 3
  { Thu2: CELL.ABSENT, Thu3: CELL.ABSENT, Thu4: CELL.ABSENT, Thu5: CELL.ABSENT, Thu6: CELL.ABSENT, Thu7: CELL.ABSENT }, // tiet 4
  { Thu2: CELL.ABSENT, Thu3: CELL.ABSENT, Thu4: CELL.ABSENT, Thu5: CELL.ABSENT, Thu6: CELL.ABSENT, Thu7: CELL.ABSENT }, // tiet 5
  { Thu2: CELL.ABSENT, Thu3: CELL.ABSENT, Thu4: CELL.ABSENT, Thu5: CELL.ABSENT, Thu6: CELL.ABSENT, Thu7: CELL.ABSENT }, // tiet 6
  { Thu2: CELL.ABSENT, Thu3: CELL.ABSENT, Thu4: CELL.ABSENT, Thu5: CELL.ABSENT, Thu6: CELL.ABSENT, Thu7: CELL.ABSENT }, // tiet 7
  { Thu2: CELL.ABSENT, Thu3: CELL.ABSENT, Thu4: CELL.ABSENT, Thu5: CELL.ABSENT, Thu6: CELL.ABSENT, Thu7: CELL.ABSENT }, // tiet 8
  { Thu2: CELL.ABSENT, Thu3: CELL.ABSENT, Thu4: CELL.ABSENT, Thu5: CELL.ABSENT, Thu6: CELL.ABSENT, Thu7: CELL.ABSENT }, // tiet 9
  { Thu2: CELL.ABSENT, Thu3: CELL.ABSENT, Thu4: CELL.ABSENT, Thu5: CELL.ABSENT, Thu6: CELL.ABSENT, Thu7: CELL.ABSENT }, // tiet 10

  { Thu2: CELL.ABSENT, Thu3: CELL.ABSENT, Thu4: CELL.ABSENT, Thu5: CELL.ABSENT, Thu6: CELL.ABSENT, Thu7: CELL.ABSENT }, // tiet 11
  { Thu2: CELL.ABSENT, Thu3: CELL.ABSENT, Thu4: CELL.ABSENT, Thu5: CELL.ABSENT, Thu6: CELL.ABSENT, Thu7: CELL.ABSENT }, // tiet 12
  { Thu2: CELL.ABSENT, Thu3: CELL.ABSENT, Thu4: CELL.ABSENT, Thu5: CELL.ABSENT, Thu6: CELL.ABSENT, Thu7: CELL.ABSENT }, // tiet 13
];

// Phân loại data thành các lớp học trên trường & các lớp HT2
// Đồng thời tái cấu trúc CTDL nhằm tiện vẽ TKB hơn
export const usePhanLoaiHocTrenTruong = () => {
  const [khongHocTrenTruong, hocTrenTruong] = useSelector(selectPhanLoaiHocTrenTruong);

  const rowDataHocTrenTruong = React.useMemo(() => {
    const rowData = initRowData();

    for (const lop of hocTrenTruong) {
      const listTiet = getDanhSachTiet(lop.Tiet);

      const tietBatDau = listTiet[0];
      rowData[getTietIndex(tietBatDau)]['Thu' + lop.Thu] = lop;

      for (let i = 1; i < listTiet.length; i++) {
        rowData[getTietIndex(listTiet[i])]['Thu' + lop.Thu] = CELL.OCCUPIED;
      }
    }

    const khongCoLopBuoiToi = rowData.slice(-3).every((tiet) => {
      return Object.values(tiet).every((cell) => cell === CELL.ABSENT);
    });
    if (khongCoLopBuoiToi) rowData.splice(-3);

    return rowData;
  }, [hocTrenTruong]);

  return {
    khongHocTrenTruong,
    rowDataHocTrenTruong,
  };
};

/* old code: harder to read
   const rowDataHocTrenTruong = React.useMemo(
     () =>
       hocTrenTruong.reduce(
         (acc, cur) => {
           cur.Tiet.split('').forEach((tiet, i) => {
             const tietIndex = tiet === '0' ? 9 : tiet - 1;
             const isTietBatDau = i === 0;
             if (acc[tietIndex]) {
               if (acc[tietIndex]['Thu' + cur.Thu] === undefined) {
                 acc[tietIndex]['Thu' + cur.Thu] = isTietBatDau ? cur : 'blank';
               }
             } else {
               acc[tietIndex] = { ['Thu' + cur.Thu]: isTietBatDau ? cur : 'blank' };
             }
           });
           return acc;
         },
         [...Array(10)],
       ),
     [hocTrenTruong],
   );
 
    rowDataHocTrenTruong: An array of 10 elements represents for 10 tiet, for example:
      [
       {                 "Thu4": { "STT": 351, "MaMH": "MA003", ... (một object lớp học) } },
       {                 "Thu4": "blank" },
       {                 "Thu4": "blank" },
       {                 "Thu4": "blank" },
       null,
       { "Thu2": { "STT": ...}, "Thu5": { "STT": 631, "MaMH": "MA003", ... (một object lớp học) } },
       { "Thu2": "blank",       "Thu5": "blank" },
       { "Thu2": "blank",       "Thu5": "blank" },
       { "Thu2": "blank",       "Thu5": "blank" },
        null
      ]
      Can try this: console.log('rowDataHocTrenTruong', JSON.stringify(rowDataHocTrenTruong, null, 2));
    */
