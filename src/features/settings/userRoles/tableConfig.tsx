import type { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash } from "lucide-react";
import type { Role } from "./types";

export const UserRoleColumns = (): ColumnDef<Role>[] => {
  return [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Active Users",
      accessorKey: "active_users_count",
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
