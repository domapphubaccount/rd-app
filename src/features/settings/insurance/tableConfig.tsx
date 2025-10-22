import type { ColumnDef } from "@tanstack/react-table";
import type { Insurance } from "./types";
import { Eye, Trash } from "lucide-react";

export const insuranceColumns = (): ColumnDef<Insurance>[] => {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name_ar",
      header: "Name AR",
    },
    {
      accessorKey: "name_en",
      header: "Name EN",
    },
    {
      accessorKey: "",
      header: "Actions",
      cell: () => {
        return (
          <div className="flex gap-2">
            <Eye className="text-gray-500 cursor-pointer" size={16} />
            <Trash className="text-red-500 cursor-pointer" size={16} />
          </div>
        );
      },
    },
  ];
};
