import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import type { Template } from "./types";

export const TemplateWhatsAPPColumns = (): ColumnDef<Template>[] => {
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
          </div>
        );
      },
    },
  ];
};
