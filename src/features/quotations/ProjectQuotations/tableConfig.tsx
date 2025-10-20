import type { ColumnDef } from "@tanstack/react-table";
import { Eye, Repeat1 } from "lucide-react";
import type { ProjectQuotations } from "./types";

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
    },
   {
      header: "Payment Status",
      accessorKey: "payment_status",
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
              <button className="text-[var(--main)]">
                <Eye className="w-4 h-4" />
              </button>
              <button className="text-[var(--main)]">
                <Repeat1  className="w-4 h-4 " />
              </button>
            </div>
          </>
        );
      },
    },
  ];
};
