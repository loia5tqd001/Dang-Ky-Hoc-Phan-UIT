import React from 'react';
// ag-grid
import { AgGridReact } from 'ag-grid-react';
import './styles.css';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { setAgGridFilterModel, setSelectedClasses } from 'redux/xepTkb/slice';
import {
  selectAgGridColumnState,
  selectAgGridFilterModel,
  selectSelectedClasses,
  selectTongSoTC,
} from 'redux/xepTkb/selectors';
// others
import uniq from 'lodash/uniq';
import { columnDefs, defaultColDef, isSameRow } from './utils';
import { useDebouncedStoreColumnState } from './hooks';

function Index({ rowData, setIsDialogOpen, setLopTrungTkb }) {
  const dispatch = useDispatch();

  const selectedClasses = useSelector(selectSelectedClasses);
  const agGridColumnState = useSelector(selectAgGridColumnState);
  const agGridFilterModel = useSelector(selectAgGridFilterModel);
  const tongSoTC = useSelector(selectTongSoTC);

  const { debouncedStoreColumnState } = useDebouncedStoreColumnState();
  console.log(tongSoTC ?? 0);
  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: '90vh',
        fontFamily: 'inherit',
      }}
    >
      <AgGridReact
        columnDefs={columnDefs({ soTc: tongSoTC })}
        defaultColDef={defaultColDef}
        rowData={rowData}
        headerHeight={30}
        animateRows={true}
        rowSelection="multiple"
        rowMultiSelectWithClick={true}
        rowClassRules={{
          'odd-row': 'data.color & 1',
          'even-row': '!(data.color & 1)',
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
      />
    </div>
  );
}

export default Index;
