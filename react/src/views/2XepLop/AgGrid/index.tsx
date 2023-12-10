import { AgGridReact } from 'ag-grid-react';
import { ClassModel } from 'models';
import React from 'react';
import './styles.css';
import { useGridOptions } from './utils';

function AgGrid() {
  const {
    columnDefs,
    defaultColDef,
    autoGroupColumnDef,
    getMainMenuItems,
    statusBar,
    sideBar,
    onRowSelected,
    onFilterChanged,
    onColumnChanged,
    onGridReady,
    rowData,
  } = useGridOptions();
  const agGridRef = React.useRef<AgGridReact<ClassModel>>(null);

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
        autoGroupColumnDef={autoGroupColumnDef}
        headerHeight={30}
        // animateRows={false}
        enableCellTextSelection={true}
        rowSelection="multiple"
        rowMultiSelectWithClick={true}
        // groupSelectsChildren={true} // TODO: handle multi-select and show Dialog
        rowHeight={30} // TODO: adding this makes the grid a bit slower, try optimizing by setting CSS directly if possible later
        getMainMenuItems={getMainMenuItems}
        statusBar={statusBar}
        sideBar={sideBar}
        // set this to "never" to display grouping info at sideBar only, for a more minimal UI
        rowGroupPanelShow="never"
        suppressDragLeaveHidesColumns={true}
        rowClass="ag-cell-normal"
        onColumnVisible={onColumnChanged}
        onColumnPinned={onColumnChanged}
        onColumnResized={onColumnChanged}
        onColumnMoved={onColumnChanged}
        onColumnRowGroupChanged={onColumnChanged}
        onFilterChanged={onFilterChanged}
        onRowSelected={onRowSelected}
        // TODO: see if there's a better way to do this
        onGridReady={onGridReady}
      />
    </div>
  );
}

export default AgGrid;
