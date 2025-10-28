import { useFilterStore } from "@/components/filter/store";
import type { FilterOption } from "@/components/filter/types";
import TimeRange from "@/components/shared/TimeRange";
// import useGetAllUsers, { useGetAllBuildingCategories } from "@/utils/constans";
import { ChevronDown, Plus, SlidersHorizontal } from "lucide-react";

export default function TableHeader() {
  const { openFilter } = useFilterStore();

  // const { data } = useGetAllUsers();
  // const { data: categories } = useGetAllBuildingCategories();

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
        label: "Reference No",
        placeholder: "Enter numbers &press enter",
      },
      // {
      //   name: "category",
      //   type: "select",
      //   label: "Category",
      //   options:
      //     categories?.data?.map((category) => ({
      //       label: category.name,
      //       value: category.id.toString(),
      //     })) || [],
      // },
      // {
      //   name: "quoted_by",
      //   type: "select",
      //   label: "Quoted By",
      //   options:
      //     data?.data?.map((user) => ({
      //       label: user.name,
      //       value: user.uuid.toString(),
      //     })) || [],
      // },
      {
        name: "cost_from",
        type: "number",
        label: "RD7 Cost From",
        placeholder: "Enter RD7 Cost From",
      },
      {
        name: "cost_to",
        type: "number",
        label: "RD7 Cost To",
        placeholder: "Enter RD7 Cost To",
      },
      {
        name: "payment_status",
        type: "select",
        label: "Payment Status",
        options: [
          { label: "Not Paid", value: "Not Paid" },
          { label: "Paid", value: "Paid" },
          { label: "Pending", value: "Pending" },
        ],
      },
      {
        type: "date",
        label: "Payment Date From",
        startName: "payment_date_from",
        endName: "payment_date_to",
      },
    ];
    openFilter(filterOptions, "rd7_quotation");
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
