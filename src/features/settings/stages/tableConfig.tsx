import type { ColumnDef } from "@tanstack/react-table";
import type { Stage } from "./types";
import { Eye, Trash } from "lucide-react";

export const StageColumns = (): ColumnDef<Stage>[] => {
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
      header: "Stage Name.",
    },
    {
      accessorKey: "platforms",
      header: "Platforms.",
    },
    {
      accessorKey: "id",
      header: "Actions",
      cell: () => {
        return (
          <div className="flex items-center gap-3">
            <button className="text-[var(--text)]">
              <Eye className="w-4 h-4" />
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
