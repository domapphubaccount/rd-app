// FilterModal.tsx
import { useState, useMemo, useEffect, useCallback } from "react";
import { useLocation, useSearchParams } from "react-router";
import { useFilterStore } from "./store";
import { format } from "date-fns";
import { ScrollArea } from "../ui/scroll-area";
import DateRangePickers from "../shared/DateRangePickers";
import InputField from "../shared/InputField";
import SelectField from "../shared/SelectField";
import { Checkbox } from "../ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Check,
  X,
  Plus,
  Settings,
  SlidersHorizontal,
  Edit,
  Trash,
  Star,
} from "lucide-react";
import {
  useGetSavedFilters,
  useAddSavedFilter,
  useUpdateSavedFilter,
  useDeleteSavedFilter,
  useSetDefaultFilter,
} from "./useFilterLogic";
import type { FilterOption, FiltersState } from "./types";

export default function FilterModal() {
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
  const location = useLocation();
  const isInProjectPage = location.pathname.includes("/projects");
  const [isAddingFilter, setIsAddingFilter] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [editingFilter, setEditingFilter] = useState<string | null>(null);

  // Fetch saved filters
  const { data: savedFiltersData, isLoading: isFiltersLoading } =
    useGetSavedFilters(category);

  useEffect(() => {
    if (savedFiltersData && Array.isArray(savedFiltersData.data)) {
      const normalized = savedFiltersData.data.map((f) => ({
        id: f.id,
        name: f.name,
        category: f.category,
        filters: f.details
          ? f.details.reduce((acc: FiltersState, { key, value }) => {
              acc[key] = value;
              return acc;
            }, {})
          : {},
        isDefault: f.default || false, // لأن المفتاح اسمه "default" مش "is_default"
      }));

      setSavedFilters(normalized);
    } else {
      setSavedFilters([]);
    }
  }, [savedFiltersData, setSavedFilters]);

  // Initialize filters from URL or default filter
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

      // Apply default filter if exists and no URL params
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

  // Validate that at least one filter option is selected
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

  const renderInput = useCallback(
    (opt: FilterOption) => {
      switch (opt.type) {
        case "date":
          return (
            <div key={`${opt.startName}-${opt.endName}`}>
              <DateRangePickers
                startName={opt.startName}
                endName={opt.endName}
                startValue={filters[opt.startName]}
                endValue={filters[opt.endName]}
                onChange={(field, value) =>
                  handleFilterChange(
                    field,
                    value ? format(value, "yyyy-MM-dd") : ""
                  )
                }
                canReset={true}
                onReset={() => handleFieldReset([opt.startName, opt.endName])}
              />
            </div>
          );
        case "text":
        case "number":
          return (
            <InputField
              key={opt.name}
              name={opt.name}
              label={opt.label}
              type={opt.type}
              placeholder={opt.placeholder}
              value={filters[opt.name] || ""}
              onChange={(e) => handleFilterChange(opt.name, e.target.value)}
              onReset={() => handleFieldReset(opt.name)}
            />
          );
        case "select":
          return (
            <SelectField
              key={opt.name}
              label={opt.label}
              id={opt.name}
              options={opt.options || []}
              placeholder="select"
              value={filters[opt.name] || ""}
              onChange={(value) => handleFilterChange(opt.name, value)}
              canReset={true}
              onReset={() => handleFieldReset(opt.name)}
            />
          );
        case "checkbox":
          return (
            <div key={opt.name} className="flex items-center gap-2 py-2">
              <Checkbox
                id={opt.name}
                checked={filters[opt.name] === "true"}
                onCheckedChange={(checked) =>
                  handleFilterChange(opt.name, checked ? "true" : "false")
                }
              />
              <label htmlFor={opt.name} className="text-sm text-[#344155]">
                {opt.label}
              </label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFieldReset(opt.name)}
                className="ml-auto text-[#31538E] hover:text-[#667085]"
              >
                Reset
              </Button>
            </div>
          );
        default:
          return null;
      }
    },
    [filters, handleFilterChange, handleFieldReset]
  );

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
          <div className="w-1/3 border-r border-gray-200 bg-[#F4F6FB]">
            <div className="flex flex-col gap-4 px-4 py-4 justify-between h-full">
              <div>
                <div className="flex items-center justify-between text-white bg-[#99A2B3] py-2 px-3 rounded-[8px] text-[16px] font-bold">
                  <p>Saved Filters</p>
                  <Settings className="w-5 h-5" />
                </div>
                <ScrollArea className="mt-4 max-h-[300px]">
                  {isFiltersLoading ? (
                    <div className="text-center text-gray-500 py-4">
                      Loading...
                    </div>
                  ) : savedFilters.length === 0 ? (
                    <div className="text-center text-gray-500 py-4">
                      No saved filters
                    </div>
                  ) : (
                    savedFilters.map((filter) => (
                      <div
                        key={filter.id}
                        className="flex items-center justify-between p-2 mb-2 bg-white rounded-[8px] border border-gray-200"
                      >
                        <span
                          className="cursor-pointer text-[#344155] hover:underline"
                          onClick={() => setFilters(filter.filters)}
                        >
                          {filter.name}
                        </span>
                        <div className="flex gap-2">
                          <Star
                            className={`w-4 h-4 cursor-pointer ${
                              filter.isDefault
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-400"
                            }`}
                            onClick={() => handleSetDefault(filter.id)}
                          />
                          <Edit
                            className="w-4 h-4 cursor-pointer text-gray-600"
                            onClick={() => handleEditFilter(filter)}
                          />
                          <Trash
                            className="w-4 h-4 cursor-pointer text-red-500"
                            onClick={() => handleDeleteFilter(filter.id)}
                          />
                        </div>
                      </div>
                    ))
                  )}
                </ScrollArea>
              </div>
              <div>
                {isAddingFilter ? (
                  <div className="flex items-center gap-2">
                    <InputField
                      name="filterName"
                      type="text"
                      placeholder="Enter filter name"
                      value={filterName}
                      onChange={(e) => setFilterName(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      className="bg-[#667085] text-white p-2 rounded-[8px]"
                      onClick={handleSaveFilter}
                      disabled={!filterName.trim() || !isFilterValid}
                    >
                      <Check className="w-4 h-4" />
                    </Button>
                    <Button
                      className="bg-transparent text-[#5A6778] border-[1px] border-[#5A6778] p-2 rounded-[8px]"
                      onClick={handleCancelAddFilter}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    className="bg-transparent text-[#5A6778] border-[1px] border-[#5A6778] py-2 px-4 rounded-[8px] shadow-none font-black text-[16px] hover:bg-[#5A6778] hover:text-white w-full"
                    onClick={() => setIsAddingFilter(true)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Filter
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="w-2/3">
            <ScrollArea className="max-h-[350px] overflow-y-auto px-6 flex-1">
              <div className="flex flex-col gap-4">
                {options.map((opt) => renderInput(opt))}
              </div>
              {options.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  No filters available
                </div>
              )}
            </ScrollArea>

            <div className="flex gap-3 px-6 pt-4">
              <button
                onClick={handleReset}
                className="flex-1 bg-[#F4F6FB] text-[#31538E] py-2 rounded-[8px] text-[14px] font-medium hover:bg-[#E8ECF5] transition-colors"
                type="button"
              >
                Reset All
              </button>
              <button
                onClick={handleApply}
                className="flex-1 bg-[#667085] text-white py-2 rounded-[8px] text-[14px] font-medium hover:bg-[#667085] transition-colors"
                disabled={!isFilterValid}
              >
                Apply {appliedCount > 0 && ` (${appliedCount})`}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
