import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "./types";
import { Pencil, Trash } from "lucide-react";

export default function userColumns(): ColumnDef<User>[] {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "role.name",
      header: "User Role",
    },
    {
      accessorKey: "last_visit",
      header: "Last Visit",
    },
    {
      accessorKey: "specialist.name",
      header: "Specialist",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const status = info.getValue();
        return (
          <span
            className={`px-4 py-1 text-[12px] rounded-full font-bold ${
              status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {status ? "Active" : "Inactive"}
          </span>
        );
      },
    },
    {
      accessorKey: "uuid",
      header: "Actions",
      cell: () => {
        return (
          <div className="flex items-center gap-3">
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
}
