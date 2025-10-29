import type { FilterOption } from "@/components/filter/types";
import { useFilterStore } from "@/components/filter/store";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { PAYMENT_STATUS } from "@/utils/constans";
import { useGetAllBuildingCategories } from "@/hooks/useGetAllBuildingCategories";
import useGetRD7ReportStatus from "@/hooks/useGetRD7ReportStatus";
import useGetAllUsers from "@/hooks/useGetAllUsers";
import TimeRange from "@/components/shared/TimeRange";

export default function TableHeader() {
  const { openFilter } = useFilterStore();

  const { data: users } = useGetAllUsers();
  const { data: categories } = useGetAllBuildingCategories();
  const { data: status } = useGetRD7ReportStatus();

  const handleOpen = () => {
    const filterOptions: FilterOption[] = [
      {
        name: "report_id",
        type: "number",
        label: "Report ID",
        placeholder: "Enter numbers &press enter",
      },
      {
        name: "category",
        type: "select",
        label: "category",
        options:
          categories?.data?.map((c) => ({
            label: c.name,
            value: c.id.toString(),
          })) || [],
      },
      {
        name: "reference_number",
        type: "number",
        label: "Reference No",
        placeholder: "Enter numbers &press enter",
      },
      {
        name: "ins_user_id",
        type: "select",
        label: "Inspector",
        options:
          users?.data?.map((user) => ({
            label: user.name,
            value: user.uuid.toString(),
          })) || [],
      },
      {
        name: "rd7_status",
        type: "select",
        label: "RD7 Status",
        options:
          status?.data?.map((user) => ({
            label: user.name,
            value: user.id.toString(),
          })) || [],
      },
      {
        name: "payments_status",
        type: "select",
        label: "Quotation Status",
        options:
          PAYMENT_STATUS.slice(0, 2).map((s) => ({
            label: s.label,
            value: s.value,
          })) || [],
      },
      {
        name: "tis_payment_status",
        type: "select",
        label: "TIS Payment Status",
        options:
          PAYMENT_STATUS.slice(0, 2).map((p) => ({
            label: p.label,
            value: p.value,
          })) || [],
      },
    ];
    openFilter(filterOptions, "rd7_reports");
  };
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <TimeRange />
      </div>

      <div className="flex items-center gap-4 text-[14px]">
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
