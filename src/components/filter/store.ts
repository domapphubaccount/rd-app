// store.ts
import { create } from "zustand";
import type { FilterOption, SavedFilter } from "./types";

type FilterStore = {
  isOpen: boolean;
  options: FilterOption[];
  category: string;
  savedFilters: SavedFilter[];
  setSavedFilters: (filters: SavedFilter[]) => void;
  addSavedFilter: (filter: SavedFilter) => void;
  updateSavedFilter: (id: string, updates: Partial<SavedFilter>) => void;
  deleteSavedFilter: (id: string) => void;
  setDefaultFilter: (id: string) => void;
  openFilter: (options: FilterOption[], category: string) => void;
  closeFilter: () => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  isOpen: false,
  options: [],
  category: "",
  savedFilters: [],
  setSavedFilters: (filters) => set({ savedFilters: filters }),
  addSavedFilter: (filter) =>
    set((state) => ({ savedFilters: [...state.savedFilters, filter] })),
  updateSavedFilter: (id, updates) =>
    set((state) => ({
      savedFilters: state.savedFilters.map((f) =>
        f.id === id ? { ...f, ...updates } : f
      ),
    })),
  deleteSavedFilter: (id) =>
    set((state) => ({
      savedFilters: state.savedFilters.filter((f) => f.id !== id),
    })),
  setDefaultFilter: (id) =>
    set((state) => ({
      savedFilters: state.savedFilters.map((f) => ({
        ...f,
        isDefault: f.id === id,
      })),
    })),
  openFilter: (options, category) => set({ isOpen: true, options, category }),
  closeFilter: () => set({ isOpen: false }),
}));
