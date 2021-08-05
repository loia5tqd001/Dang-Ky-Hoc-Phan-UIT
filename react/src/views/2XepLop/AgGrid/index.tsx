import { GridApi } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import uniq from 'lodash/uniq';
import { ClassModel } from 'models';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAgGridColumnState,
  selectAgGridFilterModel,
  selectHeDaoTaoFiltered,
  selectSelectedClasses,
} from 'redux/xepTkb/selectors';
import { setAgGridFilterModel, setSelectedClasses } from 'redux/xepTkb/slice';
import { calcTongSoTC, isMonChung } from 'utils';
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

export let agGridApi: GridApi | null = null;

function Index({ rowData, setIsDialogOpen, setLopTrungTkb }: Props) {
  const dispatch = useDispatch();

  const selectedClasses = useSelector(selectSelectedClasses);
  const agGridColumnState = useSelector(selectAgGridColumnState);
  const agGridFilterModel = useSelector(selectAgGridFilterModel);
  const tongSoTC = calcTongSoTC(selectedClasses);
  const heDaoTaoFiltered = useSelector(selectHeDaoTaoFiltered);
  const lastHeDaoTaoFiltered = React.useRef<string | null>(heDaoTaoFiltered);

  const { debouncedStoreColumnState } = useDebouncedStoreColumnState();

  React.useEffect(() => {
    // TODO: Refactor this tricky code
    if (heDaoTaoFiltered !== lastHeDaoTaoFiltered.current) {
      lastHeDaoTaoFiltered.current = heDaoTaoFiltered;
      agGridApi?.onFilterChanged();
    }
  }, [heDaoTaoFiltered]);

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
          return Boolean(lastHeDaoTaoFiltered.current);
        }}
        doesExternalFilterPass={(node) => {
          const data = node.data as ClassModel;
          return isMonChung(data) || data.HeDT === lastHeDaoTaoFiltered.current;
        }}
        frameworkComponents={{
          countTinChi: SoTinChi,
        }}
        statusBar={{
          statusPanels: [
            { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'right' },
            { statusPanel: 'countTinChi', align: 'left' },
          ],
        }}
        onRowSelected={(e) => {
          if (e.node.isSelected() && selectedClasses.find((it) => isSameRow(it, e.data))) {
            return;
          }
          if (!e.node.isSelected()) {
            dispatch(setSelectedClasses(e.api.getSelectedRows()));
            return;
          }
          const cungNgay = selectedClasses.filter((it) => e.data.Thu !== '*' && it.Thu === e.data.Thu);
          for (const lop of cungNgay) {
            const dsTiet1 = e.data.Tiet.split('');
            const dsTiet2 = lop.Tiet.split('');
            const dsTiet = [...dsTiet1, ...dsTiet2];
            const trungTkb = dsTiet.length !== uniq(dsTiet).length;
            if (trungTkb) {
              setLopTrungTkb({
                master: e.data,
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
          agGridApi = params.api;
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
