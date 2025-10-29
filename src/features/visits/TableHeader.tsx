import TimeRange from "@/components/shared/TimeRange";
import { Plus } from "lucide-react";

export default function TableHeader() {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <TimeRange />
      </div>

      <div className="flex items-center gap-4 text-[14px]">
        <button className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]">
          <Plus className="w-4 h-4" />
          Add Site Visit
        </button>
      </div>
    </div>
  );
}
