import { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams } from "react-router";
import { useFilterStore } from "./store";
import {
  useGetSavedFilters,
  useAddSavedFilter,
  useUpdateSavedFilter,
  useDeleteSavedFilter,
  useSetDefaultFilter,
} from "./useFilterLogic";
import type { FiltersState, SavedFilter } from "./types";

export function useFilterModalLogic() {
  const {
    isOpen,
    options,
    category,
    closeFilter,
    setSavedFilters,
    addSavedFilter,
    updateSavedFilter,
    deleteSavedFilter,
    setDefaultFilter,
    savedFilters,
  } = useFilterStore();

  const [filters, setFilters] = useState<FiltersState>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [isAddingFilter, setIsAddingFilter] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [editingFilter, setEditingFilter] = useState<string | null>(null);

  const { data: savedFiltersData, isLoading: isFiltersLoading } =
    useGetSavedFilters(category);

  useEffect(() => {
    if (savedFiltersData && Array.isArray(savedFiltersData)) {
      setSavedFilters(
        savedFiltersData.map((f) => ({
          id: f.id,
          name: f.name,
          category: f.category,
          filters: f.filters || {},
          default: f.default || false,
        }))
      );
    } else {
      setSavedFilters([]);
    }
  }, [savedFiltersData, setSavedFilters]);

  useEffect(() => {
    if (isOpen) {
      const existingFilters: FiltersState = {};
      options.forEach((opt) => {
        if (opt.type === "date") {
          existingFilters[opt.startName] =
            searchParams.get(opt.startName) || "";
          existingFilters[opt.endName] = searchParams.get(opt.endName) || "";
        } else {
          existingFilters[opt.name] = searchParams.get(opt.name) || "";
        }
      });
      setFilters(existingFilters);
    }
  }, [isOpen, options, searchParams]);

  const appliedCount = useMemo(
    () =>
      Object.entries(filters).filter(
        ([key, value]) =>
          key !== "page" &&
          value !== undefined &&
          value !== null &&
          value !== ""
      ).length,
    [filters]
  );

  const isFilterValid = appliedCount > 0;

  const { mutate: addFilter } = useAddSavedFilter();
  const { mutate: updateFilter } = useUpdateSavedFilter();
  const { mutate: deleteFilterApi } = useDeleteSavedFilter();
  const { mutate: setDefaultApi } = useSetDefaultFilter();

  const handleApply = useCallback(() => {
    const newParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) newParams.set(key, value as string);
    });
    newParams.set("page", "1");
    setSearchParams(newParams, { replace: true });
    closeFilter();
  }, [filters, setSearchParams, closeFilter]);

  const handleReset = useCallback(() => {
    const newParams = new URLSearchParams();
    newParams.set("page", "1");

    const resetFilters: FiltersState = {};
    options.forEach((opt) => {
      if (opt.type === "date") {
        resetFilters[opt.startName] = "";
        resetFilters[opt.endName] = "";
      } else {
        resetFilters[opt.name] = "";
      }
    });

    setFilters(resetFilters);
    setSearchParams(newParams, { replace: true });
    requestAnimationFrame(closeFilter);
  }, [options, setSearchParams, closeFilter]);

  const handleFieldReset = useCallback((key: string | string[]) => {
    setFilters((prev) => {
      const updated = { ...prev };
      (Array.isArray(key) ? key : [key]).forEach((k) => (updated[k] = ""));
      return updated;
    });
  }, []);

  const handleFilterChange = useCallback((key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleSaveFilter = useCallback(() => {
    if (filterName.trim() && isFilterValid) {
      const details = Object.entries(filters)
        .filter(([, value]) => value && value !== "")
        .map(([key, value]) => ({ key, value }));

      if (editingFilter) {
        updateFilter(
          { id: editingFilter, name: filterName, details },
          {
            onSuccess: () => {
              updateSavedFilter(editingFilter, { name: filterName, filters });
              setIsAddingFilter(false);
              setFilterName("");
              setEditingFilter(null);
            },
          }
        );
      } else {
        addFilter(
          { name: filterName, category, details },
          {
            onSuccess: (data) => {
              addSavedFilter({
                id: (data as { id: string }).id,
                name: filterName,
                category,
                filters,
                default: false,
              });
              setIsAddingFilter(false);
              setFilterName("");
            },
          }
        );
      }
    }
  }, [
    filterName,
    isFilterValid,
    editingFilter,
    filters,
    addFilter,
    updateFilter,
    category,
    addSavedFilter,
    updateSavedFilter,
  ]);

  const handleApplySavedFilter = (savedFilterValues: FiltersState) => {
    setFilters(savedFilterValues);
    const newParams = new URLSearchParams();
    Object.entries(savedFilterValues).forEach(([key, value]) => {
      if (value) newParams.set(key, value as string);
    });
    newParams.set("page", "1");
    setSearchParams(newParams, { replace: true });
  };

  const handleCancelAddFilter = () => {
    setIsAddingFilter(false);
    setFilterName("");
    setEditingFilter(null);
  };

  const handleDeleteFilter = (id: string) => {
    deleteFilterApi(id, { onSuccess: () => deleteSavedFilter(id) });
  };

  const handleSetDefault = (id: string) => {
    setDefaultApi({ id, category }, { onSuccess: () => setDefaultFilter(id) });
  };

  const handleEditFilter = (filter: SavedFilter) => {
    setEditingFilter(filter.id);
    setFilterName(filter.name);
    setFilters(filter.filters);
    setIsAddingFilter(true);
  };

  return {
    filters,
    isOpen,
    isAddingFilter,
    filterName,
    savedFilters,
    isFiltersLoading,
    appliedCount,
    isFilterValid,
    options,
    setFilterName,
    setIsAddingFilter,
    closeFilter,
    handleApply,
    handleReset,
    handleFieldReset,
    handleFilterChange,
    handleSaveFilter,
    handleCancelAddFilter,
    handleDeleteFilter,
    handleSetDefault,
    handleApplySavedFilter,
    handleEditFilter,
  };
}
