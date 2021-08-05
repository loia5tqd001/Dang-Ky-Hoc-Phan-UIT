import { ColDef } from 'ag-grid-community';

export const isSameRow = (r1, r2) => {
  return r1.MaLop + r1.Thu + r1.Tiet === r2.MaLop + r2.Thu + r2.Tiet;
};

export const defaultColDef = {
  resizable: true,
  autoHeight: true,
  sortable: true,
  menuTabs: ['filterMenuTab'],
} as ColDef;

export const columnDefs = ({ soTc }) =>
  [
    // { headerName: 'STT', field: 'STT' },
    { headerName: 'MÃ MH', field: 'MaMH', width: 100, hide: true, suppressMenu: true },
    {
      headerName: 'TÊN MÔN HỌC',
      field: 'TenMH',
      width: 280,
      pinned: 'left',
      filter: true,
      cellStyle: { fontWeight: 600 },
      menuTabs: ['filterMenuTab', 'generalMenuTab'],
    },
    {
      headerName: 'MÃ LỚP',
      field: 'MaLop',
      width: 200,
      // headerCheckboxSelection: true,
      checkboxSelection: true,
      suppressMenu: true,
    },
    { headerName: 'MÃ GIẢNG VIÊN', field: 'MaGV', width: 150, hide: true, suppressMenu: true },
    { headerName: 'TÊN GIẢNG VIÊN', field: 'TenGV', width: 250, filter: true, cellStyle: { fontWeight: 600 } },
    { headerName: `SỐ TC (${soTc})`, field: 'SoTc', width: 125, filter: true },
    { headerName: 'THỨ', field: 'Thu', width: 85, filter: true, cellStyle: { fontWeight: 600 } },
    { headerName: 'TIẾT', field: 'Tiet', width: 80, cellStyle: { fontWeight: 600 }, suppressMenu: true },
    { headerName: 'HỆ ĐT', field: 'HeDT', width: 90, suppressMenu: true },
    { headerName: 'KHOA QL', field: 'KhoaQL', width: 120, filter: true },
    { headerName: 'HTGD', field: 'HTGD', width: 85, suppressMenu: true },
    { headerName: 'THỰC HÀNH', field: 'ThucHanh', width: 130, hide: true, suppressMenu: true },
    { headerName: 'CÁCH TUẦN', field: 'CachTuan', width: 125, suppressMenu: true },
    { headerName: 'SỈ SỐ', field: 'SiSo', width: 80, suppressMenu: true },
    { headerName: 'PHÒNG HỌC', field: 'PhongHoc', width: 130, suppressMenu: true },
    { headerName: 'KHÓA HỌC', field: 'KhoaHoc', width: 120, suppressMenu: true },
    { headerName: 'HỌC KỲ', field: 'HocKy', width: 100, suppressMenu: true },
    { headerName: 'NĂM HỌC', field: 'NamHoc', width: 110, suppressMenu: true },
    { headerName: 'NBD', field: 'NBD', width: 110, suppressMenu: true },
    { headerName: 'NKT', field: 'NKT', width: 110, suppressMenu: true },
    { headerName: 'GHI CHÚ', field: 'GhiChu', suppressMenu: true },
    { headerName: 'NGÔN NGỮ', field: 'NgonNgu', width: 120, suppressMenu: true },
  ] as ColDef[];
