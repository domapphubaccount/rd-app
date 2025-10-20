import { useConfirmModalStore } from "@/components/confirmation/store";
import {
  ChevronDown,
  CloudDownload,
  SlidersHorizontal,
  Trash,
} from "lucide-react";
import TimeRange from "@/components/shared/TimeRange";
import ConfirmModal from "@/components/confirmation/ConfirmModal";
import useDeleteProject from "./useDeleteProject";

export default function TableHeader({
  selectedIds,
  setSelectedIds,
}: {
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const { deleteProject, isPending } = useDeleteProject();
  const { open } = useConfirmModalStore();

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

        <button className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]">
          <SlidersHorizontal className="w-3 h-3" />
          Filter
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <ConfirmModal isPending={isPending} event={handleDeleteProjects} />
    </div>
  );
}
