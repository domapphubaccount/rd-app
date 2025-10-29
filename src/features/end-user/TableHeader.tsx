import { useFilterStore } from "@/components/filter/store";
import type { FilterOption } from "@/components/filter/types";
import { ChevronDown, Plus, SlidersHorizontal } from "lucide-react";

export default function TableHeader() {
  const { openFilter } = useFilterStore();

  const handleOpen = () => {
    const filterOptions: FilterOption[] = [
      {
        name: "name",
        type: "text",
        label: "End User Name",
        placeholder: "Select a User Name",
      },
      {
        name: "reference_number",
        type: "number",
        label: "Reference Numbers",
        placeholder: "Enter numbers &press enter",
      },
      {
        name: "mobile_number",
        type: "number",
        label: "Mobile Number",
        placeholder: "Enter mobile_number",
      },
      {
        name: "reference_number",
        type: "number",
        label: "Reference No",
        placeholder: "Enter numbers &press enter",
      },
      {
        name: "national_identity",
        type: "text",
        label: "National identity",
        placeholder: "Enter National identity",
      },
    ];
    openFilter(filterOptions, "end_user");
  };
  return (
    <div className="flex items-center justify-end px-4 ">
      <div className="flex items-center gap-4 text-[14px]">
        <button className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]">
          <Plus className="w-4 h-4" />
          Add User
        </button>

        <button
          onClick={handleOpen}
          className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]"
        >
          <SlidersHorizontal width={16} />
          Filter
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
