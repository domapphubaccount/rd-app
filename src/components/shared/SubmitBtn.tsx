import { LoaderCircle } from "lucide-react";

type SubmitBtnBrobs = {
  text: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};

export default function SubmitBtn({
  text,
  loading = false,
  disabled = false,
  className = "",
}: SubmitBtnBrobs) {
  const hasWidthClass = className.includes("w-");
  return (
    <button
      className={`${!hasWidthClass ? "w-full" : ""} h-[42px] bg-[var(--main)] text-white rounded-[8px] flex items-center justify-center gap-1
        ${disabled || loading ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"}
        ${className}`}
      disabled={loading || disabled}
      style={{ opacity: loading ? 0.5 : 1 }}
    >
      {text} {loading && <LoaderCircle className="animate-spin w-5 h-5" />}
    </button>
  );
}
