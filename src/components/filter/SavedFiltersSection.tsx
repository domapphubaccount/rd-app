// SavedFiltersSection.tsx
import { ScrollArea } from "../ui/scroll-area";
import { Settings, Star, Edit, Trash, Check, X, Plus } from "lucide-react";
import { Button } from "../ui/button";
import InputField from "../shared/InputField";
import type { FiltersState, SavedFilter } from "./types";

// Props interface for SavedFiltersSection
interface SavedFiltersSectionProps {
  isFiltersLoading: boolean;
  savedFilters: SavedFilter[];
  isAddingFilter: boolean;
  filterName: string;
  setFilterName: (name: string) => void;
  isFilterValid: boolean;
  setFilters: (filters: FiltersState) => void;
  handleEditFilter: (filter: SavedFilter) => void;
  handleDeleteFilter: (id: string) => void;
  handleSetDefault: (id: string) => void;
  handleSaveFilter: () => void;
  handleCancelAddFilter: () => void;
  setIsAddingFilter: (value: boolean) => void;
}

// Component to display saved filters and add/edit filter section
export default function SavedFiltersSection({
  isFiltersLoading,
  savedFilters,
  isAddingFilter,
  filterName,
  setFilterName,
  isFilterValid,
  setFilters,
  handleEditFilter,
  handleDeleteFilter,
  handleSetDefault,
  handleSaveFilter,
  handleCancelAddFilter,
  setIsAddingFilter,
}: SavedFiltersSectionProps) {
  return (
    <div className="w-1/3 border-r border-gray-200 bg-[#F4F6FB]">
      <div className="flex flex-col gap-4 px-4 py-4 justify-between h-full">
        <div>
          <div className="flex items-center justify-between text-white bg-[#99A2B3] py-2 px-3 rounded-[8px] text-[16px] font-bold">
            <p>Saved Filters</p>
            <Settings className="w-5 h-5" />
          </div>
          <ScrollArea className="mt-4 max-h-[300px]">
            {isFiltersLoading ? (
              <div className="text-center text-gray-500 py-4">Loading...</div>
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
                        filter.default
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
  );
}
