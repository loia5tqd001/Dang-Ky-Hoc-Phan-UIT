export const isSameRow = (r1, r2) => {
  return r1.MaLop + r1.Thu + r1.Tiet === r2.MaLop + r2.Thu + r2.Tiet;
};

export const defaultColDef = {
  resizable: true,
  autoHeight: true,
  sortable: true,
};

export const columnDefs = ({ soTc }) => ([
  // { headerName: 'STT', field: 'STT' },
  { headerName: 'MÃ MH', field: 'MaMH', width: 100, hide: true },
  {
    headerName: 'TÊN MÔN HỌC',
    field: 'TenMH',
    width: 250,
    pinned: 'left',
    filter: true,
  },
  {
    headerName: 'MÃ LỚP',
    field: 'MaLop',
    width: 180,
    // headerCheckboxSelection: true,
    checkboxSelection: true,
    filter: true,
  },
  { headerName: 'MÃ GIẢNG VIÊN', field: 'MaGV', width: 150, hide: true },
  { headerName: 'TÊN GIẢNG VIÊN', field: 'TenGV', width: 250, filter: true },
  { headerName: `SỐ TC (${soTc})`, field: 'SoTc', width: 110, filter: true },
  { headerName: 'THỨ', field: 'Thu', width: 75, filter: true },
  { headerName: 'TIẾT', field: 'Tiet', width: 80 },
  { headerName: 'HỆ ĐT', field: 'HeDT', width: 90 },
  { headerName: 'KHOA QL', field: 'KhoaQL', width: 110, filter: true },
  { headerName: 'HTGD', field: 'HTGD', width: 85 },
  { headerName: 'THỰC HÀNH', field: 'ThucHanh', width: 130, hide: true },
  { headerName: 'CÁCH TUẦN', field: 'CachTuan', width: 125 },
  { headerName: 'SỈ SỐ', field: 'SiSo', width: 80 },
  { headerName: 'PHÒNG HỌC', field: 'PhongHoc', width: 130 },
  { headerName: 'KHÓA HỌC', field: 'KhoaHoc', width: 120, hide: true },
  { headerName: 'HỌC KỲ', field: 'HocKy', width: 100, hide: true },
  { headerName: 'NĂM HỌC', field: 'NamHoc', width: 110, hide: true },
  { headerName: 'NBD', field: 'NBD', width: 110 },
  { headerName: 'NKT', field: 'NKT', width: 110 },
  { headerName: 'GHI CHÚ', field: 'GhiChu' },
  { headerName: 'NGÔN NGỮ', field: 'NgonNgu', width: 120 },
]);
