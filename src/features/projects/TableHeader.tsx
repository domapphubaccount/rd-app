import TimeRange from "@/components/shared/TimeRange";
import {
  ChevronDown,
  CloudDownload,
  SlidersHorizontal,
  Trash,
} from "lucide-react";

export default function TableHeader({
  selectedIds,
}: {
  selectedIds: string[];
}) {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <TimeRange />

        {selectedIds.length > 0 && (
          <div className="flex items-center gap-3">
            <button className="bg-white rounded shadow-md p-2">
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
    </div>
  );
}
