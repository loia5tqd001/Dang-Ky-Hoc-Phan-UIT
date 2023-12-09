import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { ColumnApi, GridApi } from 'ag-grid-community';
import { ClassModel, ClassModelOriginal } from 'models';

export type State = {
  dataExcel: {
    fileName: string;
    data: ClassModelOriginal[];
    lastUpdate: string;
  } | null;

  selectedClasses: ClassModel[];
  agGridColumnState: ReturnType<ColumnApi['getColumnState']> | null;
  agGridFilterModel: ReturnType<GridApi['getFilterModel']> | null;

  // in case Buoc 3 chi ve TKB chu khong dung Buoc 2 Xep Lop
  isChiVeTkb: boolean;
  textareaChiVeTkb: string;
};

export type Reducer = {
  setDataExcel: (state: Draft<State>, action: PayloadAction<State['dataExcel']>) => void;
  setSelectedClasses: (state: Draft<State>, action: PayloadAction<State['selectedClasses']>) => void;
  setAgGridColumnState: (state: Draft<State>, action: PayloadAction<State['agGridColumnState']>) => void;
  setAgGridFilterModel: (state: Draft<State>, action: PayloadAction<State['agGridFilterModel']>) => void;
  setIsChiVeTkb: (state: Draft<State>, action: PayloadAction<State['isChiVeTkb']>) => void;
  setTextareChiVeTkb: (state: Draft<State>, action: PayloadAction<State['textareaChiVeTkb']>) => void;
};
