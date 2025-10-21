import type { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import type { Unit, UnitCategory } from "./types";

export const UnitControlColumns = (): ColumnDef<UnitCategory>[] => {
  return [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Default Unit",
      accessorKey: "units",

      cell: ({ getValue }) => {
        const units = getValue() as Unit[];
        const defaultUnit = units.find((u) => u.default === 1);
        return defaultUnit?.name ?? "-";
      },
    },

    {
      header: "Action",
      cell: () => {
        return (
          <>
            <div className="flex items-center gap-4 text-[14px]">
              <button className="text-[var(--text)]">
                <Pencil className="w-4 h-4" />
              </button>
              <button className="text-red-500">
                <Trash className="w-4 h-4" />
              </button>
            </div>
          </>
        );
      },
    },
  ];
};
