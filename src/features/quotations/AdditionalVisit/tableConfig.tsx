import type { ColumnDef } from "@tanstack/react-table";
import { Eye, MoreVerticalIcon } from "lucide-react";
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
              <button className="text-[var(--main)]">
                <Eye className="w-4 h-4" />
              </button>
              <button className="text-[var(--main)]">
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <MoreVerticalIcon className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40" align="end">
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
