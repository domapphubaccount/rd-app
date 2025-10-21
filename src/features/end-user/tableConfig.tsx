import type { ColumnDef } from "@tanstack/react-table";
import type { EndUser } from "./types";
import { Settings } from "lucide-react";

export const EndUserColumns = (): ColumnDef<EndUser>[] => {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "full_name",
      header: "Name",
    },
    {
      accessorKey: "mobile",
      header: "Mobile",
    },
    {
      accessorKey: "owner_projects",
      header: "Owner Projects",
    },
    {
      accessorKey: "managed_projects",
      header: "Managed Projects",
    },
    {
      accessorKey: "viewed_projects",
      header: "Viewed Projects",
    },
    {
      accessorKey: " ",
      header: "Actions",
      cell: () => {
        return <Settings width={16} className="text-gray-500 cursor-pointer" />;
      },
    },
  ];
};
