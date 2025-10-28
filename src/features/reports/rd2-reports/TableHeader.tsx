import { useFilterStore } from "@/components/filter/store";
import type { FilterOption } from "@/components/filter/types";
import useGetAllUsers from "@/hooks/useGetAllUsers";
import useGetAllregion from "@/hooks/useGetRegionCosts";
import useGetAllDegrees from "@/hooks/useGetTicketDegrees";
import TimeRange from "@/components/shared/TimeRange";
import { CASES_OPTIONS, DELETE_REPORT, REPORT_TYPE } from "@/utils/constans";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function TableHeader() {
  const { openFilter } = useFilterStore();

  const { data: users } = useGetAllUsers();
  const { data: region } = useGetAllregion();
  const { data: degree } = useGetAllDegrees();

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
        name: "users",
        type: "select",
        label: "Res. Person",
        options:
          users?.data?.map((user) => ({
            label: user.name,
            value: user.uuid.toString(),
          })) || [],
      },
      {
        name: "region",
        type: "select",
        label: "Region",
        options:
          region?.data?.map((user) => ({
            label: user.region,
            value: user.id.toString(),
          })) || [],
      },

      {
        name: "cases",
        type: "select",
        label: "Cases",
        options:
          CASES_OPTIONS?.map((cases) => ({
            label: cases.name,
            value: cases.id.toString(),
          })) || [],
      },
      {
        name: "degree",
        type: "select",
        label: "Report Degree",
        options:
          degree?.data?.map((degree) => ({
            label: degree.name,
            value: degree.id.toString(),
          })) || [],
      },

      {
        name: "area_from",
        type: "number",
        label: "Area From",
        placeholder: "Enter Area From",
      },
      {
        name: "area_to",
        type: "number",
        label: "Area To",
        placeholder: "Enter Area To",
      },
      {
        name: "project_cost_from",
        type: "number",
        label: "project Cost From",
        placeholder: "project Cost From",
      },
      {
        name: "project_cost_to",
        type: "number",
        label: "project Cost To",
        placeholder: "project Cost To",
      },

      {
        name: "report_type",
        type: "select",
        label: "Report Type",
        options:
          REPORT_TYPE?.map((type) => ({
            label: type.id,
            value: type.name.toString(),
          })) || [],
      },
      {
        name: "deleted",
        type: "select",
        label: "Delete Report",
        options:
          DELETE_REPORT?.map((delte) => ({
            label: delte.name,
            value: delte.id.toString(),
          })) || [],
      },

      {
        name: "lat",
        type: "text",
        label: "Latitude",
        placeholder: "Enter lat",
      },
      {
        name: "long",
        type: "text",
        label: "Longitude",
        placeholder: "Enter Long",
      },
      {
        name: "rad",
        type: "text",
        label: "Radius",
        placeholder: "Enter Rad",
      },
    ];
    openFilter(filterOptions, "rd2_reports");
  };
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <TimeRange />
      </div>

      <div className="flex items-center gap-4 text-[14px]">
        <button onClick={handleOpen} className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]">
          <SlidersHorizontal width={16} />
          Filter
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
