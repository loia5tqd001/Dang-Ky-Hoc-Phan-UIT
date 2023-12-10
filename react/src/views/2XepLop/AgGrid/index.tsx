import { AgGridReact } from 'ag-grid-react';
import { ClassModel } from 'models';
import './styles.css';
import { useGridOptions } from './utils';

function AgGrid() {
  const {
    agGridRef,
    columnDefs,
    defaultColDef,
    autoGroupColumnDef,
    getMainMenuItems,
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
        // animateRows={false}
        enableCellTextSelection={true}
        rowSelection="multiple"
        rowMultiSelectWithClick={true}
        groupSelectsChildren={true}
        groupSelectsFiltered={true}
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
        onSelectionChanged={onSelectionChanged}
        onGridReady={onGridReady}
        getRowId={getRowId}
        onRowClicked={onRowClicked}
      />
    </div>
  );
}

export default AgGrid;
