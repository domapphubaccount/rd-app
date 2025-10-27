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
    <div className="flex gap-3 px-6 pt-4 h-[60px] mb-5">
      <button
        onClick={handleReset}
        className="h-full flex-1 bg-[#F4F6FB] text-[#31538E] py-2 rounded-[8px] text-[14px] font-medium hover:bg-[#E8ECF5] transition-colors"
        type="button"
      >
        Reset All
      </button>
      <button
        onClick={handleApply}
        className="h-full flex-1 bg-[#667085] text-white py-2 rounded-[8px] text-[14px] font-medium hover:bg-[#667085] transition-colors"
        disabled={!isFilterValid}
      >
        Apply {appliedCount > 0 && ` (${appliedCount})`}
      </button>
    </div>
  );
}
