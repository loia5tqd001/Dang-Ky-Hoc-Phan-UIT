import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { ColumnState } from 'ag-grid-community';
import { ClassModel, ClassModelOriginal } from 'models';

export const VIEW_MODES = ['Bình thường', 'Ẩn môn đã chọn', 'Xem lớp đã chọn'] as const;

export type State = {
  dataExcel: {
    fileName: string;
    data: ClassModelOriginal[];
    lastUpdate: string;
  } | null;

  listMaMHTextarea: string;
  selectedClasses: ClassModel[];
  agGridColumnState: ColumnState[] | null;
  agGridFilterModel: any | null;
  customViewMode: typeof VIEW_MODES[number];

  // in case Buoc 3 chi ve TKB chu khong dung Buoc 2 Xep Lop
  isChiVeTkb: boolean;
  textareaChiVeTkb: string;
};

export type Reducer = {
  setDataExcel: (state: Draft<State>, action: PayloadAction<State['dataExcel']>) => void;
  setListMaMHTextarea: (state: Draft<State>, action: PayloadAction<State['listMaMHTextarea']>) => void;
  setTenMonHocFilter: (state: Draft<State>, action: PayloadAction<ClassModel['TenMH'][]>) => void;
  setSelectedClasses: (state: Draft<State>, action: PayloadAction<State['selectedClasses']>) => void;
  setAgGridColumnState: (state: Draft<State>, action: PayloadAction<State['agGridColumnState']>) => void;
  setAgGridFilterModel: (state: Draft<State>, action: PayloadAction<State['agGridFilterModel']>) => void;
  setCustomViewMode: (state: Draft<State>, action: PayloadAction<State['customViewMode']>) => void;
  setIsChiVeTkb: (state: Draft<State>, action: PayloadAction<State['isChiVeTkb']>) => void;
  setTextareChiVeTkb: (state: Draft<State>, action: PayloadAction<State['textareaChiVeTkb']>) => void;
};
