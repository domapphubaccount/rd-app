import type { ColumnDef } from "@tanstack/react-table";
import type { Rd7Report } from "./types";
import { Eye } from "lucide-react";
import ActionsMenu from "./ActionsMenu";

export const Rd7Columns = (): ColumnDef<Rd7Report>[] => {
  return [
    {
      header: "Report Id",
      accessorKey: "id",
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
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Inspector",
      accessorKey: "inspector",
    },
    {
      header: "Total Cost",
      accessorKey: "cost",
    },
    {
      header: "RD0 Status",
      accessorKey: "rd0_status",
    },
    {
      header: "Quotation Status",
      accessorKey: "quotations_status",
    },
    {
      header: "RD7 Status",
      accessorKey: "rd7_status",
    },
    {
      header: "Action",
      cell: () => {
        return (
          <div className="flex gap-2">
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
