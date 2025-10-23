import type { FilterOption, FiltersState } from "./types";
import { useState, useMemo, useEffect, useCallback } from "react";
import { useLocation, useSearchParams } from "react-router";
import { useFilterStore } from "./store";
import { format } from "date-fns";
import { ScrollArea } from "../ui/scroll-area";
import DateRangePickers from "../shared/DateRangePickers";

import InputField from "../shared/InputField";
import SelectField from "../shared/SelectField";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { SlidersHorizontal } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export default function FilterModal() {
  const { isOpen, options, closeFilter } = useFilterStore();
  const [filters, setFilters] = useState<FiltersState>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const isInProjectPage = location.pathname.includes("/projects");

  useEffect(() => {
    if (isOpen) {
      const existingFilters: FiltersState = {};

      options.forEach((opt) => {
        if (opt.type === "date" && "startName" in opt && "endName" in opt) {
          existingFilters[opt.startName] =
            searchParams.get(opt.startName) || "";
          existingFilters[opt.endName] = searchParams.get(opt.endName) || "";
        } else if ("name" in opt) {
          existingFilters[opt.name] = searchParams.get(opt.name) || "";
        }
      });

      setFilters(existingFilters);
    }
  }, [isOpen, options, searchParams]);

  const appliedCount = useMemo(() => {
    return Object.entries(filters).filter(
      ([key, value]) => key !== "policy_number" && value && value !== ""
    ).length;
  }, [filters]);

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
      if (opt.type === "date" && "startName" in opt && "endName" in opt) {
        resetFilters[opt.startName] = "";
        resetFilters[opt.endName] = "";
      } else if ("name" in opt) {
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
              //   canReset={true}
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

        default:
          return null;
      }
    },
    [filters, handleFilterChange, handleFieldReset]
  );

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => !open && closeFilter()}
    >
      <DialogContent
        className="w-[700px] h-[500px] p-0 shadow-lg rounded-lg border absolute top-6 right-6 translate-x-0 mt-[80px] mr-[10px]"
        style={{ left: "auto", transform: "none" }}
      >
        <DialogHeader className="border-b px-6 py-3 pb-0 flex gap-3">
          <div className="flex gap-3 ">
            <div className="p-1 border border-gray-300 rounded-md">
              <SlidersHorizontal className="w-5 h-5 text-[#344155]" />
            </div>
            <DialogTitle className="text-[18px] font-bold text-[#344155]">
              Filters
            </DialogTitle>
          </div>
        </DialogHeader>

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

        <div className="flex gap-3 px-6 pb-6 pt-3">
          <button
            onClick={handleReset}
            className="flex-1 bg-[#F4F6FB] text-[#31538E]  rounded-[8px] text-[14px] font-medium hover:bg-[#E8ECF5] transition-colors"
            type="button"
          >
            Reset All
          </button>

          <button
            onClick={handleApply}
            className="flex-1 bg-[#667085] text-white  rounded-[8px] text-[14px] font-medium hover:bg-[#667085] transition-colors"
          >
            Apply
            {appliedCount > 0 && ` (${appliedCount})`}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
