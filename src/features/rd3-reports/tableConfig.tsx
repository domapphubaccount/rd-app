import type { ColumnDef } from "@tanstack/react-table";
import type { Rd3Report } from "./types";
import { Eye, History } from "lucide-react";
import ActionsMenu from "./ActionsMenu";

export const Rd3Columns = (): ColumnDef<Rd3Report>[] => {
  return [
    {
      header: "Report Id",
      accessorKey: "report_id",
    },
    {
      header: "Category",
      accessorKey: "category_name",
    },

    {
      header: "Reference No.",
      accessorKey: "reference_number",
    },

    {
      header: "Policy No.",
      accessorKey: "policy_number",
    },
    {
      header: "Request No.",
      accessorKey: "request_number",
    },
    {
      header: "Survey Resolution No",
      accessorKey: "servey_resolution_number",
    },
    {
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Date",
      accessorKey: "created_at",
    },
    {
      header: "Inspector",
      accessorKey: "inspector",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "History",
      accessorKey: "status",
      cell: () => {
        return <History className="w-5 h-5 text-gray-600 cursor-pointer" />;
      },
    },

    {
      header: "Action",
      cell: () => {
        return (
          <div className="flex ">
            <button className="text-blue-400">
              <Eye className="w-4 h-4" />
            </button>
            <button className="text-blue-400">
              <ActionsMenu />
            </button>
          </div>
        );
      },
    },
  ];
};
