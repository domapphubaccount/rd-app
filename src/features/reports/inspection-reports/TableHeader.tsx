import { useFilterStore } from "@/components/filter/store";
import type { FilterOption } from "@/components/filter/types";
import TimeRange from "@/components/shared/TimeRange";
import { useGetAllBuildingCategories } from "@/hooks/useGetAllBuildingCategories";
import useGetAllUsers from "@/hooks/useGetAllUsers";
import useGetAllregion from "@/hooks/useGetRegionCosts";
import useGetResultFilters from "@/hooks/useGetResultFilters";
import useGetAllstages from "@/hooks/useGetStages";
import { Classification } from "@/utils/constans";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function TableHeader() {
  const { openFilter } = useFilterStore();

  const { data: users } = useGetAllUsers();
  const { data: region } = useGetAllregion();
  const { data: result } = useGetResultFilters();
  const { data: stages } = useGetAllstages();
  const { data: Category } = useGetAllBuildingCategories();

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
        name: "result",
        type: "select",
        label: "Result",
        options:
          result?.data?.map((regio) => ({
            label: regio.name,
            value: regio.id.toString(),
          })) || [],
      },

      {
        name: "area",
        type: "select",
        label: "Area",
        options:
          region?.data?.map((regio) => ({
            label: regio.region,
            value: regio.id.toString(),
          })) || [],
      },

      {
        name: "stage",
        type: "select",
        label: "Stage",
        options:
          stages?.data?.map((stage) => ({
            label: stage.name,
            value: stage.id.toString(),
          })) || [],
      },
      {
        name: "users",
        type: "select",
        label: "Inspector",
        options:
          users?.data?.map((user) => ({
            label: user.name,
            value: user.uuid.toString(),
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
      {
        name: "category",
        type: "select",
        label: "Category",
        options:
          Category?.data?.map((user) => ({
            label: user.name,
            value: user.id.toString(),
          })) || [],
      },
      {
        name: "classification",
        type: "select",
        label: "Classification",
        options:
          Classification?.map((user) => ({
            label: user.label,
            value: user.value.toString(),
          })) || [],
      },
    ];
    openFilter(filterOptions, "inspection_reports");
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
