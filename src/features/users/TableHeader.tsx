import { useFilterStore } from "@/components/filter/store";
import type { FilterOption } from "@/components/filter/types";
import { ACTIVE_OPTIONNS, ROLE_ID } from "@/utils/constans";
import { ChevronDown, Plus, SlidersHorizontal } from "lucide-react";

export default function TableHeader() {
  const { openFilter } = useFilterStore();

  const handleOpen = () => {
    const filterOptions: FilterOption[] = [
      {
        name: "name",
        type: "text",
        label: "User Name",
        placeholder: "Enter User Name",
      },
      {
        name: "active",
        type: "select",
        label: "Select a Status",
        options: ACTIVE_OPTIONNS.map((a) => ({
          label: a.lable,
          value: a.value,
        })),
      },
      {
        name: "role_id",
        type: "select",
        label: "Select a Status",
        options: ROLE_ID.map((r) => ({
          label: r.lable,
          value: r.value,
        })),
      },
    ];
    openFilter(filterOptions, "user");
  };

  return (
    <div className="flex items-center justify-end px-4">
      <div className="flex items-center gap-4 text-[14px]">
        <button className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]">
          <Plus className="w-4 h-4" /> Add User
        </button>

        <button
          onClick={handleOpen}
          className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]"
        >
          <SlidersHorizontal width={16} /> Filter
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
