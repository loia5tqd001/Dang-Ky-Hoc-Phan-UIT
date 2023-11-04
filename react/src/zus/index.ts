import { create } from 'zustand';
import { ClassModel } from '../models';

type StoreState = {
  dataExcel: {
    fileName: string;
    dataClasses: ClassModel[];
    lastUpdate: string;
  } | null;
};

const useDrawerStore = create<StoreState>((set) => ({
  dataExcel: null,
}));
