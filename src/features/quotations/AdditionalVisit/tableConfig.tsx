import type { ColumnDef } from "@tanstack/react-table";
import { Eye, MoreVertical } from "lucide-react";
import type { AdditionalVisit } from "./types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";

export const AdditionalVisitColumns = (): ColumnDef<AdditionalVisit>[] => {
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
      header: "AV Cost",
      accessorKey: "av_cost",
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
      header: "Quotation Date",
      accessorKey: "quotation_date",
      cell: ({ getValue }) => {
        const value = getValue<string>();
        return value ? format(new Date(value), "dd/MM/yyyy") : "-";
      },
    },
    {
      header: "Payment Date",
      accessorKey: "payment_date",
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
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <MoreVertical className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-56 bg-white p-2 rounded-md shadow-lg"
                    side="right"
                    align="start"
                    sideOffset={8}
                  >
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Change Payment Status</DropdownMenuItem>
                      <DropdownMenuItem>Transfer To</DropdownMenuItem>
                      <DropdownMenuItem className="text-[red]">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </button>
            </div>
          </>
        );
      },
    },
  ];
};
