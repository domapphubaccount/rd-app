interface FilterActionsProps {
  appliedCount: number;
  isFilterValid: boolean;
  handleApply: () => void;
  handleReset: () => void;
}

export default function FilterActions({
  appliedCount,
  isFilterValid,
  handleApply,
  handleReset,
}: FilterActionsProps) {
  return (
    <div className="flex gap-3 p-3">
      <button
        onClick={handleReset}
        className="w-full bg-[#F4F6FB] text-[#31538E] p-2 border border-transparent flex items-center justify-center rounded-[8px] text-[14px] font-medium hover:bg-[#E8ECF5] transition-colors"
        type="button"
      >
        Reset All
      </button>

      <button
        onClick={handleApply}
        className="w-full bg-[#667085] text-white p-2 border border-transparent flex items-center justify-center rounded-[8px] text-[14px] font-medium hover:bg-[#667085] transition-colors"
        disabled={!isFilterValid}
      >
        Apply {appliedCount > 0 && ` (${appliedCount})`}
      </button>
    </div>
  );
}
