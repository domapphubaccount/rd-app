import type { ColumnDef } from "@tanstack/react-table";
import type { TaxRate } from "./types";
import { Pencil, Trash } from "lucide-react";

export const TaxRateColumns = (): ColumnDef<TaxRate>[] => {
  return [
    {
      accessorKey: "id",
      header: "#",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "rate",
      header: "Rate",
      cell: (info) => {
        const rate = info.getValue() as number;
        return (
          <span className="font-semibold">{rate}%</span>
        );
      },
    },
    {
      accessorKey: "user.name",
      header: "Created By",
    },
    {
      accessorKey: "active",
      header: "Status",
      cell: (info) => {
        const status = info.getValue();
        return (
          <span
            className={`px-4 py-1 text-[12px] rounded-full font-bold ${
              status
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {status ? "Enabeld" : "Disabled"}
          </span>
        );
      },
    },
    {
      accessorKey: "id",
      header: "Actions",
      cell: () => {
        return (
          <div className="flex items-center gap-3">
            <button className="text-[var(--text)]">
              <Pencil className="w-4 h-4" />
            </button>

            <button className="text-red-500">
              <Trash className="w-4 h-4" />
            </button>
          </div>
        );
      },
    },
  ];
};
