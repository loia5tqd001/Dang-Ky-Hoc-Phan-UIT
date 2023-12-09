import { createSlice, current } from '@reduxjs/toolkit';
import uniq from 'lodash/uniq';
import { Reducer, State } from './types';

const slice = createSlice<State, Reducer, 'xepTkb'>({
  name: 'xepTkb',
  initialState: {
    dataExcel: null,

    listMaMHTextarea: '',
    selectedClasses: [], // [{}, {}]
    agGridColumnState: null,
    agGridFilterModel: null,
    customViewMode: 'Bình thường',

    // in case Buoc 3 chi ve TKB chu khong dung Buoc 2 Xep Lop
    isChiVeTkb: false,
    textareaChiVeTkb: '',
  },
  reducers: {
    setDataExcel: (state, { payload }) => {
      state.dataExcel = payload;
      state.selectedClasses = [];
    },
    setListMaMHTextarea: (state, { payload }) => {
      state.listMaMHTextarea = payload;
    },
    setTenMonHocFilter: (state, { payload }) => {
      state.listMaMHTextarea =
        uniq(
          current(state)
            .dataExcel?.data.filter((it) => payload.includes(it.TenMH))
            .map((it) => it.MaMH),
        ).join(' ') + ' ';
    },
    setSelectedClasses: (state, { payload }) => {
      state.selectedClasses = payload;
    },
    setAgGridColumnState: (state, { payload }) => {
      state.agGridColumnState = payload;
    },
    setAgGridFilterModel: (state, { payload }) => {
      state.agGridFilterModel = payload;
    },
    setCustomViewMode: (state, { payload }) => {
      state.customViewMode = payload;
    },
    setIsChiVeTkb: (state, { payload }) => {
      state.isChiVeTkb = payload;
    },
    setTextareChiVeTkb: (state, { payload }) => {
      state.textareaChiVeTkb = payload.toUpperCase();
    },
  },
});

export const {
  setDataExcel,
  setListMaMHTextarea,
  setSelectedClasses,
  setAgGridColumnState,
  setAgGridFilterModel,
  setIsChiVeTkb,
  setTextareChiVeTkb,
  setCustomViewMode,
  setTenMonHocFilter,
} = slice.actions;

export default slice;
