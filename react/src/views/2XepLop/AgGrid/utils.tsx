import {
  AgGridEvent,
  CellStyle,
  GetContextMenuItemsParams,
  GridOptions,
  GridReadyEvent,
  IRowNode,
  MenuItemDef,
  RowClickedEvent,
  SelectionChangedEvent,
  ValueGetterParams,
} from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import sortBy from 'lodash/sortBy';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Buoi, ClassModel } from 'types';
import { useDebouncedCallback } from 'use-debounce';
import SoTinChi from '../../../components/SoTinChi';
import {
  constructFinalSelectedClasses,
  getAgGridRowId,
  getBuoiFromTiet,
  hasOverlapSchedule,
  isSameAgGridRowId,
  log,
} from '../../../utils';
import {
  selectAgGridColumnState,
  selectAgGridFilterModel,
  selectFinalDataTkb,
  selectSelectedClasses,
  useTkbStore,
} from '../../../zus';
import { useTrungTkbDialogContext } from '../TrungTkbDialog';

type FormattedBuoiValid = 'Sáng ☀️' | 'Chiều 🌞' | 'Tối 🌚';
type FormattedBuoi = FormattedBuoiValid | '*';
const BUOI_FORMAT_MAP: Record<Buoi, FormattedBuoi> = {
  [Buoi.Sang]: 'Sáng ☀️',
  [Buoi.Chieu]: 'Chiều 🌞',
  [Buoi.Toi]: 'Tối 🌚',
  [Buoi.N_A]: '*',
} as const;

type FormattedThuBuoiValid = `Thứ ${number} ${FormattedBuoiValid}`;
type FormattedThuBuoi = FormattedThuBuoiValid | '*';
const THUBUOI_ORDER_PRIORITY: Record<FormattedThuBuoi, number> = {
  '*': 0,
  'Thứ 2 Sáng ☀️': 1,
  'Thứ 2 Chiều 🌞': 2,
  'Thứ 2 Tối 🌚': 3,
  'Thứ 3 Sáng ☀️': 4,
  'Thứ 3 Chiều 🌞': 5,
  'Thứ 3 Tối 🌚': 6,
  'Thứ 4 Sáng ☀️': 7,
  'Thứ 4 Chiều 🌞': 8,
  'Thứ 4 Tối 🌚': 9,
  'Thứ 5 Sáng ☀️': 10,
  'Thứ 5 Chiều 🌞': 11,
  'Thứ 5 Tối 🌚': 12,
  'Thứ 6 Sáng ☀️': 13,
  'Thứ 6 Chiều 🌞': 14,
  'Thứ 6 Tối 🌚': 15,
  'Thứ 7 Sáng ☀️': 16,
  'Thứ 7 Chiều 🌞': 17,
  'Thứ 7 Tối 🌚': 18,
} as const;

const HTGD_ORDER_PRIORITY: Record<ClassModel['HTGD'], number> = {
  LT: 1,
  HT1: 2,
  HT2: 3,
  ĐA: 4,
  TTTN: 5,
  KLTN: 6,
} as const;

const BOLD_CELL_STYLE: CellStyle = { fontWeight: 600 };

