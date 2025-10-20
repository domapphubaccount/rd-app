import type { ColumnDef } from "@tanstack/react-table";
import type { Rd5Report } from "./types";
import { Eye } from "lucide-react";
import ActionsMenu from "./ActionsMenu";

export const Rd5Columns = (): ColumnDef<Rd5Report>[] => {
  return [
    {
      header: "Report Id",
      accessorKey: "report_id",
    },
    {
      header: "Ticket Code",
      accessorKey: "ticket_code",
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
      header: "Created By",
      accessorKey: "created_by",
    },
    {
      header: "Status",
      accessorKey: "report_status.status",
      cell: ({ row }) => {
        const status = row.original.report_status.status;
        const color = row.original.report_status.color;

        return (
          <span
            className="py-1 px-3 rounded-full w-fit flex items-center gap-1 text-sm font-[12px] text-white"
            style={{ backgroundColor: color }}
          >
            {status}
          </span>
        );
      },
    },

    {
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Creation Date",
      accessorKey: "creation_date",
    },
    {
      header: "Issues Date",
      accessorKey: "issues_date",
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
