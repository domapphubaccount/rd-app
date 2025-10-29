import type { FilterOption } from "@/components/filter/types";
import { useFilterStore } from "@/components/filter/store";
import { ChevronDown, Plus, SlidersHorizontal } from "lucide-react";
import TimeRange from "@/components/shared/TimeRange";
import useGetAllUsers from "@/hooks/useGetAllUsers";
import { PAYMENT_STATUS } from "@/utils/constans";

export default function TableHeader() {
  const { openFilter } = useFilterStore();

  const { data } = useGetAllUsers();

  const handleOpen = () => {
    const filterOptions: FilterOption[] = [
      {
        name: "id",
        type: "number",
        label: "Quotation No",
        placeholder: "Enter numbers &press enter",
      },
      {
        name: "reference_number",
        type: "number",
        label: "Reference Numbers",
        placeholder: "Enter numbers &press enter",
      },
      {
        name: "user",
        type: "select",
        label: "Quoted By",
        options:
          data?.data?.map((user) => ({
            label: user.name,
            value: user.uuid.toString(),
          })) || [],
      },
      {
        name: "payments_status",
        type: "select",
        label: "Payment Status",
        options:
          PAYMENT_STATUS.map((s) => ({
            label: s.label,
            value: s.value,
          })) || [],
      },
    ];
    openFilter(filterOptions, "av_quotation");
  };
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <TimeRange />
      </div>

      <div className="flex items-center gap-4 text-[14px]">
        <button className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]">
          <Plus className="w-4 h-4" />
          Add New Quotation
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
