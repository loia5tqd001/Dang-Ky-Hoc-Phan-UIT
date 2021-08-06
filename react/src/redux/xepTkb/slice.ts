import { createSlice, current } from '@reduxjs/toolkit';
import uniq from 'lodash/uniq';
import { Reducer, State } from './types';

// Not sure why it complains about Reducer's type but it works, I don't have time to take care for now!!
const slice = createSlice<State, Reducer, 'xepTkb'>({
  name: 'xepTkb',
  initialState: {
    loaiTkb: 'up-tu-file-excel',
    dataExcel: null,
    dataDkhpPage: {
      lopThuong: '',
      lopAnhVan: '',
    },

    listMaMHTextarea: '',
    heDaoTaoFiltered: 'CQUI',
    selectedClasses: [], // [{}, {}]
    agGridColumnState: null,
    agGridFilterModel: null,
    customViewMode: 'Bình thường',

    // in case Buoc 3 chi ve TKB chu khong dung Buoc 2 Xep Lop
    isChiVeTkb: false,
    textareaChiVeTkb: '',
  },
  reducers: {
    setLoaiTkb: (state, { payload }) => {
      state.loaiTkb = payload;
    },
    setDataExcel: (state, { payload }) => {
      state.dataExcel = payload;
      state.selectedClasses = [];
    },
    setDataDkhpLopThuong: (state, { payload }) => {
      state.dataDkhpPage.lopThuong = payload;
      state.selectedClasses = [];
    },
    setDataDkhpLopAnhVan: (state, { payload }) => {
      state.dataDkhpPage.lopAnhVan = payload;
      state.selectedClasses = [];
    },
    setListMaMHTextarea: (state, { payload }) => {
      state.listMaMHTextarea = payload;
    },
    setTenMonHocFilter: (state, { payload }) => {
      state.listMaMHTextarea = uniq(
        current(state)
          .dataExcel?.data.filter((it) => payload.includes(it.TenMH))
          .map((it) => it.MaMH),
      ).join(' ');
    },
    setHeDaoTaoFiltered: (state, { payload }) => {
      state.heDaoTaoFiltered = payload;
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
  setLoaiTkb,
  setDataExcel,
  setDataDkhpLopThuong,
  setDataDkhpLopAnhVan,
  setListMaMHTextarea,
  setHeDaoTaoFiltered,
  setSelectedClasses,
  setAgGridColumnState,
  setAgGridFilterModel,
  setIsChiVeTkb,
  setTextareChiVeTkb,
  setCustomViewMode,
  setTenMonHocFilter,
} = slice.actions;

export default slice;
