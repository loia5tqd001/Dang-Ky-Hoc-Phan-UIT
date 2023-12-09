import { AgGridEvent, GridOptions, RowSelectedEvent } from 'ag-grid-community';
import sortBy from 'lodash/sortBy';
import { ClassModel } from 'models';
import { enqueueSnackbar } from 'notistack';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAgGridColumnState, setAgGridFilterModel, setSelectedClasses } from 'redux/xepTkb/slice';
import { useDebouncedCallback } from 'use-debounce';
import { selectAgGridFilterModel, selectFinalDataTkb, selectSelectedClasses } from '../../../redux/xepTkb/selectors';
import { getBuoiFromTiet, getDanhSachTiet, isChungMon, log } from '../../../utils';
import { useTrungTkbDialogContext } from '../TrungTkbDialog';
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
    comparator: (a: ClassModel['Buoi'], b: ClassModel['Buoi']) => {
      return BUOI_ORDER_PRIORITY[a] - BUOI_ORDER_PRIORITY[b];
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
  const dispatch = useDispatch();

  const { openTrungTkbDialog } = useTrungTkbDialogContext();
  const selectedClasses = useSelector(selectSelectedClasses);
  const onRowSelected: GridOptions['onRowSelected'] = useCallback(
    ({ api, data, node }: RowSelectedEvent<ClassModel, any>) => {
      if (!data) return;
      if (node.isSelected() && selectedClasses.find((it) => isSameRow(it, data))) return;
      if (!node.isSelected()) {
        dispatch(setSelectedClasses(api.getSelectedRows()));
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
      dispatch(setSelectedClasses(api.getSelectedRows()));
    },
    [dispatch, openTrungTkbDialog, selectedClasses],
  );

  const DEBOUNCE_TIME = 500;
  const onFilterChanged: GridOptions['onFilterChanged'] = useDebouncedCallback(({ api }: AgGridEvent) => {
    log('>>onFilterChanged');
    dispatch(setAgGridFilterModel(api.getFilterModel()));
  }, DEBOUNCE_TIME);

  // onColumnResized will be called too much without debounce
  const onColumnChanged = useDebouncedCallback(({ columnApi }: AgGridEvent) => {
    log('>>onColumnChanged');
    dispatch(setAgGridColumnState(columnApi.getColumnState()));
  }, DEBOUNCE_TIME);

  const agGridFilterModel = useSelector(selectAgGridFilterModel);
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

  const dataTkb = useSelector(selectFinalDataTkb);
  const rowData: GridOptions['rowData'] = useMemo(() => {
    return sortBy(dataTkb, ['KhoaQL', 'MaLop', 'Thu', 'Tiet']);
  }, [dataTkb]);

  return {
    columnDefs,
    defaultColDef,
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
