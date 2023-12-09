import { AgGridEvent, RowSelectedEvent } from 'ag-grid-community';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAgGridColumnState, setAgGridFilterModel, setSelectedClasses } from 'redux/xepTkb/slice';
import { useDebouncedCallback } from 'use-debounce';
import { enqueueSnackbar } from 'notistack';
import { ClassModel } from '../../../models';
import { selectSelectedClasses } from '../../../redux/xepTkb/selectors';
import { getDanhSachTiet, isChungMon } from '../../../utils';
import { useTrungTkbDialogContext } from '../TrungTkbDialog';
import { isSameRow } from './utils';

export const useDebouncedStoreColumnState = (time = 500) => {
  const dispatch = useDispatch();
  const selectedClasses = useSelector(selectSelectedClasses);
  const { openTrungTkbDialog } = useTrungTkbDialogContext();

  const debouncedStoreColumnState = useDebouncedCallback(({ columnApi }: AgGridEvent<ClassModel>) => {
    dispatch(setAgGridColumnState(columnApi.getColumnState()));
  }, time);

  const debouncedStoreFilterModel = useDebouncedCallback(({ api }: AgGridEvent) => {
    dispatch(setAgGridFilterModel(api.getFilterModel()));
  }, time);

  const onRowSelected = useCallback(
    ({ api, data, node }: RowSelectedEvent<ClassModel, any>) => {
      if (!data) return;
      if (node.isSelected() && selectedClasses.find((it) => isSameRow(it, data))) return;
      if (!node.isSelected()) {
        dispatch(setSelectedClasses(api.getSelectedRows()));
        return;
      }
      // môn Anh Văn có thẻ 2 record chung môn, nhưng mà mã lớp giống nhau
      if (selectedClasses.some((it) => isChungMon(it, data) && it.MaLop !== data.MaLop)) {
        enqueueSnackbar('Môn học này đã chọn rồi', { variant: 'error' });
        node.setSelected(false);
        return;
      }

      const cungNgay = selectedClasses.filter((it) => data.Thu !== '*' && it.Thu === data.Thu);
      const dsTiet = new Set(getDanhSachTiet(data.Tiet));
      for (const lop of cungNgay) {
        const trungTkb = getDanhSachTiet(lop.Tiet).some((tiet) => dsTiet.has(tiet));
        if (trungTkb) {
          openTrungTkbDialog({
            master: data,
            slave: lop,
          });
          node.setSelected(false);
          return;
        }
      }
      dispatch(setSelectedClasses(api.getSelectedRows()));
    },
    [dispatch, openTrungTkbDialog, selectedClasses],
  );

  return { debouncedStoreColumnState, debouncedStoreFilterModel, onRowSelected };
};
