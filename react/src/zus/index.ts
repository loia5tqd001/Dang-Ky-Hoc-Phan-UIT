import { ColumnApi, GridApi } from 'ag-grid-community';
import { partition } from 'lodash';
import { memoize } from 'proxy-memoize';
import { Mutate, StoreApi, create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { tracker } from '..';
import { ClassModel, ClassModelOriginal } from '../types';
import { calcTongSoTC, isSameAgGridRowId } from '../utils';

type UtilsStore = {
  hasAdBlocker: boolean;
};
export const useUtilsStore = create<UtilsStore>()((set) => ({
  hasAdBlocker: false,
}));

type StoreState = {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
};

export const useDrawerStore = create<StoreState>()(
  persist(
    (set, get) => ({
      isDrawerOpen: document.body.offsetWidth > 900,
      toggleDrawer: () => {
        const newState = !get().isDrawerOpen;
        tracker.track('[drawer] toggled', { newState });
        set({ isDrawerOpen: newState });
      },
    }),
    {
      name: 'drawer-state-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

type TkbStore = {
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

  setDataExcel: (data: TkbStore['dataExcel']) => void;
  setSelectedClasses: (data: TkbStore['selectedClasses']) => void;
  removeClasses: (data: ClassModel[]) => void;
  setAgGridColumnState: (data: TkbStore['agGridColumnState']) => void;
  setAgGridFilterModel: (data: TkbStore['agGridFilterModel']) => void;
  setIsChiVeTkb: (data: TkbStore['isChiVeTkb']) => void;
  setTextareChiVeTkb: (data: TkbStore['textareaChiVeTkb']) => void;
};

export const useTkbStore = create<TkbStore>()(
  persist(
    (set) => ({
      dataExcel: null,

      selectedClasses: [], // [{}, {}]
      agGridColumnState: null,
      agGridFilterModel: null,

      isChiVeTkb: false,
      textareaChiVeTkb: '',

      // TODO: move actions outside of store
      setDataExcel: (data) => {
        set({ dataExcel: data, selectedClasses: [] });
      },
      setSelectedClasses: (data) => {
        set({ selectedClasses: data });
      },
      removeClasses: (classesToRemove) => {
        set((state) => ({
          selectedClasses: state.selectedClasses.filter((selectedClass) =>
            classesToRemove.every((classToRemove) => !isSameAgGridRowId(selectedClass, classToRemove)),
          ),
        }));
      },
      setAgGridColumnState: (data) => {
        set({ agGridColumnState: data });
      },
      setAgGridFilterModel: (data) => {
        set({ agGridFilterModel: data });
      },
      setIsChiVeTkb: (data) => {
        set({ isChiVeTkb: data });
      },
      setTextareChiVeTkb: (data) => {
        set({ textareaChiVeTkb: data.toUpperCase() });
      },
    }),
    {
      name: 'tkb-state-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

type StoreWithPersist = Mutate<StoreApi<TkbStore>, [['zustand/persist', unknown]]>;
export const withStorageDOMEvents = (store: StoreWithPersist) => {
  const storageEventCallback = (e: StorageEvent) => {
    if (e.key === store.persist.getOptions().name && e.newValue) {
      store.persist.rehydrate();
    }
  };
  window.addEventListener('storage', storageEventCallback);
  return () => {
    window.removeEventListener('storage', storageEventCallback);
  };
};
// sync state between tabs: https://github.com/pmndrs/zustand/issues/714
// TODO: more granular sync (only sync selectedClasses, not all state)
withStorageDOMEvents(useTkbStore);

export const selectDataExcel = (state: TkbStore) => state.dataExcel;
export const selectSelectedClasses = (state: TkbStore) => state.selectedClasses;
export const selectAgGridColumnState = (state: TkbStore) => state.agGridColumnState;
export const selectAgGridFilterModel = (state: TkbStore) => state.agGridFilterModel;
export const selectIsChiVeTkb = (state: TkbStore) =>
  state.isChiVeTkb || window.location.search.includes('self_selected'); // TODO: constant for self_selected
export const selectTextareaChiVeTkb = (state: TkbStore) => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('self_selected') || state.textareaChiVeTkb; // TODO: won't get notified when URLSearchParams change, currently we have to add search params when route change in LeftDrawer as a hack
};
export const selectFinalDataTkb = (state: TkbStore): ClassModel[] => {
  const dataExcel = selectDataExcel(state);
  return dataExcel?.data ?? [];
};
export const selectSelectedClassesBuoc3 = memoize((state: TkbStore): ClassModel[] => {
  const isChiVeTkb = selectIsChiVeTkb(state);
  const textareaChiVeTkb = selectTextareaChiVeTkb(state);
  const finalDataTkb = selectFinalDataTkb(state);

  if (isChiVeTkb) {
    const listMaLop = textareaChiVeTkb.split(/\s+|\+|,/);
    return finalDataTkb.filter((it) => listMaLop.includes(it.MaLop));
  } else {
    return selectSelectedClasses(state);
  }
});
export const selectTongSoTcSelected = (state: TkbStore) => calcTongSoTC(selectSelectedClasses(state));
export const selectTongSoTcBuoc3 = (state: TkbStore) => calcTongSoTC(selectSelectedClassesBuoc3(state));
export const selectPhanLoaiHocTrenTruong = memoize((state: TkbStore): [ClassModel[], ClassModel[]] => {
  return partition(selectSelectedClassesBuoc3(state), { Thu: '*' });
});
