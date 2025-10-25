import { useState, useMemo, useEffect, useCallback } from "react";
import { useLocation, useSearchParams } from "react-router";
import { useFilterStore } from "./store";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { SlidersHorizontal } from "lucide-react";
import {
  useGetSavedFilters,
  useAddSavedFilter,
  useUpdateSavedFilter,
  useDeleteSavedFilter,
  useSetDefaultFilter,
} from "./useFilterLogic";
import type { FiltersState, SavedFilter } from "./types";
import SavedFiltersSection from "./SavedFiltersSection";
import FilterInputsSection from "./FilterInputsSection";
import FilterActions from "./FilterActions";

// Main FilterModal component orchestrating state and child components
export default function FilterModal() {
  // State and hooks from useFilterStore
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

  // Local state for filters, adding/editing, and filter name
  const [filters, setFilters] = useState<FiltersState>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const isInProjectPage = location.pathname.includes("/projects");
  const [isAddingFilter, setIsAddingFilter] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [editingFilter, setEditingFilter] = useState<string | null>(null);

  // Fetch saved filters
  const { data: savedFiltersData, isLoading: isFiltersLoading } =
    useGetSavedFilters(category);

  useEffect(() => {
    if (savedFiltersData && Array.isArray(savedFiltersData)) {
      const normalized = savedFiltersData.map((f) => ({
        id: f.id,
        name: f.name,
        category: f.category,
        filters: f.details
          ? f.details.reduce((acc: FiltersState, { key, value }) => {
              acc[key] = value;
              return acc;
            }, {})
          : {},
        isDefault: f.default || false,
      }));
      setSavedFilters(normalized);
    } else {
      setSavedFilters([]);
    }
  }, [savedFiltersData, setSavedFilters]);

  console.log("savedFiltersData", savedFiltersData);

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

      const defaultFilter = savedFilters.find((f) => f.isDefault);
      if (defaultFilter && Object.values(existingFilters).every((v) => !v)) {
        setFilters(defaultFilter.filters);
      } else {
        setFilters(existingFilters);
      }
    }
  }, [isOpen, options, searchParams, savedFilters]);

  const appliedCount = useMemo(() => {
    return Object.entries(filters).filter(
      ([key, value]) => key !== "policy_number" && value && value !== ""
    ).length;
  }, [filters]);

  const isFilterValid = useMemo(() => {
    return Object.entries(filters).some(
      ([key, value]) => key !== "policy_number" && value && value !== ""
    );
  }, [filters]);

  const { mutate: addFilter } = useAddSavedFilter();
  const { mutate: updateFilter } = useUpdateSavedFilter();
  const { mutate: deleteFilter } = useDeleteSavedFilter();
  const { mutate: setDefault } = useSetDefaultFilter();

  const handleApply = useCallback(() => {
    const policyNumber = searchParams.get("policy_number");
    const newParams = new URLSearchParams();

    if (policyNumber && !isInProjectPage) {
      newParams.set("policy_number", policyNumber);
    }

    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== "") {
        newParams.set(key, value as string);
      }
    });

    newParams.set("page", "1");
    setSearchParams(newParams, { replace: true });
    closeFilter();
  }, [filters, searchParams, setSearchParams, closeFilter, isInProjectPage]);

  const handleReset = useCallback(() => {
    const policyNumber = searchParams.get("policy_number");
    const newParams = new URLSearchParams();

    if (policyNumber && !isInProjectPage) {
      newParams.set("policy_number", policyNumber);
    }

    newParams.set("page", "1");

    const resetFilters: FiltersState = {};
    options.forEach((opt) => {
      if (opt.type === "date") {
        resetFilters[opt.startName] = "";
        resetFilters[opt.endName] = "";
      } else {
        resetFilters[opt.name] =
          opt.name === "policy_number" && !isInProjectPage
            ? policyNumber || ""
            : "";
      }
    });

    setFilters(resetFilters);
    setSearchParams(newParams, { replace: true });
    requestAnimationFrame(closeFilter);
  }, [options, searchParams, setSearchParams, closeFilter, isInProjectPage]);

  // Reset individual filter field(s)
  const handleFieldReset = useCallback((key: string | string[]) => {
    setFilters((prev) => {
      const updated = { ...prev };
      if (Array.isArray(key)) {
        key.forEach((k) => (updated[k] = ""));
      } else {
        updated[key] = "";
      }
      return updated;
    });
  }, []);

  const handleFilterChange = useCallback((key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const handleSaveFilter = () => {
    if (filterName.trim() && isFilterValid) {
      const details = Object.entries(filters)
        .filter(([_, value]) => value && value !== "")
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
                id: data.id,
                name: filterName,
                category,
                filters,
                isDefault: false,
              });
              setIsAddingFilter(false);
              setFilterName("");
            },
          }
        );
      }
    }
  };

  const handleCancelAddFilter = () => {
    setIsAddingFilter(false);
    setFilterName("");
    setEditingFilter(null);
  };

  const handleDeleteFilter = (id: string) => {
    deleteFilter(id, {
      onSuccess: () => deleteSavedFilter(id),
    });
  };

  const handleSetDefault = (id: string) => {
    setDefault(
      { id, category },
      {
        onSuccess: () => setDefaultFilter(id),
      }
    );
  };

  const handleEditFilter = (filter: SavedFilter) => {
    setEditingFilter(filter.id);
    setFilterName(filter.name);
    setFilters(filter.filters);
    setIsAddingFilter(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeFilter()}>
      <DialogContent
        className="w-[700px] max-w-[1000px] h-[500px] p-0 shadow-lg rounded-lg border absolute top-6 right-6 translate-x-0 mt-[80px] mr-[10px] flex flex-col gap-0"
        style={{ left: "auto", transform: "none" }}
      >
        <DialogHeader className="border-b px-3 py-3 pb-0 mb-0 space-y-0">
          <div className="flex gap-3 items-center mb-3">
            <div className="p-1 border border-gray-300 rounded-md">
              <SlidersHorizontal className="w-5 h-5 text-[#344155]" />
            </div>
            <DialogTitle className="text-[18px] font-bold text-[#344155] p-0 m-0">
              Filters
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="flex flex-1">
          <SavedFiltersSection
            isFiltersLoading={isFiltersLoading}
            savedFilters={savedFilters}
            isAddingFilter={isAddingFilter}
            filterName={filterName}
            setFilterName={setFilterName}
            isFilterValid={isFilterValid}
            setFilters={setFilters}
            handleEditFilter={handleEditFilter}
            handleDeleteFilter={handleDeleteFilter}
            handleSetDefault={handleSetDefault}
            handleSaveFilter={handleSaveFilter}
            handleCancelAddFilter={handleCancelAddFilter}
            setIsAddingFilter={setIsAddingFilter}
          />

          <div className="w-2/3">
            <FilterInputsSection
              options={options}
              filters={filters}
              handleFilterChange={handleFilterChange}
              handleFieldReset={handleFieldReset}
            />

            <FilterActions
              appliedCount={appliedCount}
              isFilterValid={isFilterValid}
              handleApply={handleApply}
              handleReset={handleReset}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
