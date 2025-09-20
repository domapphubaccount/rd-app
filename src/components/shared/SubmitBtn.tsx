import { LoaderCircle } from "lucide-react";

type SubmitBtnBrobs = {
  text: string;
  loading?: boolean;
};
export default function SubmitBtn({ text, loading = false }: SubmitBtnBrobs) {
  return (
    <button
      className="w-full h-[42px] bg-[var(--main)] text-white rounded-[8px] flex items-center justify-center gap-2"
      disabled={loading}
      style={{ opacity: loading ? 0.5 : 1 }}
    >
      {text} {loading && <LoaderCircle className="animate-spin w-4 h-4" />}
    </button>
  );
}
