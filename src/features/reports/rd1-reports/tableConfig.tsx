import type { ColumnDef } from "@tanstack/react-table";
import type { Rd1Report } from "./types";
import { Eye } from "lucide-react";

export const Rd1Columns = (): ColumnDef<Rd1Report>[] => {
  return [
    {
      header: "Report Id",
      accessorKey: "id",
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
      header: "Res. Person",
      accessorKey: "res_person",
    },
    {
      header: "Rev",
      accessorKey: "rev",
    },
    {
      header: "Max Degree",
      accessorKey: "max_degree",
    },
    {
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Cases",
      accessorKey: "cases",
    },
    {
      header: "Date",
      accessorKey: "created_at",
    },
    {
      header: "Contractor",
      accessorKey: "contractor_name",
    },
    {
      header: "Designer Office",
      accessorKey: "design_engineering_office",
    },
    {
      header: "Soil Report",
      accessorKey: "soil_company",
    },
 {
  header: "Status",
  accessorKey: "report_status.status",
  cell: ({ row }) => {
    const status = row.original.report_status.status;
    const color = row.original.report_status.color;

    return (
      <span
        className="py-1 px-3 rounded-full w-fit flex items-center gap-1 text-sm font-medium text-white"
        style={{ backgroundColor: color }}
      >
        {status}
      </span>
    );
  },
},


    {
      header: "Actions",
      cell: () => {
        return (
          <button className="text-blue-400">
            <Eye className="w-4 h-4" />
          </button>
        );
      },
    },
  ];
};
