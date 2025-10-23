import { create } from "zustand";
import type { FilterOption } from "./types";

type FilterStore = {
  isOpen: boolean;
  options: FilterOption[];
  openFilter: (options: FilterOption[]) => void;
  closeFilter: () => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  isOpen: false,
  options: [],
  openFilter: (options) => set({ isOpen: true, options }),
  closeFilter: () => set({ isOpen: false, options: [] }),
}));