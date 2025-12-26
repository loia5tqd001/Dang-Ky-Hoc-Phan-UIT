import constate from 'constate';
import html2canvas from 'html2canvas';
import React from 'react';
import { enqueueSnackbar } from 'notistack';
import { tracker } from '../../..';
import { ClassModel } from '../../../types';
import { findOverlapedClasses, getDanhSachTiet } from '../../../utils';
import { selectPhanLoaiHocTrenTruong, useTkbStore } from '../../../zus';
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

export const CELL = {
  /** không có lớp học vào thời điểm này */
  NO_CLASS: null,
  /** có lớp học vào thời điểm này, nhưng sẽ được render đè bởi cell khác (lớp có tiết 12345 thì chỉ tiết 1 là phải render) */
  OCCUPIED: 'xx',
} as const;

type CellData = typeof CELL.NO_CLASS | typeof CELL.OCCUPIED | ClassModel;
export type RowData = {
  Thu2: CellData;
  Thu3: CellData;
  Thu4: CellData;
  Thu5: CellData;
  Thu6: CellData;
  Thu7: CellData;
};
type TableData = RowData[];

const initTableData = () => {
  const tableData: TableData = [];
  for (let i = 0; i < 14; i++) {
    tableData.push({
      Thu2: CELL.NO_CLASS,
      Thu3: CELL.NO_CLASS,
      Thu4: CELL.NO_CLASS,
      Thu5: CELL.NO_CLASS,
      Thu6: CELL.NO_CLASS,
      Thu7: CELL.NO_CLASS,
    });
  }
  return tableData;
};

// Phân loại data thành các lớp học trên trường & các lớp HT2
// Đồng thời tái cấu trúc CTDL nhằm tiện vẽ TKB hơn
const usePhanLoaiHocTrenTruong = () => {
  const [khongHocTrenTruong, hocTrenTruong] = useTkbStore(selectPhanLoaiHocTrenTruong);

  const { kept, redundant } = findOverlapedClasses(hocTrenTruong);

  const rowDataHocTrenTruong = React.useMemo(() => {
    const tableData = initTableData();

    for (const lop of kept) {
      const listTiet = getDanhSachTiet(lop.Tiet);

      const tietBatDau = listTiet[0];
      tableData[getTietIndex(tietBatDau)]['Thu' + lop.Thu] = lop;

      for (let i = 1; i < listTiet.length; i++) {
        tableData[getTietIndex(listTiet[i])]['Thu' + lop.Thu] = CELL.OCCUPIED;
      }
    }

    return tableData;
  }, [kept]);

  return {
    redundant,
    khongHocTrenTruong,
    rowDataHocTrenTruong,
  };
};

export const [PhanLoaiHocTrenTruongContext, usePhanLoaiHocTrenTruongContext] = constate(usePhanLoaiHocTrenTruong);

export const useProcessImageTkb = () => {
  const tkbTableRef = React.useRef<HTMLTableElement>(null);

  const saveTkbImageToComputer = React.useCallback(async () => {
    if (!tkbTableRef.current) return;
    tracker.track('[tkb_table] btn_save_image_clicked');
    const canvas = await html2canvas(tkbTableRef.current);
    downloadFromCanvas(canvas, 'thoikhoabieu.png');
  }, []);

  const copyTkbImageToClipboard = React.useCallback(async () => {
    if (!tkbTableRef.current) return;
    tracker.track('[tkb_table] btn_copy_image_clicked');
    const canvas = await html2canvas(tkbTableRef.current);
    canvas.toBlob((blob) => {
      if (blob === null) {
        enqueueSnackbar('Sao chép vào clipboard thất bại, vui lòng thử lại.', { variant: 'error' });
        return;
      }
      navigator.clipboard.write([new window.ClipboardItem({ [blob.type]: blob })]);
      enqueueSnackbar('Sao chép vào clipboard thành công.', { variant: 'success' });
    });
  }, []);

  return {
    tkbTableRef,
    saveTkbImageToComputer,
    copyTkbImageToClipboard,
  };
};
