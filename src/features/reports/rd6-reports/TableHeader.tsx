import type { FilterOption } from "@/components/filter/types";
import { useFilterStore } from "@/components/filter/store";
import { INPROGRESS } from "@/utils/constans";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import TimeRange from "@/components/shared/TimeRange";
import useGetAllUsers from "@/hooks/useGetAllUsers";
import useGetRD3ReportStatus from "@/hooks/useGetRD3ReportStatus";
import useGetRD6ReportStatus from "@/hooks/useGetRD6ReportStatus";

export default function TableHeader() {
  const { openFilter } = useFilterStore();

  const { data: status } = useGetRD6ReportStatus();
  const { data: report } = useGetRD3ReportStatus();
  const { data: user } = useGetAllUsers();

  const handleOpen = () => {
    const filterOptions: FilterOption[] = [
      {
        name: "report_id",
        type: "number",
        label: "Report ID.",
        placeholder: "Enter numbers &press enter",
      },
      {
        name: "status",
        type: "select",
        label: "RD6 Status",
        options:
          status?.data?.map((user) => ({
            label: user.name,
            value: user.id.toString(),
          })) || [],
      },
      {
        name: "total_cost_from",
        type: "number",
        label: "Total Costs From",
        placeholder: "Enter Toal Cost From",
      },
      {
        name: "total_cost_to",
        type: "number",
        label: "Total Costs To",
        placeholder: "Enter Toal Cost To",
      },
      {
        name: "reference_number",
        type: "number",
        label: "Reference No",
        placeholder: "Enter numbers &press enter",
      },

      {
        name: "des_user_id",
        type: "select",
        label: "Designer",
        options:
          user?.data?.map((user) => ({
            label: user.name,
            value: user.uuid.toString(),
          })) || [],
      },
      {
        name: "ins_user_id",
        type: "select",
        label: "Inspector",
        options:
          user?.data?.map((user) => ({
            label: user.name,
            value: user.uuid.toString(),
          })) || [],
      },
      {
        name: "role",
        type: "select",
        label: "Inprogress",
        options:
          INPROGRESS.map((i) => ({
            label: i.label,
            value: i.id.toString(),
          })) || [],
      },
      {
        name: "rd3_status",
        type: "select",
        label: "RD3 Status",
        options:
          report?.data?.map((r) => ({
            label: r.name,
            value: r.id.toString(),
          })) || [],
      },
      {
        type: "date",
        label: "Final Visit",
        startName: "final_visit_from",
        endName: "final_visit_to",
      },
      {
        type: "date",
        label: "RD3 Date",
        startName: "rd3_date_from",
        endName: "rd3_date_to",
      },
    ];
    openFilter(filterOptions, "rd6_reports");
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
