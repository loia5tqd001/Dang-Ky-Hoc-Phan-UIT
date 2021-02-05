import { createSlice } from '@reduxjs/toolkit';
import uniq from "lodash/uniq";

export const xepTkbName = 'xepTkb';

// slice definition
const { actions, reducer } = createSlice({
  name: xepTkbName,
  initialState: {
    loaiTkb: 'mac-dinh', // mac-dinh | up-tu-file-excel | su-dung-dkhp-uit
    dataExcel: {
      // in the case 'up-tu-file-excel'
      fileName: null,
      data: null,
      lastUpdate: null,
    },
    dataDkhpPage: {
      lopThuong: '',
      lopAnhVan: '',
    },

    listMaMHTextarea: '',
    listHeDTDropdown: ['CQUI'], // ['CQUI', 'CLC', ...]
    selectedClasses: [], // [{}, {}]
    agGridColumnState: null,
    agGridFilterModel: null,

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
    setListHeDTDropdown: (state, { payload }) => {
      state.listHeDTDropdown = payload;
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
    setIsChiVeTkb: (state, { payload }) => {
      state.isChiVeTkb = payload;
    },
    setTextareChiVeTkb: (state, { payload }) => {
      state.textareaChiVeTkb = payload.toUpperCase();
    },
  },
});

// export actions and reducer
export const {
  setLoaiTkb,
  setDataExcel,
  setDataDkhpLopThuong,
  setDataDkhpLopAnhVan,
  setListMaMHTextarea,
  setListHeDTDropdown,
  setSelectedClasses,
  setAgGridColumnState,
  setAgGridFilterModel,
  setIsChiVeTkb,
  setTextareChiVeTkb,
} = actions;
export default reducer;