const columnDefs: GridOptions['columnDefs'] = [
  {
    headerName: 'STT',
    field: 'STT',
    filter: false,
    hide: true,
  },
  {
    headerName: 'MÃ MH',
    field: 'MaMH',
    initialWidth: 100,
    hide: true,
  },
  {
    headerName: 'TÊN MÔN HỌC',
    field: 'TenMH',
    initialWidth: 280,
    cellStyle: BOLD_CELL_STYLE,
    enableRowGroup: true,
  },
  {
    headerName: 'MÃ LỚP',
    field: 'MaLop',
    initialWidth: 200,
    filter: 'agTextColumnFilter',
    checkboxSelection: true,
  },
  {
    headerName: 'MÃ GIẢNG VIÊN',
    field: 'MaGV',
    initialWidth: 150,
    filter: false,
    hide: true,
  },
  {
    headerName: 'TÊN GIẢNG VIÊN',
    field: 'TenGV',
    initialWidth: 250,
    filter: 'agTextColumnFilter',
  },
  {
    headerName: 'SỐ TC',
    field: 'SoTc',
    initialWidth: 125,
    filter: false,
  },
  {
    headerName: 'THỨ+BUỔI',
    colId: 'ThuBuoi',
    initialWidth: 150,
    enableRowGroup: true,
    hide: true,
    // originally had valueGetter as a raw number, then used valueFormatter to format it, but it turned out to be troublesome so I changed to this
    valueGetter: ({ data }: ValueGetterParams<ClassModel, number>): FormattedThuBuoi => {
      if (!data?.Thu || data.Thu === '*') return '*';
      const buoi = getBuoiFromTiet(data.Tiet);
      return `Thứ ${parseInt(data.Thu)} ${BUOI_FORMAT_MAP[buoi]}` as FormattedThuBuoiValid;
    },
    comparator: (a, b) => {
      return THUBUOI_ORDER_PRIORITY[a] - THUBUOI_ORDER_PRIORITY[b];
    },
  },
  {
    headerName: 'THỨ',
    field: 'Thu',
    initialWidth: 85,
    cellStyle: BOLD_CELL_STYLE,
    enableRowGroup: true,
    comparator: (a: ClassModel['Thu'], b: ClassModel['Thu']) => {
      return a.localeCompare(b);
    },
  },
  {
    headerName: 'TIẾT',
    field: 'Tiet',
    initialWidth: 80,
    cellStyle: BOLD_CELL_STYLE,
    comparator: (tietA: ClassModel['Tiet'], tietB: ClassModel['Tiet']) => {
      const buoiA = getBuoiFromTiet(tietA);
      const buoiB = getBuoiFromTiet(tietB);
      if (buoiA === buoiB) {
        return tietA.localeCompare(tietB);
      }
      return buoiA - buoiB;
    },
  },
  {
    headerName: 'HỆ ĐT',
    field: 'HeDT',
    initialWidth: 90,
    // TODO: check isMonChung
  },
  {
    headerName: 'KHOA QL',
    field: 'KhoaQL',
    initialWidth: 120,
    enableRowGroup: true,
  },
  {
    headerName: 'HTGD',
    field: 'HTGD',
    initialWidth: 85,
    comparator: (a: ClassModel['HTGD'], b: ClassModel['HTGD']) => {
      return HTGD_ORDER_PRIORITY[a] - HTGD_ORDER_PRIORITY[b];
    },
  },
  {
    headerName: 'THỰC HÀNH',
    field: 'ThucHanh',
    initialWidth: 130,
    hide: true,
  },
  {
    headerName: 'CÁCH TUẦN',
    field: 'CachTuan',
    initialWidth: 125,
    filter: false,
  },
  {
    headerName: 'SỈ SỐ',
    field: 'SiSo',
    initialWidth: 80,
    filter: false,
  },
  {
    headerName: 'PHÒNG HỌC',
    field: 'PhongHoc',
    initialWidth: 130,
    filter: false,
  },
  {
    headerName: 'KHÓA HỌC',
    field: 'KhoaHoc',
    initialWidth: 120,
  },
  {
    headerName: 'HỌC KỲ',
    field: 'HocKy',
    initialWidth: 100,
    filter: false,
  },
  {
    headerName: 'NĂM HỌC',
    field: 'NamHoc',
    initialWidth: 110,
    filter: false,
  },
  {
    headerName: 'NBD',
    field: 'NBD',
    initialWidth: 110,
    filter: false,
  },
  {
    headerName: 'NKT',
    field: 'NKT',
    initialWidth: 110,
    filter: false,
  },
  {
    headerName: 'GHI CHÚ',
    field: 'GhiChu',
  },
  {
    headerName: 'NGÔN NGỮ',
    field: 'NgonNgu',
    initialWidth: 120,
  },
];

