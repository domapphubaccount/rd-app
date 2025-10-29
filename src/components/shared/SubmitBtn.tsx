import { LoaderCircle } from "lucide-react";

type Props = {
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
}: Props) {
  const isDisabled = loading || disabled;
  return (
    <button
      className={[
        "h-[42px] bg-[var(--main)] text-white rounded-lg flex items-center justify-center gap-1",
        !className.includes("w-") && "w-full",
        isDisabled
          ? "opacity-50 cursor-not-allowed"
          : "opacity-100 cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={isDisabled}
    >
      {text}
      {loading && <LoaderCircle className="animate-spin w-5 h-5" />}
    </button>
  );
}
