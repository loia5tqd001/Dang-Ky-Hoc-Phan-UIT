import { AgGridEvent, GridOptions, RowSelectedEvent } from 'ag-grid-community';
import sortBy from 'lodash/sortBy';
import { ClassModel } from 'models';
import { enqueueSnackbar } from 'notistack';
import { useCallback, useMemo } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { getBuoiFromTiet, getDanhSachTiet, isChungMon, log } from '../../../utils';
import { useTrungTkbDialogContext } from '../TrungTkbDialog';
import { selectAgGridFilterModel, selectFinalDataTkb, selectSelectedClasses, useTkbStore } from '../../../zus';
import SoTinChi from './SoTinChi';

const isSameRow = (r1: ClassModel, r2: ClassModel) => {
  return r1.MaLop + r1.Thu + r1.Tiet === r2.MaLop + r2.Thu + r2.Tiet;
};

const BUOI_ORDER_PRIORITY: Record<ClassModel['Buoi'], number> = {
  'Sáng ☀️': 1,
  'Chiều 🌞': 2,
  'Tối 🌚': 3,
  '*': 4,
};

// TODO: refactor this
const THUBUOI_ORDER_PRIORITY: Record<ClassModel['ThuBuoi'], number> = {
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
  '*': 19,
};

const HTGD_ORDER_PRIORITY: Record<ClassModel['HTGD'], number> = {
  LT: 1,
  HT1: 2,
  HT2: 3,
  ĐA: 4,
  TTTN: 5,
  KLTN: 6,
};

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
    cellStyle: { fontWeight: 600 },
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
    headerName: 'THỨ',
    field: 'Thu',
    initialWidth: 85,
    cellStyle: { fontWeight: 600 },
    enableRowGroup: true,
    comparator: (a: ClassModel['Thu'], b: ClassModel['Thu']) => {
      return a.localeCompare(b);
    },
  },
  {
    headerName: 'BUỔI',
    field: 'Buoi',
    initialWidth: 95,
    enableRowGroup: true,
    hide: true,
    comparator: (a: ClassModel['Buoi'], b: ClassModel['Buoi']) => {
      return BUOI_ORDER_PRIORITY[a] - BUOI_ORDER_PRIORITY[b];
    },
  },
  {
    headerName: 'THỨ+BUỔI',
    field: 'ThuBuoi',
    initialWidth: 150,
    enableRowGroup: true,
    hide: true,
    comparator: (a: ClassModel['ThuBuoi'], b: ClassModel['ThuBuoi']) => {
      return THUBUOI_ORDER_PRIORITY[a] - THUBUOI_ORDER_PRIORITY[b];
    },
  },
  {
    headerName: 'TIẾT',
    field: 'Tiet',
    initialWidth: 80,
    cellStyle: { fontWeight: 600 },
    comparator: (tietA: ClassModel['Tiet'], tietB: ClassModel['Tiet']) => {
      const buoiA = BUOI_ORDER_PRIORITY[getBuoiFromTiet(tietA)];
      const buoiB = BUOI_ORDER_PRIORITY[getBuoiFromTiet(tietB)];
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
    if (a?.includes('Thứ') && b?.includes('Thứ')) {
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
};

export const useGridOptions = () => {
  const { openTrungTkbDialog } = useTrungTkbDialogContext();
  const selectedClasses = useTkbStore(selectSelectedClasses);
  const setSelectedClasses = useTkbStore((s) => s.setSelectedClasses);
  const onRowSelected: GridOptions['onRowSelected'] = useCallback(
    ({ api, data, node }: RowSelectedEvent<ClassModel, any>) => {
      if (!data) return;
      if (node.isSelected() && selectedClasses.find((it) => isSameRow(it, data))) return;
      if (!node.isSelected()) {
        setSelectedClasses(api.getSelectedRows());
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
      setSelectedClasses(api.getSelectedRows());
    },
    [openTrungTkbDialog, selectedClasses, setSelectedClasses],
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
  const onGridReady: GridOptions['onGridReady'] = useCallback(
    ({ api, columnApi }) => {
      const agGridColumnState = columnApi.getColumnState();
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
    },
    [agGridFilterModel, selectedClasses],
  );

  const dataTkb = useTkbStore(selectFinalDataTkb);
  const rowData: GridOptions['rowData'] = useMemo(() => {
    return sortBy(dataTkb, ['KhoaQL', 'MaLop', 'Thu', 'Tiet']);
  }, [dataTkb]);

  return {
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
  };
};
