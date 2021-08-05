import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { ColumnState } from 'ag-grid-community';
import { ClassModel } from 'models';

export interface State {
  loaiTkb: 'up-tu-file-excel' | 'su-dung-dkhp-uit';
  // "dataExcel" only available when "loaiTkb" is "up-tu-file-excel"
  // I can declare that explicitly with typescript but it will hurt the readability
  // Here is how to do it: https://stackoverflow.com/questions/56949513/typescript-type-of-a-property-dependent-on-another-property-within-the-same-obj
  dataExcel: {
    fileName: string;
    data: ClassModel[];
    lastUpdate: string;
  } | null;
  dataDkhpPage: {
    lopThuong: string;
    lopAnhVan: string;
  };

  listMaMHTextarea: string;
  heDaoTaoFiltered: string | null;
  // heDaoTaoFiltered: string[]; // ['CQUI', 'CLC', ...]
  selectedClasses: ClassModel[];
  agGridColumnState: ColumnState[] | null;
  agGridFilterModel: any | null;

  // in case Buoc 3 chi ve TKB chu khong dung Buoc 2 Xep Lop
  isChiVeTkb: boolean;
  textareaChiVeTkb: string;
}

export interface Reducer {
  setLoaiTkb: (state: Draft<State>, action: PayloadAction<State['loaiTkb']>) => void;
  setDataExcel: (state, action: PayloadAction<State['dataExcel']>) => void;
  setDataDkhpLopThuong: (state, action: PayloadAction<State['dataDkhpPage']['lopThuong']>) => void;
  setDataDkhpLopAnhVan: (state, action: PayloadAction<State['dataDkhpPage']['lopAnhVan']>) => void;
  setListMaMHTextarea: (state, action: PayloadAction<State['listMaMHTextarea']>) => void;
  setHeDaoTaoFiltered: (state, action: PayloadAction<State['heDaoTaoFiltered']>) => void;
  setSelectedClasses: (state, action: PayloadAction<State['selectedClasses']>) => void;
  setAgGridColumnState: (state, action: PayloadAction<State['agGridColumnState']>) => void;
  setAgGridFilterModel: (state, action: PayloadAction<State['agGridFilterModel']>) => void;
  setIsChiVeTkb: (state, action: PayloadAction<State['isChiVeTkb']>) => void;
  setTextareChiVeTkb: (state, action: PayloadAction<State['textareaChiVeTkb']>) => void;
}
