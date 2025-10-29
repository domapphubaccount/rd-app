import { useFilterStore } from "@/components/filter/store";
import type { FilterOption } from "@/components/filter/types";
import TimeRange from "@/components/shared/TimeRange";
import useGetAllUsers from "@/hooks/useGetAllUsers";
import useGetRD5ReportStatus from "@/hooks/useGetRD5ReportStatus";
import { RD5_REPORT_TYPE } from "@/utils/constans";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function TableHeader() {
  const { openFilter } = useFilterStore();

  const { data: users } = useGetAllUsers();
  const { data: status } = useGetRD5ReportStatus();

  const handleOpen = () => {
    const filterOptions: FilterOption[] = [
      {
        name: "reference_number",
        type: "number",
        label: "Reference No.",
        placeholder: "Enter Reference No",
      },
      {
        name: "PolicyNo",
        type: "number",
        label: "Policy Numbers",
        placeholder: "Enter Policy Number",
      },
      {
        name: "RequestNo",
        type: "number",
        label: "Request Numbers",
        placeholder: "Enter RequestNo Number",
      },
      {
        name: "SurveyResolutionNo",
        type: "number",
        label: "Survey Resolution Numbers ",
        placeholder: "Enter RequestNo Number",
      },
      {
        name: "rd5_id",
        type: "number",
        label: "Report ID",
        placeholder: "Enter Report ID",
      },
      {
        name: "ticket_code",
        type: "number",
        label: "Ticket Code",
        placeholder: "Enter Ticket Code",
      },

      {
        name: "users",
        type: "select",
        label: "Created BY",
        options:
          users?.data?.map((user) => ({
            label: user.name,
            value: user.uuid.toString(),
          })) || [],
      },

      {
        name: "status",
        type: "select",
        label: "Status",
        options:
          status?.data?.map((status) => ({
            label: status.name,
            value: status.id.toString(),
          })) || [],
      },
      {
        name: "type",
        type: "select",
        label: "Type",
        options:
          RD5_REPORT_TYPE?.map((type) => ({
            label: type.label,
            value: type.value.toString(),
          })) || [],
      },
    ];
    openFilter(filterOptions, "rd5_reports");
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
