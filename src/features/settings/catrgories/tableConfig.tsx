import type { ColumnDef } from "@tanstack/react-table";
import type { Category } from "./types";
import { Pencil } from "lucide-react";

export const CategoriesColumns = (): ColumnDef<Category>[] => {
  return [
    {
      header: "Icon",
      accessorKey: "icon",
      cell: ({ getValue }) => {
        const value = getValue<string>();
        return value ? <i className={`mdi font-bold text-gray-500 text-2xl ${value}`}></i> : "-";
      },
    },
    {
      accessorKey: "name",
      header: "Category",
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
          </div>
        );
      },
    },
  ];
};
