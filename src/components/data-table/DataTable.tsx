import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router";

type DataTableProps<T> = {
  data: T[];
  columns: ColumnDef<T, unknown>[];
  hasPagination?: boolean;
  total: number;
  perPage: number;
};

export default function DataTable<T>({
  data,
  columns,
  total,
  perPage,
  hasPagination = true,
}: DataTableProps<T>) {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));

  const table = useReactTable({
    data: data || [],
    columns,
    manualPagination: true,
    pageCount: Math.ceil(total / perPage),
    state: {
      pagination: { pageIndex: page - 1, pageSize: total },
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-3 py-4 text-left border-b border-gray-300 bg-gray-100 font-semibold rounded-0"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-50 border-b last:border-b-0 border-gray-200"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-3 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {data.length === 0 && (
        <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-4">
          <img src="/icons/noData.svg" alt="no data" />
          <h6 className="text-[14px] font-bold text-[var(--text)]">
            No Data Found Here.
          </h6>
        </div>
      )}

      {hasPagination && (
        <Pagination total={total} perPage={perPage} />
      )}
    </div>
  );
}
