import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type StoreState = {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
};

export const useDrawerStore = create<StoreState>()(
  persist(
    (set) => ({
      isDrawerOpen: true,
      toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
    }),
    {
      name: 'drawer-state-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
