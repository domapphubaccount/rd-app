import type { FilterOption } from "@/components/filter/types";
import { useConfirmModalStore } from "@/components/confirmation/store";
import { useFilterStore } from "@/components/filter/store";
import {
  ChevronDown,
  CloudDownload,
  SlidersHorizontal,
  Trash,
} from "lucide-react";
import TimeRange from "@/components/shared/TimeRange";
import ConfirmModal from "@/components/confirmation/ConfirmModal";
import useDeleteProject from "./useDeleteProject";
import { useGetAllBuildingCategories } from "@/hooks/useGetAllBuildingCategories";
import {
  CLASSIFICATION_OPTIONS,
  MISSING_STAGE,
  PAYMENT_STATUS,
  TYPE_OPTIONS,
} from "@/utils/constans";

export default function TableHeader({
  selectedIds,
  setSelectedIds,
}: {
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const { deleteProject, isPending } = useDeleteProject();
  const { open } = useConfirmModalStore();

  const { openFilter } = useFilterStore();
  const { data: categories } = useGetAllBuildingCategories();

  const handleConfirm = () => {
    open({
      title: "Confirm Delete",
      description: "Are you sure you want to delete all selected projects?",
      type: "danger",
      btnText: "Delete",
    });
  };

  const handleDeleteProjects = () => {
    deleteProject(selectedIds, {
      onSuccess: () => {
        setSelectedIds([]);
      },
    });
  };

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
        name: "type",
        type: "select",
        label: "Type",
        options:
          TYPE_OPTIONS.map((t) => ({
            label: t.name,
            value: t.label,
          })) || [],
      },
      {
        name: "payment",
        type: "select",
        label: "Payment",
        options:
          PAYMENT_STATUS.slice(0, 2).map((s) => ({
            label: s.label,
            value: s.value,
          })) || [],
      },
      {
        name: "classification",
        type: "select",
        label: "Classification",
        options: CLASSIFICATION_OPTIONS.map((c) => ({
          label: c.name,
          value: c.label,
        })),
      },
      {
        name: "missing_stage",
        type: "select",
        label: "Missing Stage",
        options:
          MISSING_STAGE.map((m) => ({
            label: m.label,
            value: m.value,
          })) || [],
      },
    ];
    openFilter(filterOptions, "project");
  };

  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <TimeRange />

        {selectedIds.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              className="bg-white rounded shadow-md p-2"
              onClick={handleConfirm}
            >
              <Trash className="w-4 h-4 text-red-500" />
            </button>
            <span className="text-[14px]">{selectedIds.length} Selected</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 text-[14px]">
        <button className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]">
          <CloudDownload className="w-4 h-4" /> Import
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

      <ConfirmModal isPending={isPending} event={handleDeleteProjects} />
    </div>
  );
}
