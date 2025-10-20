import type { ColumnDef } from "@tanstack/react-table";
import { Eye, Trash2 } from "lucide-react";
import type { Rd7Quotation } from "./types";
import { format } from "date-fns";

export const RD7QuotationsColumns = (): ColumnDef<Rd7Quotation>[] => {
  return [
    {
      header: "Quotation No",
      accessorKey: "quotation_no",
    },
    {
      header: "Category",
      accessorKey: "category",
      cell: ({ getValue }) => {
        const value = getValue<string>();
        return value ? <i className={`mdi ${value}`}></i> : "-";
      },
    },
    {
      header: "Reference  No",
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
      header: "Survey Resolution No.",
      accessorKey: "servey_resolution_number",
    },
    {
      header: "Quoted By",
      accessorKey: "quoted_by",
    },
    {
      header: "RD7 Total Cost",
      accessorKey: "rd7_total_cost",
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
    },
    {
      header: "Payment Date",
      accessorKey: "payment_date",
    },
    {
      header: "TIS Fees Status",
      accessorKey: "tis_fee_status",
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
                <Trash2 className="w-4 h-4 text-[red]" />
              </button>
            </div>
          </>
        );
      },
    },
  ];
};
