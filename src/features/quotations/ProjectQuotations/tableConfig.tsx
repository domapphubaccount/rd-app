import type { ColumnDef } from "@tanstack/react-table";
import { Eye, Repeat1 } from "lucide-react";
import type { ProjectQuotations } from "./types";
import { format } from "date-fns";

export const ProjectQuotationsColumns = (): ColumnDef<ProjectQuotations>[] => {
  return [
    {
      header: "Quotation No",
      accessorKey: "quotation_no",
    },
    {
      header: "Project No",
      accessorKey: "reference_no",
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
      header: "Survey Resolution No.",
      accessorKey: "servey_resolution_number",
    },
    {
      header: "Quoted By",
      accessorKey: "quoted_by",
    },
    {
      header: "Project Cost",
      accessorKey: "project_cost",
    },
    {
      header: "Quotation Date",
      accessorKey: "quotation_date",
      cell: ({ getValue }) => {
        const value = getValue<string>();
        return value ? format(new Date(value), "dd/MM/yyyy") : "-";
      },
    },
    {
      header: "Payment Status",
      accessorKey: "payment_status",
      cell: (info) => {
        const paid = info.getValue<string>();
        return (
          <span
            className={`px-4 py-1 text-[12px] rounded-full font-bold ${
              paid === "Yes"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {paid === "Yes" ? "Paid" : "Unpaid"}
          </span>
        );
      },
    },
    {
      header: "Visit No",
      accessorKey: "visit_number",
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
              <button className="text-[var(--main)]">
                <Repeat1 className="w-4 h-4 " />
              </button>
            </div>
          </>
        );
      },
    },
  ];
};
