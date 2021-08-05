import { GridApi } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import uniq from 'lodash/uniq';
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
import { setAgGridFilterModel, setSelectedClasses } from 'redux/xepTkb/slice';
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

  React.useEffect(() => {
    if (!filteredMonHoc.length) return;

    agGridApi?.setFilterModel({
      ...agGridApi?.getFilterModel(),
      TenMH: {
        type: 'set',
        values: filteredMonHoc.map((it) => it.TenMH),
      },
    });
  }, [agGridApi, filteredMonHoc]);

  React.useEffect(() => {
    const gridApi = agGridApi;
    if (!gridApi) return;

    setTimeout(() => {
      gridApi?.onFilterChanged();
    }, 0);
  }, [agGridApi, viewMode, heDaoTaoFiltered]);

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
        rowData={rowData}
        headerHeight={22}
        animateRows={false}
        rowSelection="multiple"
        rowMultiSelectWithClick={true}
        rowClassRules={{
          'odd-row': 'data.color & 1',
          'even-row': '!(data.color & 1)',
        }}
        isExternalFilterPresent={() => {
          return Boolean(heDaoTaoFiltered) || viewMode !== 'Bình thường';
        }}
        doesExternalFilterPass={(node) => {
          const data = node.data as ClassModel;
          const passedHeDaoTao = !heDaoTaoFiltered || isMonChung(data) || data.HeDT === heDaoTaoFiltered;
          const passedViewMode = (() => {
            if (viewMode === 'Bình thường') return true;
            const selected = agGridApi?.getSelectedRows() as ClassModel[];
            if (viewMode === 'Xem lớp đã chọn') {
              return selected?.some((it) => it.MaLop === data.MaLop);
            }
            if (viewMode === 'Ẩn môn đã chọn') {
              const chungMonVsLopDaChon = selected?.some((it) => isChungMon(it, data));
              return !chungMonVsLopDaChon;
            }
            return false;
          })();
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
        onGridReady={(params) => {
          setAgGridApi(params.api);
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
        onFilterChanged={({ api }) => dispatch(setAgGridFilterModel(api.getFilterModel()))}
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
