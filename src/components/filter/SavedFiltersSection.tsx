import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Settings, Star, Edit, Trash, Check, X, Plus } from "lucide-react";
import { Button } from "../ui/button";
import type { FiltersState, SavedFilter } from "./types";

interface SavedFiltersSectionProps {
  isFiltersLoading: boolean;
  savedFilters: SavedFilter[];
  isAddingFilter: boolean;
  filterName: string;
  setFilterName: (name: string) => void;
  isFilterValid: boolean;
  handleApplySavedFilter: (filters: FiltersState) => void;
  handleEditFilter: (filter: SavedFilter) => void;
  handleDeleteFilter: (id: string) => void;
  handleSetDefault: (id: string) => void;
  handleSaveFilter: () => void;
  handleCancelAddFilter: () => void;
  setIsAddingFilter: (value: boolean) => void;
}

export default function SavedFiltersSection({
  isFiltersLoading,
  savedFilters,
  isAddingFilter,
  filterName,
  setFilterName,
  isFilterValid,
  handleApplySavedFilter,
  handleEditFilter,
  handleDeleteFilter,
  handleSetDefault,
  handleSaveFilter,
  handleCancelAddFilter,
  setIsAddingFilter,
}: SavedFiltersSectionProps) {
  const [deletingFilterId, setDeletingFilterId] = useState<string | null>(null);

  const initiateDelete = (id: string) => {
    setDeletingFilterId(id);
  };

  const confirmDelete = (id: string) => {
    handleDeleteFilter(id);
    setDeletingFilterId(null);
  };

  const cancelDelete = () => {
    setDeletingFilterId(null);
  };

  return (
    <div className="w-1/3 border-r border-gray-200 bg-[#F4F6FB]">
      <div className="flex flex-col gap-4 px-4 py-4 justify-between h-full">
        <div>
          <div className="flex items-center justify-between text-white bg-[#99A2B3] py-2 px-3 rounded-[8px] text-[16px]">
            <p>Saved Filters</p>
            <Settings className="w-5 h-5" />
          </div>

          <ScrollArea className="mt-4 max-h-[450px] overflow-auto">
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
                  className="mr-3 cursor-pointer flex items-center justify-between p-2 mb-2 bg-white rounded-[8px] border border-gray-200 "
                  onClick={() => handleApplySavedFilter(filter.filters)}
                >
                  <span className="cursor-pointer text-[#344155] hover:underline">
                    {filter.name}
                  </span>
                  <div className="flex gap-2">
                    {deletingFilterId === filter.id ? (
                      <>
                        <Check
                          className="w-4 h-4 cursor-pointer text-green-500"
                          onClick={() => confirmDelete(filter.id)}
                        />
                        <X
                          className="w-4 h-4 cursor-pointer text-red-500"
                          onClick={cancelDelete}
                        />
                      </>
                    ) : (
                      <>
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
                          onClick={() => initiateDelete(filter.id)}
                        />
                      </>
                    )}
                  </div>
                </div>
              ))
            )}
          </ScrollArea>
        </div>

        <div >
          {isAddingFilter ? (
            <div className="flex items-center gap-2 w-full h-[32px]">
              <input
                name="filterName"
                type="text"
                placeholder="Enter filter name"
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
                className=" min-w-0 h-full p-3 rounded border-[1px] "
              />

              <Button
                className="bg-[#667085] text-white p-2 rounded-[8px] flex-shrink-0 h-full border-[1px] border-[#5A6778]"
                onClick={handleSaveFilter}
                disabled={!filterName.trim() || !isFilterValid}
              >
                <Check className="w-4 h-4" />
              </Button>

              <Button
                className="h-full bg-transparent text-[#5A6778] border-[1px] border-[#5A6778] p-2 rounded-[8px] flex-shrink-0 hover:text-white hover:bg-[#5A6778] "
                onClick={handleCancelAddFilter}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Button
              className="bg-transparent text-[#5A6778] border-[1px] border-[#5A6778] py-2  h-full rounded-[8px] shadow-none text-[16px] hover:bg-[#5A6778] hover:text-white w-full"
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
