import { AgGridReact } from 'ag-grid-react';
import { ClassModel } from 'types';
import './styles.css';
import { useGridOptions } from './utils';
import { useCallback } from 'react';

function AgGrid() {
  const {
    agGridRef,
    columnDefs,
    defaultColDef,
    autoGroupColumnDef,
    getMainMenuItems,
    getContextMenuItems,
    statusBar,
    sideBar,
    onSelectionChanged,
    onFilterChanged,
    onColumnChanged,
    onGridReady,
    onRowClicked,
    rowData,
    getRowId,
  } = useGridOptions();

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
        rowHeight={30}
        enableCellTextSelection={true}
        suppressAnimationFrame={true}
        rowSelection="multiple"
        rowMultiSelectWithClick={true}
        groupSelectsChildren={true}
        groupSelectsFiltered={true}
        getMainMenuItems={getMainMenuItems}
        getContextMenuItems={getContextMenuItems}
        statusBar={statusBar}
        sideBar={sideBar} // TODO: open/close sideBar by keyboard shortcut
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
        onSelectionChanged={onSelectionChanged}
        onGridReady={onGridReady}
        getRowId={getRowId}
        onRowClicked={onRowClicked}
      />
    </div>
  );
}

export default AgGrid;
