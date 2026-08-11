import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { VluRegistConfig, VluScheduleUnit } from './types';

export type VluStore = {
  token: string;
  studyProgramId: string;
  studyProgramName: string;
  registConfig: VluRegistConfig | null;
  units: VluScheduleUnit[];
  setToken: (token: string) => void;
  setStudyProgram: (id: string, name: string) => void;
  setRegistConfig: (config: VluRegistConfig | null) => void;
  setUnits: (units: VluScheduleUnit[]) => void;
  clearVluData: () => void;
};

export const useVluStore = create<VluStore>()(
  persist(
    (set) => ({
      token: '',
      studyProgramId: '',
      studyProgramName: '',
      registConfig: null,
      units: [],

      setToken: (token) => set({ token }),
      setStudyProgram: (id, name) => set({ studyProgramId: id, studyProgramName: name }),
      setRegistConfig: (config) => set({ registConfig: config }),
      setUnits: (units) => set({ units }),
      clearVluData: () =>
        set({
          studyProgramId: '',
          studyProgramName: '',
          registConfig: null,
          units: [],
        }),
    }),
    {
      name: 'vlu-state-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.token }),
    },
  ),
);
