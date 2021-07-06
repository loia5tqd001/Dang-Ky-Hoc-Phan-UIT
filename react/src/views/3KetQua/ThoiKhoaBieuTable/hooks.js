import React from 'react';
import { useSnackbar } from 'notistack';
import html2canvas from 'html2canvas';
import { useSelector } from 'react-redux';
import { selectPhanLoaiHocTrenTruong } from '../../../redux/xepTkb/selectors';
import { downloadFromCanvas, getTietIndex } from './utils';

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

const initRowData = () => [
  { Thu2: null, Thu3: null, Thu4: null, Thu5: null, Thu6: null, Thu7: null }, // tiet 1
  { Thu2: null, Thu3: null, Thu4: null, Thu5: null, Thu6: null, Thu7: null }, // tiet 2
  { Thu2: null, Thu3: null, Thu4: null, Thu5: null, Thu6: null, Thu7: null }, // tiet 3
  { Thu2: null, Thu3: null, Thu4: null, Thu5: null, Thu6: null, Thu7: null }, // tiet 4
  { Thu2: null, Thu3: null, Thu4: null, Thu5: null, Thu6: null, Thu7: null }, // tiet 5
  { Thu2: null, Thu3: null, Thu4: null, Thu5: null, Thu6: null, Thu7: null }, // tiet 6
  { Thu2: null, Thu3: null, Thu4: null, Thu5: null, Thu6: null, Thu7: null }, // tiet 7
  { Thu2: null, Thu3: null, Thu4: null, Thu5: null, Thu6: null, Thu7: null }, // tiet 8
  { Thu2: null, Thu3: null, Thu4: null, Thu5: null, Thu6: null, Thu7: null }, // tiet 9
  { Thu2: null, Thu3: null, Thu4: null, Thu5: null, Thu6: null, Thu7: null }, // tiet 10
];

// Phân loại data thành các lớp học trên trường & các lớp HT2
// Đồng thời tái cấu trúc CTDL nhằm tiện vẽ TKB hơn
export const usePhanLoaiHocTrenTruong = () => {
  const [khongHocTrenTruong, hocTrenTruong] = useSelector(selectPhanLoaiHocTrenTruong);

  const rowDataHocTrenTruong = React.useMemo(() => {
    const rowData = initRowData();

    for (const lop of hocTrenTruong) {
      const listTiet = lop.Tiet.split('');

      const tietBatDau = listTiet[0];
      rowData[getTietIndex(tietBatDau)]['Thu' + lop.Thu] = lop;

      for (let i = 1; i < listTiet.length; i++) {
        rowData[getTietIndex(listTiet[i])]['Thu' + lop.Thu] = 'xx';
      }
    }

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

export const useProcessImageTkb = () => {
  const tkbTableRef = React.useRef(null);
  const { enqueueSnackbar } = useSnackbar();

  // sap chép hình ảnh tkb vào clipboard
  const [isCopyingToClipboard, setIsCopyingToClipboard] = React.useState(false);
  const onHandleCopyToClipboard = React.useCallback(async () => {
    setIsCopyingToClipboard(true);
    const canvas = await html2canvas(tkbTableRef.current);
    canvas.toBlob((blob) => {
      navigator.clipboard.write([new window.ClipboardItem({ [blob.type]: blob })]);
      setIsCopyingToClipboard(false);
      enqueueSnackbar('Sao chép ảnh thành công, Ctrl+V để xem kết quả.', { variant: 'success' });
    });
  }, [enqueueSnackbar, tkbTableRef]);

  // tải hình ảnh tkb về máy
  const [isSavingToComputer, setIsSavingToComputer] = React.useState(false);
  const onHandleSavingToComputer = React.useCallback(async () => {
    setIsSavingToComputer(true);
    const canvas = await html2canvas(tkbTableRef.current);
    downloadFromCanvas(canvas, 'thoikhoabieu.png');
    setIsSavingToComputer(false);
  }, [tkbTableRef]);

  return {
    tkbTableRef,
    isCopyingToClipboard,
    onHandleCopyToClipboard,
    isSavingToComputer,
    onHandleSavingToComputer,
  };
};
