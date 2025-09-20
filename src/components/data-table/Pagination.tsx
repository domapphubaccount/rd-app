import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { usePagination } from "./usePagination";
import { useSearchParams } from "react-router";

type PaginationProps = {
  total: number;
  perPage: number;
};

export default function Pagination({ total, perPage }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(total / perPage);

  const pages = usePagination(page, totalPages);

  const setPage = (newPage: number) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("page", String(newPage));
      return params;
    });
  };

  return (
    <div className="p-4 pt-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => setPage(Math.max(page - 1, 1))}
          disabled={page === 1}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1">
          {pages.map((p, i) =>
            p === "..." ? (
              <span key={`ellipsis-${i}`} className="px-2">
                ...
              </span>
            ) : (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-7 h-7 flex items-center justify-center rounded-lg text-[14px] border ${
                  page === p
                    ? "bg-[var(--main)] text-white border-[var(--main)]"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
              >
                {p}
              </button>
            )
          )}
        </div>

        <button
          onClick={() => setPage(Math.min(page + 1, totalPages))}
          disabled={page === totalPages}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronsRight className="w-4 h-4" />
        </button>
      </div>

      <span className="text-sm text-gray-700">
        Page {page} of {totalPages}
      </span>
    </div>
  );
}
