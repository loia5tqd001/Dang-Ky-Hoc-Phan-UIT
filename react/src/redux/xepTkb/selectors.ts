import { createSelector } from '@reduxjs/toolkit';
import partition from 'lodash/partition';
import uniq from 'lodash/uniq';
import { ClassModel } from '../../models';
import { calcTongSoTC, getBuoiFromTiet } from '../../utils';
import slice from './slice';
import { State } from './types';

const selectSlice = (state) => state[slice.name] as State;

export const selectDataExcel = createSelector([selectSlice], (slice) => slice.dataExcel);
export const selectSelectedClasses = createSelector([selectSlice], (slice) => slice.selectedClasses);
export const selectAgGridColumnState = createSelector([selectSlice], (slice) => slice.agGridColumnState);
export const selectAgGridFilterModel = createSelector([selectSlice], (slice) => slice.agGridFilterModel);
export const selectIsChiVeTkb = createSelector([selectSlice], (slice) => slice.isChiVeTkb);
export const selectTextareaChiVeTkb = createSelector([selectSlice], (slice) => slice.textareaChiVeTkb);

export const selectFinalDataTkb = createSelector([selectDataExcel], (dataExcel) => {
  return (
    dataExcel?.data.map((classModel): ClassModel => {
      const Buoi = getBuoiFromTiet(classModel.Tiet);
      const ThuBuoi: ClassModel['ThuBuoi'] = Buoi === '*' ? '*' : `Thứ ${classModel.Thu} ${Buoi}`;

      return {
        ...classModel,
        Buoi,
        ThuBuoi,
      };
    }) || []
  ); // there used to be a complicatd logic here, but now it's just this
});

export const selectlistHeDT = createSelector([selectFinalDataTkb], (dataTkb) => uniq(dataTkb.map((it) => it.HeDT)));

export const selectTongSoTcSelected = createSelector([selectSelectedClasses], calcTongSoTC);

// chi dung cho buoc 3 (ve tkb)
export const selectPhanLoaiHocTrenTruong = createSelector(
  [selectIsChiVeTkb, selectSelectedClasses, selectTextareaChiVeTkb, selectFinalDataTkb],
  (isChiVeTkb, selectedClasses, textareaChiVeTkb, finalDataTkb): [ClassModel[], ClassModel[]] => {
    if (isChiVeTkb) {
      const listMaLop = textareaChiVeTkb.split(/\s+/);
      const selectedClasses = finalDataTkb.filter((it) => listMaLop.includes(it.MaLop));
      return partition(selectedClasses, { Thu: '*' });
    } else {
      return partition(selectedClasses, { Thu: '*' });
    }
  },
);
