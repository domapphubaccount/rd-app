import type { ColumnDef } from "@tanstack/react-table";
import type { Section } from "./types";
import { Eye, Pencil, Trash } from "lucide-react";
import { Link } from "react-router";

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
      cell: ({ row }) => {
        const is_special = row.original.is_special;
        return (
          <span>
            {is_special ? (
              <span className="bg-blue-600 py-1 px-3 text-white rounded-3xl text-xs font-semibold">
                Special Section
              </span>
            ) : (
              ""
            )}
          </span>
        );
      },
    },
    {
      accessorKey: " ",
      header: "Actions",
      cell: ({ row }) => {
        const id = row.original.id;
        return (
          <div className="flex gap-2">
            <Link to={id.toString()}>
              <Eye className="text-gray-500 cursor-pointer" size={16} />
            </Link>
            <Pencil className="text-gray-500 cursor-pointer" size={16} />
            <Trash className="text-red-500 cursor-pointer" size={16} />
          </div>
        );
      },
    },
  ];
};
