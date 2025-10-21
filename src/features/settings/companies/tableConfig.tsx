import type { ColumnDef } from "@tanstack/react-table";
import type { Company } from "./types";
import { Eye, Trash } from "lucide-react";

export const CompanyColumns = (): ColumnDef<Company>[] => {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "country.name",
      header: "Country",
    },
    {
      accessorKey: " ",
      header: "Actions",
      cell: () => {
        return (
          <div className="flex gap-4">
            <Eye size={16} className="text-gray-500 cursor-pointer" />
            <Trash size={16} className="text-red-500 cursor-pointer" />
          </div>
        );
      },
    },
  ];
};
