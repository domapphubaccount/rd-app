import type { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash } from "lucide-react";
import type { Template } from "./types";

export const TemplateColumns = (): ColumnDef<Template>[] => {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Template",
    },

    {
      accessorKey: " ",
      header: "Actions",
      cell: () => {
        return (
          <div className="flex gap-4">
            <Eye size={16} className="text-gray-500 cursor-pointer" />
            <Pencil size={16} className="text-gray-500 w-4 h-4 cursor-pointer" />
            <Trash size={16} className="text-red-500 cursor-pointer" />
          </div>
        );
      },
    },
  ];
};
