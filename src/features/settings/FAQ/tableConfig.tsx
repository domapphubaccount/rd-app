import type { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash } from "lucide-react";
import type { FAQ } from "./types";

export const FAQColumns = (): ColumnDef<FAQ>[] => {
  return [
    {
      header: "Order",
      accessorKey: "order",
    },
    {
      header: "Category Name",
      accessorKey: "category_name",
    },
    {
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "No. of Questions",
      accessorKey: "no_of_questions",
    },

    {
      header: "Action",
      cell: () => {
        return (
          <>
            <div className="flex items-center gap-4 text-[14px]">
              <button className="text-blue-400">
                <Eye className="w-4 h-4" />
              </button>
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
