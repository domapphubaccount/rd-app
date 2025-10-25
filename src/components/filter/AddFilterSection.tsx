// AddFilterSection.tsx
import { Button } from "../ui/button";
import { Check, X, Plus } from "lucide-react";
import InputField from "../shared/InputField";

// Props interface for AddFilterSection
interface AddFilterSectionProps {
  isAddingFilter: boolean;
  filterName: string;
  setFilterName: (name: string) => void;
  isFilterValid: boolean;
  handleSaveFilter: () => void;
  handleCancelAddFilter: () => void;
}

// Component to handle adding or editing a filter
export default function AddFilterSection({
  isAddingFilter,
  filterName,
  setFilterName,
  isFilterValid,
  handleSaveFilter,
  handleCancelAddFilter,
}: AddFilterSectionProps) {
  return (
    <div className="px-4">
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
          onClick={handleCancelAddFilter}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Filter
        </Button>
      )}
    </div>
  );
}