const defaultColDef: GridOptions['defaultColDef'] = {
  resizable: true,
  filter: true,
  menuTabs: ['generalMenuTab'],
  filterParams: { buttons: ['apply', 'reset'], closeOnApply: true },
  floatingFilter: true,
};

// Sort after grouping: https://www.ag-grid.com/javascript-data-grid/row-sorting/#custom-sorting-groups-example
const autoGroupColumnDef: GridOptions['autoGroupColumnDef'] = {
  sort: 'asc',
  comparator: (a, b) => {
    const isGroupingByThuBuoi = a?.includes('Thứ') && b?.includes('Thứ');
    if (isGroupingByThuBuoi) {
      return THUBUOI_ORDER_PRIORITY[a] - THUBUOI_ORDER_PRIORITY[b];
    }
    const bothAreNumeral = /\d+/.test(a) && /\d+/.test(b);
    if (bothAreNumeral) return a - b;
    return 0;
  },
};

const sideBar: GridOptions['sideBar'] = {
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
};

const statusBar: GridOptions['statusBar'] = {
  statusPanels: [
    { statusPanel: 'agSelectedRowCountComponent', align: 'right' },
    { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'right' },
    { statusPanel: SoTinChi, align: 'left' },
  ],
};

const getMainMenuItems: GridOptions['getMainMenuItems'] = () => {
  return ['pinSubMenu', 'separator', 'autoSizeThis', 'autoSizeAll'];
};

const getRowId: GridOptions<ClassModel>['getRowId'] = ({ data }) => {
  return getAgGridRowId(data);
};

