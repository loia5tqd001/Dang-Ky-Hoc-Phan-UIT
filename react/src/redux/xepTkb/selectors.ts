import { createSelector } from '@reduxjs/toolkit';
import { pick } from 'lodash';
import partition from 'lodash/partition';
import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';
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
export const selectCustomViewMode = createSelector([selectSlice], (slice) => slice.customViewMode);
export const selectIsChiVeTkb = createSelector([selectSlice], (slice) => slice.isChiVeTkb);
export const selectTextareaChiVeTkb = createSelector([selectSlice], (slice) => slice.textareaChiVeTkb);

// Data cuối cùng dùng để xếp TKB, phụ thuộc vô loại TKB
// nếu người dùng chọn mặc định thì return data của mặc định
// nếu người dùng chọn tự upload thì return data tự upload ở trên
export const selectFinalDataTkb = createSelector([selectLoaiTkb, selectDataExcel], (loaiTkb, dataExcel) => {
  return dataExcel?.data || [];
});

export const selectlistHeDT = createSelector([selectFinalDataTkb], (dataTkb) => uniq(dataTkb.map((it) => it.HeDT)));

export const selectFilteredMonHoc = createSelector(
  [selectFinalDataTkb, selectListMaMHTextarea],
  (finalDataTkb, listMaMHTextarea) => {
    const textareaUpper = listMaMHTextarea.toUpperCase();
    const listMonHoc = uniqBy(finalDataTkb, 'MaMH').map((it) => pick(it, 'MaMH', 'TenMH'));
    return listMonHoc.filter((monHoc) => textareaUpper.includes(monHoc.MaMH));
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
