import type { ColumnDef } from "@tanstack/react-table";
import { Eye, Trash } from "lucide-react";
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
              <button className="text-blue-400">
                <Eye className="w-4 h-4" />
              </button>
              <button className="text-[var(--main)]">
                <Trash className="w-4 h-4 text-[red]" />
              </button>
            </div>
          </>
        );
      },
    },
  ];
};
