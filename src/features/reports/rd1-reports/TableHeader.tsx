import { useFilterStore } from "@/components/filter/store";
import TimeRange from "@/components/shared/TimeRange";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function TableHeader() {
  const { openFilter } = useFilterStore();
  const handleOpen = () => {
    openFilter([
      {
        name: "PolicyNo",
        type: "number",
        label: "policy number",
        placeholder: "Enter Policy No",
      },
      {
        name: "status",
        type: "select",
        label: "status",
        options: [
          {
            label: "All",
            value: "name",
          },
          {
            label: "Pending",
            value: "Pending",
          },
          {
            label: "InProgress",
            value: "InProgress",
          },
          {
            label: "Completed",
            value: "Completed",
          },
        ],
      },
      {
        name: "type",
        type: "select",
        label: "type",
        options: [
          {
            label: "All",
            value: "Home",
          },
        ],
      },
    ]);
  };

  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <TimeRange />
      </div>

      <div className="flex items-center gap-4 text-[14px]">
        <button
          id="filter-trigger-button"
          onClick={handleOpen}
          className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]"
        >
          <SlidersHorizontal className="w-3 h-3" />
          Filter
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
