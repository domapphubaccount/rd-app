import type { ColumnDef } from "@tanstack/react-table";
import type { WeirdPeople } from "./types";
import { Eye, Pencil, Trash } from "lucide-react";

export const WeirdPeopleColumns = (): ColumnDef<WeirdPeople>[] => {
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
      accessorKey: "user.name",
      header: "Supervisor/Designer",
    },
    {
      accessorKey: "soil",
      header: "Soil.",
    },
    {
      accessorKey: "reviewed",
      header: "Reviewed.",
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
            <button className="text-[var(--text)]">
              <Pencil className="w-4 h-4" />
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
