// got from Excel
export type ClassModelOriginal = {
  STT: number;
  MaMH: string;
  MaLop: string;
  TenMH: string;
  TenGV: string | undefined;
  MaGV: string | undefined;
  SiSo: string;
  PhongHoc: string | undefined;
  SoTc: number;
  ThucHanh: number;
  HTGD: string;
  Thu: string;
  Tiet: string;
  CachTuan: string;
  KhoaHoc: string;
  HocKy: string;
  NamHoc: string;
  HeDT: string;
  KhoaQL: string;
  NBD: string;
  NKT: string;
  GhiChu: string;
  NgonNgu: string;
};

export type ClassModel = ClassModelOriginal & {
  /* built from Tiet */
  Buoi: '*' | 'Sáng ☀️' | 'Chiều 🌞' | 'Tối 🌚';
};
