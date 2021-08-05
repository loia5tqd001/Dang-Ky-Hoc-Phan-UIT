import { createSelector } from '@reduxjs/toolkit';
import partition from 'lodash/partition';
import uniq from 'lodash/uniq';
import slice from './slice';
import { State } from './types';

const selectSlice = (state) => state[slice.name] as State;

export const selectLoaiTkb = createSelector([selectSlice], (slice) => slice.loaiTkb);
export const selectDataExcel = createSelector([selectSlice], (slice) => slice.dataExcel);
export const selectDataDkhpPage = createSelector([selectSlice], (slice) => slice.dataDkhpPage);
export const selectListMaMHTextarea = createSelector([selectSlice], (slice) => slice.listMaMHTextarea);
export const selectHeDaoTaoFiltered = createSelector([selectSlice], (slice) => slice.heDaoTaoFiltered);
export const selectSelectedClasses = createSelector([selectSlice], (slice) => slice.selectedClasses);
export const selectAgGridColumnState = createSelector([selectSlice], (slice) => slice.agGridColumnState);
export const selectAgGridFilterModel = createSelector([selectSlice], (slice) => slice.agGridFilterModel);
export const selectIsChiVeTkb = createSelector([selectSlice], (slice) => slice.isChiVeTkb);

// Data cuối cùng dùng để xếp TKB, phụ thuộc vô loại TKB
// nếu người dùng chọn mặc định thì return data của mặc định
// nếu người dùng chọn tự upload thì return data tự upload ở trên
export const selectFinalDataTkb = createSelector([selectLoaiTkb, selectDataExcel], (loaiTkb, dataExcel) => {
  return dataExcel?.data || [];
});

export const selectlistHeDT = createSelector([selectFinalDataTkb], (dataTkb) => uniq(dataTkb.map((it) => it.HeDT)));

export const selectFilteredMaMH = createSelector(
  [selectFinalDataTkb, selectListMaMHTextarea],
  (finalDataTkb, listMaMHTextarea) => {
    const textareaUpper = listMaMHTextarea.toUpperCase();
    const listMaMH = uniq(finalDataTkb.map((it) => it.MaMH));
    return listMaMH.filter((maMH) => textareaUpper.includes(maMH));
  },
);

export const selectTextareaChiVeTkb = createSelector(
  [selectSlice, selectFinalDataTkb],
  ({ textareaChiVeTkb }, finalDataTkb) => {
    const listMaLop = uniq(finalDataTkb.map((it) => it.MaLop));
    return listMaLop.filter((maLop) => textareaChiVeTkb.includes(maLop)).join('  ');
  },
);

// chi dung cho buoc 3 (ve tkb)
export const selectPhanLoaiHocTrenTruong = createSelector(
  [selectIsChiVeTkb, selectSelectedClasses, selectTextareaChiVeTkb, selectFinalDataTkb],
  (isChiVeTkb, selectedClasses, textareaChiVeTkb, finalDataTkb) => {
    if (isChiVeTkb) {
      const listMaLop = textareaChiVeTkb.split(/\s+/);
      const selectedClasses = finalDataTkb.filter((it) => listMaLop.includes(it.MaLop));
      return partition(selectedClasses, { Thu: '*' });
    } else {
      return partition(selectedClasses, { Thu: '*' });
    }
  },
);
