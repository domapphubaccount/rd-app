import type { ColumnDef } from "@tanstack/react-table";
import type { Section } from "./types";
import { Eye, Pencil, Trash } from "lucide-react";

export const SectionColumns = (): ColumnDef<Section>[] => {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "order",
      header: "Order",
    },
    {
      accessorKey: "name",
      header: "Section Name",
    },
    {
      accessorKey: "is_special",
      header: "Special Section",
    },
    {
      accessorKey: " ",
      header: "Actions",
      cell: () => {
        return (
          <div className="flex gap-2">
            <Eye className="text-gray-500 cursor-pointer" size={16} />
            <Pencil className="text-gray-500 cursor-pointer" size={16} />
            <Trash className="text-red-500 cursor-pointer" size={16} />
          </div>
        );
      },
    },
  ];
};
