import { ChevronDown, SlidersHorizontal, Trash } from "lucide-react";
import TimeRange from "@/components/shared/TimeRange";
import { useConfirmModalStore } from "@/components/confirmation/store";
import ConfirmModal from "@/components/confirmation/ConfirmModal";
import useDeleteLog from "./useDeletetLog";

export default function TableHeader({
  selectedIds,
  setSelectedIds,
}: {
  selectedIds: number[];
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const { deleteLog, isPending } = useDeleteLog();
  const { open } = useConfirmModalStore();

  const handleConfirm = () => {
    open({
      title: "Confirm Delete",
      description: "Are you sure you want to delete all selected Logs?",
      type: "danger",
      btnText: "Delete",
    });
  };

  const handleDeleteLogs = () => {
    deleteLog(selectedIds, {
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
          <SlidersHorizontal width={16} />
          Filter
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <ConfirmModal isPending={isPending} event={handleDeleteLogs} />
    </div>
  );
}
