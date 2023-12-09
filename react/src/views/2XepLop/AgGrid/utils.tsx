import { ColDef } from 'ag-grid-community';
import { ClassModel } from 'models';
import { useMemo } from 'react';
import { getBuoiFromTiet } from '../../../utils';

export const isSameRow = (r1: ClassModel, r2: ClassModel) => {
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

export const useColumnDefs = () => {
  // TODO: provide TData and TValue for ColDef for type safety
  const columnDefs = useMemo<ColDef[]>(() => {
    return [
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
        comparator: (a: string, b: string) => {
          return a.localeCompare(b);
        },
      },
      {
        headerName: 'BUỔI',
        field: 'Buoi',
        initialWidth: 95,
        enableRowGroup: true,
        comparator: (a, b) => {
          return BUOI_ORDER_PRIORITY[a] - BUOI_ORDER_PRIORITY[b];
        },
      },
      {
        headerName: 'TIẾT',
        field: 'Tiet',
        initialWidth: 80,
        cellStyle: { fontWeight: 600 },
        comparator: (tietA: string, tietB: string) => {
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
        comparator: (a, b) => {
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
  }, []);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      resizable: true,
      filter: true,
      menuTabs: ['generalMenuTab'],
      filterParams: { buttons: ['apply', 'reset'], closeOnApply: true },
      floatingFilter: true,
    };
  }, []);

  return { columnDefs, defaultColDef };
};
