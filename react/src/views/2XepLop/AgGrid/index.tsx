import { GridApi } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';
import { ClassModel } from 'models';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAgGridColumnState,
  selectAgGridFilterModel,
  selectCustomViewMode,
  selectFilteredMonHoc,
  selectHeDaoTaoFiltered,
  selectSelectedClasses,
} from 'redux/xepTkb/selectors';
import { setAgGridFilterModel, setListMaMHTextarea, setSelectedClasses, setTenMonHocFilter } from 'redux/xepTkb/slice';
import { calcTongSoTC, isChungMon, isMonChung } from 'utils';
import { TTrungTkb } from '..';
import { useDebouncedStoreColumnState } from './hooks';
import SoTinChi from './SoTinChi';
import './styles.css';
import { columnDefs, defaultColDef, isSameRow } from './utils';

type Props = {
  rowData: ClassModel[];
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLopTrungTkb: React.Dispatch<React.SetStateAction<TTrungTkb>>;
};

function Index({ rowData, setIsDialogOpen, setLopTrungTkb }: Props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const selectedClasses = useSelector(selectSelectedClasses);
  const agGridColumnState = useSelector(selectAgGridColumnState);
  const agGridFilterModel = useSelector(selectAgGridFilterModel);
  const tongSoTC = calcTongSoTC(selectedClasses);
  const heDaoTaoFiltered = useSelector(selectHeDaoTaoFiltered);
  const filteredMonHoc = useSelector(selectFilteredMonHoc);
  const [agGridApi, setAgGridApi] = React.useState<GridApi | null>(null);
  const viewMode = useSelector(selectCustomViewMode);

  const { debouncedStoreColumnState } = useDebouncedStoreColumnState();

  // Mỗi khi filter môn học change => apply ColumnFilter: https://www.ag-grid.com/react-grid/filtering/
  React.useEffect(() => {
    agGridApi?.hideOverlay();
    if (!filteredMonHoc.length) return;

    agGridApi?.setFilterModel({
      ...agGridApi?.getFilterModel(),
      TenMH: {
        type: 'set',
        values: filteredMonHoc.map((it) => it.TenMH),
      },
    });
  }, [agGridApi, filteredMonHoc]);

  // Mỗi khi viewMode hoặc Hệ đào tạo filter change => apply externalFilter: https://www.ag-grid.com/react-grid/filter-external/
  React.useEffect(() => {
    setTimeout(() => {
      agGridApi?.onFilterChanged();
    }, 0);
  }, [agGridApi, viewMode, heDaoTaoFiltered]);

  // đéo hiểu sao phải bỏ trong getRowClass không là data bị cũ
  // const dictColor = React.useMemo(() => {
  //   return uniqBy(
  //     agGridApi?.getRenderedNodes().map((it) => it.data as ClassModel),
  //     'MaMH',
  //   ).reduce((acc, cur, index) => {
  //     acc[cur.MaMH] = index % 2 ? 'odd-row' : 'even-row';
  //     return acc;
  //   }, {} as Record<ClassModel['MaMH'], 'odd-row' | 'even-row'>);
  // }, [agGridApi]);

  // agGridApi?.refreshCells();

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: 'calc(100vh - 100px)',
        fontFamily: 'inherit',
      }}
    >
      <AgGridReact
        columnDefs={columnDefs({ soTc: tongSoTC })}
        defaultColDef={defaultColDef}
        headerHeight={22}
        animateRows={false}
        rowSelection="multiple"
        rowMultiSelectWithClick={true}
        // rowClassRules={{
        //   'odd-row': ({ data, api }: { data: ClassModel; api: GridApi }) => {
        //     const dictColor = uniqBy(
        //       api?.getRenderedNodes().map((it) => it.data as ClassModel),
        //       'MaMH',
        //     ).reduce((acc, cur, index) => {
        //       acc[cur.MaMH] = index % 2 ? 'odd-row' : 'even-row';
        //       return acc;
        //     }, {} as Record<ClassModel['MaMH'], 'odd-row' | 'even-row'>);
        //     return dictColor[data.MaMH] === 'odd-row';
        //   },
        //   'even-row': ({ data, api }: { data: ClassModel; api: GridApi }) => {
        //     const dictColor = uniqBy(
        //       api?.getRenderedNodes().map((it) => it.data as ClassModel),
        //       'MaMH',
        //     ).reduce((acc, cur, index) => {
        //       acc[cur.MaMH] = index % 2 ? 'odd-row' : 'even-row';
        //       return acc;
        //     }, {} as Record<ClassModel['MaMH'], 'odd-row' | 'even-row'>);
        //     return dictColor[data.MaMH] === 'even-row';
        //   },
        // }}
        getRowClass={(params) => {
          // đéo hiểu sao phải bỏ trong getRowClass (bị gọi nhiều lần => lag) không là data bị cũ
          const dictColor = uniqBy(
            (params.api as GridApi)?.getRenderedNodes().map((it) => it.data as ClassModel),
            'MaMH',
          ).reduce((acc, cur, index) => {
            acc[cur.MaMH] = index % 2 ? 'odd-row' : 'even-row';
            return acc;
          }, {} as Record<ClassModel['MaMH'], 'odd-row' | 'even-row'>);

          return dictColor[(params.data as ClassModel).MaMH];
        }}
        isExternalFilterPresent={() => {
          return Boolean(heDaoTaoFiltered) || viewMode !== 'Bình thường';
        }}
        doesExternalFilterPass={(node) => {
          const data = node.data as ClassModel;
          const passedViewMode = (() => {
            if (viewMode === 'Bình thường') return true;
            const selected = agGridApi?.getSelectedRows() as ClassModel[];
            if (viewMode === 'Xem lớp đã chọn') {
              return selected?.some((it) => it.MaLop === data.MaLop);
            }
            if (viewMode === 'Ẩn môn đã chọn') {
              const chungMonVsLopDaChon = selected?.some((it) => isChungMon(it, data));
              return !chungMonVsLopDaChon; // || sameRowVsLopDaChon;
            }
            return false;
          })();
          const passedHeDaoTao = !heDaoTaoFiltered || isMonChung(data) || data.HeDT === heDaoTaoFiltered;
          // Xem lớp đã chọn mà lớp đã chọn không thoả filter hệ đào tạo / filter môn học thì có nên hiện k nhỉ?
          // viewMode === 'Xem lớp đã chọn' || !heDaoTaoFiltered || isMonChung(data) || data.HeDT === heDaoTaoFiltered;

          return passedHeDaoTao && passedViewMode;
        }}
        frameworkComponents={{
          countTinChi: SoTinChi,
        }}
        statusBar={{
          statusPanels: [
            { statusPanel: 'agSelectedRowCountComponent', align: 'right' },
            { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'right' },
            { statusPanel: 'countTinChi', align: 'left' },
          ],
        }}
        onRowSelected={(e) => {
          const data = e.data as ClassModel;
          if (e.node.isSelected() && selectedClasses.find((it) => isSameRow(it, data))) {
            return;
          }
          if (!e.node.isSelected()) {
            dispatch(setSelectedClasses(e.api.getSelectedRows()));
            return;
          }
          // môn Anh Văn có thẻ 2 record chung môn, nhưng mà mã lớp giống nhau
          if (selectedClasses.some((it) => isChungMon(it, data) && it.MaLop !== data.MaLop)) {
            enqueueSnackbar('Môn học này đã chọn rồi', { variant: 'error' });
            e.node.setSelected(false);
            return;
          }
          const cungNgay = selectedClasses.filter((it) => data.Thu !== '*' && it.Thu === data.Thu);
          for (const lop of cungNgay) {
            const dsTiet1 = data.Tiet.split('');
            const dsTiet2 = lop.Tiet.split('');
            const dsTiet = [...dsTiet1, ...dsTiet2];
            const trungTkb = dsTiet.length !== uniq(dsTiet).length;
            if (trungTkb) {
              setLopTrungTkb({
                master: data,
                slave: lop,
              });
              setIsDialogOpen(true);
              e.node.setSelected(false);
              return;
            }
          }
          dispatch(setSelectedClasses(e.api.getSelectedRows()));
        }}
        // rowData={rowData}
        onGridReady={(params) => {
          setAgGridApi(params.api);
          params.api.setRowData(rowData);
          params.api.showLoadingOverlay();

          if (agGridColumnState) {
            params.columnApi.setColumnState(agGridColumnState);
            params.api.setFilterModel(agGridFilterModel);
          }
          if (selectedClasses.length) {
            params.api.forEachNode((node) => {
              if (selectedClasses.find((it) => isSameRow(it, node.data))) {
                node.setSelected(true, false, true);
              }
            });
          }
        }}
        onFilterChanged={(e) => {
          const api = e.api as GridApi;
          const tenMhFilterInstance = api.getFilterInstance('TenMH');
          if (tenMhFilterInstance?.isFilterActive()) {
            const filterValues = tenMhFilterInstance.getModel().values as string[] | undefined;
            dispatch(setTenMonHocFilter(filterValues || []));
          } else {
            dispatch(setListMaMHTextarea(''));
          }
          dispatch(setAgGridFilterModel(api.getFilterModel()));
        }}
        onColumnVisible={debouncedStoreColumnState}
        onColumnPinned={debouncedStoreColumnState}
        onColumnResized={debouncedStoreColumnState}
        onColumnMoved={debouncedStoreColumnState}
        onColumnValueChanged={debouncedStoreColumnState}
        suppressDragLeaveHidesColumns
        suppressColumnVirtualisation
        getRowHeight={() => 30}
        viewportRowModelBufferSize={rowData.length - 100}
        rowBuffer={100}
        suppressAnimationFrame={true}
        suppressColumnMoveAnimation={true}
      />
    </div>
  );
}

export default Index;
