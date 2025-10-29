import type { FilterOption, FiltersState } from "./types";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { format } from "date-fns";
import DateRangePickers from "../shared/DateRangePickers";
import InputField from "../shared/InputField";
import SelectField from "../shared/SelectField";

interface FilterInputsSectionProps {
  options: FilterOption[];
  filters: FiltersState;
  handleFilterChange: (key: string, value: string) => void;
  handleFieldReset: (key: string | string[]) => void;
}

export default function FilterInputsSection({
  options,
  filters,
  handleFilterChange,
  handleFieldReset,
}: FilterInputsSectionProps) {
  const renderInput = (opt: FilterOption) => {
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
            canReset={true}
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
  };

  return (
    <ScrollArea className="overflow-auto p-5">
      <div className="flex flex-col gap-4">
        {options.map((opt) => renderInput(opt))}
      </div>

      {options.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No filters available
        </div>
      )}
    </ScrollArea>
  );
}
