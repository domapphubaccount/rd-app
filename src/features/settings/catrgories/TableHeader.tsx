import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function TableHeader() {
  return (
    <div className="flex items-center justify-end px-4">
      <div className="flex items-center gap-4 text-[14px]">
        <button className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]">
          <SlidersHorizontal width={16} />
          Filter
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