const PROGRAMMATICALLY_CHANGE_SELECTION = 'api';
export const useGridOptions = () => {
  const agGridRef = useRef<AgGridReact<ClassModel>>(null);

  const { openTrungTkbDialog } = useTrungTkbDialogContext();
  const selectedClasses = useTkbStore(selectSelectedClasses);
  const setSelectedClasses = useTkbStore((s) => s.setSelectedClasses);

  const updateNodesSelectionToAgGrid = useCallback((selectedClasses: ClassModel[]) => {
    if (!agGridRef.current?.api) return;
    const { api } = agGridRef.current;

    api.deselectAll(PROGRAMMATICALLY_CHANGE_SELECTION); // clear old selection

    const toSelectNodes: IRowNode<ClassModel>[] = [];
    api.forEachNode((node) => {
      if (selectedClasses.find((it) => node.data && isSameAgGridRowId(it, node.data))) {
        toSelectNodes.push(node);
      }
    });
    if (toSelectNodes.length) {
      api.setNodesSelected({ nodes: toSelectNodes, newValue: true, source: PROGRAMMATICALLY_CHANGE_SELECTION });
    }
  }, []);

  const onSelectionChanged = useCallback(
    ({ source, api }: SelectionChangedEvent<ClassModel>) => {
      if (source === PROGRAMMATICALLY_CHANGE_SELECTION) return;

      const oldSelectedClasses = selectedClasses;
      const newSelectedClasses = api.getSelectedRows();

      // we don't have the case when an action is a mix of add and remove yet
      const isRemoving = newSelectedClasses.length < oldSelectedClasses.length;
      if (isRemoving) {
        setSelectedClasses(newSelectedClasses);
        return;
      }

      const { finalSelectedClasses, overlappedClasses } = constructFinalSelectedClasses(
        oldSelectedClasses,
        newSelectedClasses,
      );
      if (overlappedClasses.length) {
        openTrungTkbDialog(overlappedClasses);
      }
      setSelectedClasses(finalSelectedClasses);
      updateNodesSelectionToAgGrid(finalSelectedClasses);
    },
    [openTrungTkbDialog, selectedClasses, setSelectedClasses, updateNodesSelectionToAgGrid],
  );

  const DEBOUNCE_TIME = 500;
  const setAgGridFilterModel = useTkbStore((s) => s.setAgGridFilterModel);
  const setAgGridColumnState = useTkbStore((s) => s.setAgGridColumnState);
  const onFilterChanged: GridOptions['onFilterChanged'] = useDebouncedCallback(({ api }: AgGridEvent) => {
    log('>>onFilterChanged');
    setAgGridFilterModel(api.getFilterModel());
  }, DEBOUNCE_TIME);

  // onColumnResized will be called too much without debounce
  const onColumnChanged = useDebouncedCallback(({ columnApi }: AgGridEvent) => {
    log('>>onColumnChanged');
    setAgGridColumnState(columnApi.getColumnState());
  }, DEBOUNCE_TIME);

  const agGridFilterModel = useTkbStore(selectAgGridFilterModel);
  const agGridColumnState = useTkbStore(selectAgGridColumnState);
  const onGridReady = useCallback(
    ({ api, columnApi }: GridReadyEvent<ClassModel, any>) => {
      if (agGridColumnState?.length) {
        columnApi.applyColumnState({ state: agGridColumnState });
      }
      if (agGridFilterModel && Object.keys(agGridFilterModel).length) {
        api.setFilterModel(agGridFilterModel);
      }
      if (selectedClasses.length) {
        updateNodesSelectionToAgGrid(selectedClasses);
      }
    },
    [agGridColumnState, agGridFilterModel, selectedClasses, updateNodesSelectionToAgGrid],
  );

  const onRowClicked = useCallback(({ node }: RowClickedEvent) => {
    log('>>onRowClicked');
    if (node.group) {
      node.setExpanded(!node.expanded);
    }
  }, []);

  const getContextMenuItems = useCallback((params: GetContextMenuItemsParams<ClassModel>): (string | MenuItemDef)[] => {
    return [
      {
        name: 'Copy Cell',
        action: () => {
          navigator.clipboard.writeText(params.value);
        },
      },
      'separator',
      'autoSizeAll',
      'separator',
      'resetColumns',
      {
        name: 'Reset Filters',
        action: () => {
          agGridRef.current?.api?.setFilterModel(null);
        },
      },
      'separator',
      'expandAll',
      'contractAll',
    ];
  }, []);

  const dataTkb = useTkbStore(selectFinalDataTkb);
  const rowData: GridOptions['rowData'] = useMemo(() => {
    return sortBy(dataTkb, ['KhoaQL', 'MaLop', 'Thu', 'Tiet']);
  }, [dataTkb]);

  // TODO: try handle via event, better way than useEffect
  useEffect(() => {
    // update o buoc 3, thay doi agGrid
    const gridLength = agGridRef.current?.api?.getSelectedRows().length;
    const stateLength = selectedClasses.length;
    if (gridLength !== stateLength) {
      log('>>useEffect: selectedClasses changed');
      updateNodesSelectionToAgGrid(selectedClasses);
    }
  }, [selectedClasses, setSelectedClasses, updateNodesSelectionToAgGrid]);

  const isRowSelectable = useCallback(
    (node: IRowNode<ClassModel>): boolean => {
      return !!node.data && !hasOverlapSchedule(selectedClasses, node.data);
    },
    [selectedClasses],
  );

  // https://stackoverflow.com/a/64023627/9787887
  useEffect(() => {
    agGridRef.current?.api?.forEachLeafNode((node) => {
      const oldSelectable = node.selectable;
      const newSelectable = isRowSelectable(node);
      if (oldSelectable === newSelectable) return;

      // @ts-ignore
      node.setRowSelectable(isRowSelectable(node));
    });
  }, [selectedClasses, isRowSelectable]);

  return {
    agGridRef,
    isRowSelectable,
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
  };
};
