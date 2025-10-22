interface TableHeaderProps {
  disabled?: boolean;
}
export default function TableHeader({ disabled }: TableHeaderProps) {
  return (
    <div className="flex items-center justify-end px-4">
      <div className="flex items-center gap-4 text-[14px]">
        <button
          className={`px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px] transition-all duration-200
            ${disabled ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}
          disabled={disabled}
        >
          Update Changes
        </button>
      </div>
    </div>
  );
}
