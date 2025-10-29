import type { FilterOption } from "@/components/filter/types";
import { useFilterStore } from "@/components/filter/store";
import TimeRange from "@/components/shared/TimeRange";
import { useGetAllBuildingCategories } from "@/hooks/useGetAllBuildingCategories";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function TableHeader() {
  const { openFilter } = useFilterStore();

  const { data: categories } = useGetAllBuildingCategories();

  const handleOpen = () => {
    const filterOptions: FilterOption[] = [
      {
        name: "category",
        type: "select",
        label: "Category",
        options:
          categories?.data?.map((category) => ({
            label: category.name,
            value: category.id.toString(),
          })) || [],
      },
      {
        name: "reference_number",
        type: "number",
        label: "Reference Numbers",
        placeholder: "Enter numbers &press enter",
      },
      {
        name: "region",
        type: "text",
        label: "Region",
        placeholder: "Enter region",
      },
      {
        name: "total_floors_area_from",
        type: "number",
        label: "Main Area",
        placeholder: "Enter Total Floors Area Start",
      },
      {
        name: "total_floors_area_to",
        type: "number",
        label: "Max Area ",
        placeholder: "Enter Total Floors Area End",
      },
      {
        name: "est_cost_from",
        type: "number",
        label: "Est Cost Min",
        placeholder: "Enter Est Cost Start",
      },
      {
        name: "est_cost_to",
        type: "number",
        label: "Est Cost Max",
        placeholder: "Enter Est Cost End",
      },
      {
        name: "est_project_cost_from",
        type: "number",
        label: "Est Project Cost Min",
        placeholder: "Enter Total Est Project Cost Start",
      },
      {
        name: "est_project_cost_to",
        type: "number",
        label: "Est Project Cost Max",
        placeholder: "Enter Est Project Cost End",
      },
      {
        name: "idi_cost_from",
        type: "number",
        label: "IDI Cost Min",
        placeholder: "Enter IDI Cost Start",
      },
      {
        name: "idi_cost_to",
        type: "number",
        label: "IDI Cost Max",
        placeholder: "Enter IDI Cost End",
      },
      {
        name: "est_cost_ratio_from",
        type: "number",
        label: "Cost Ratio Min",
        placeholder: "Enter Cost Ratio Start",
      },
      {
        name: "est_cost_ratio_to",
        type: "number",
        label: "Cost Ratio Max",
        placeholder: "Enter Cost Ratio End",
      },
    ];
    openFilter(filterOptions, "cost_estimation");
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
