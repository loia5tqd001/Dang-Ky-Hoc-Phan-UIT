import { AgGridReact } from 'ag-grid-react';
import { ClassModel } from 'models';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAgGridColumnState,
  selectAgGridFilterModel,
  selectFinalDataTkb,
  selectSelectedClasses,
} from 'redux/xepTkb/selectors';
import { sortBy } from 'lodash';
import SoTinChi from './SoTinChi';
import { useDebouncedStoreColumnState } from './hooks';
import './styles.css';
import { isSameRow, useColumnDefs } from './utils';

function Index() {
  const selectedClasses = useSelector(selectSelectedClasses);
  const agGridColumnState = useSelector(selectAgGridColumnState);
  const agGridFilterModel = useSelector(selectAgGridFilterModel);

  const { columnDefs, defaultColDef } = useColumnDefs();

  const { debouncedStoreColumnState, debouncedStoreFilterModel, onRowSelected } = useDebouncedStoreColumnState();
  const agGridRef = React.useRef<AgGridReact<ClassModel>>(null);

  const dataTkb = useSelector(selectFinalDataTkb);

  const rowData = React.useMemo(() => {
    return sortBy(dataTkb, ['KhoaQL', 'MaLop', 'Thu', 'Tiet']);
  }, [dataTkb]);

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: 'calc(100vh - 45px)',
        fontFamily: 'inherit',
      }}
    >
      <AgGridReact<ClassModel>
        ref={agGridRef}
        rowData={rowData}
        defaultColDef={defaultColDef}
        columnDefs={columnDefs}
        headerHeight={30}
        // animateRows={false}
        rowSelection="multiple"
        rowMultiSelectWithClick={true}
        // groupSelectsChildren={true} // TODO: handle multi-select and show Dialog
        rowHeight={30} // TODO: adding this makes the grid a bit slower, try optimizing by setting CSS directly if possible later
        getMainMenuItems={() => {
          // TODO: custom MenuItems for each column
          return [
            'pinSubMenu',
            'separator',
            'autoSizeThis',
            'autoSizeAll',
            'resetColumns',
            'resetAllFilters', // TODO: implement this
            'separator',
            // 'rowGroup',
            // 'rowUnGroup',
            'expandAll',
            'contractAll',
          ];
        }}
        statusBar={{
          statusPanels: [
            { statusPanel: 'agSelectedRowCountComponent', align: 'right' },
            { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'right' },
            { statusPanel: SoTinChi, align: 'left' },
          ],
        }}
        sideBar={{
          toolPanels: [
            {
              id: 'columns',
              labelDefault: 'Columns',
              labelKey: 'columns',
              iconKey: 'columns',
              toolPanel: 'agColumnsToolPanel',
              toolPanelParams: {
                suppressValues: true,
                suppressPivotMode: true,
              },
            },
            {
              id: 'filters',
              labelDefault: 'Filters',
              labelKey: 'filters',
              iconKey: 'filter',
              toolPanel: 'agFiltersToolPanel',
            },
          ],
        }}
        // rowGroup info to be displayed at sideBar only, for a more minimal UI
        rowGroupPanelShow="never"
        suppressDragLeaveHidesColumns={true}
        // Sort after grouping: https://www.ag-grid.com/javascript-data-grid/row-sorting/#custom-sorting-groups-example
        autoGroupColumnDef={{
          sort: 'asc',
          comparator: (a, b) => {
            if (/\d+/.test(a) && /\d+/.test(b)) return a - b;
            return 0;
          },
        }}
        rowClass="ag-cell-normal"
        onColumnVisible={debouncedStoreColumnState}
        onColumnPinned={debouncedStoreColumnState}
        onColumnResized={debouncedStoreColumnState}
        onColumnMoved={debouncedStoreColumnState}
        onColumnRowGroupChanged={debouncedStoreColumnState}
        onColumnValueChanged={debouncedStoreColumnState}
        onFilterChanged={debouncedStoreFilterModel}
        // TODO: see if there's a better way to do this
        onGridReady={({ api, columnApi }) => {
          if (agGridColumnState) {
            columnApi.applyColumnState({ state: agGridColumnState });
            api.setFilterModel(agGridFilterModel);
          }
          if (selectedClasses.length) {
            api.forEachNode((node) => {
              if (selectedClasses.find((it) => node.data && isSameRow(it, node.data))) {
                node.setSelected(true);
              }
            });
          }
        }}
        onRowSelected={onRowSelected}

        // suppressColumnVirtualisation

        // viewportRowModelBufferSize={rowData.length - 100}
        // rowBuffer={100}
        // suppressAnimationFrame={true}
        // suppressColumnMoveAnimation={true}
      />
    </div>
  );
}

export default Index;
