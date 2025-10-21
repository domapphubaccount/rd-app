import type { ColumnDef } from "@tanstack/react-table";
import type { Ticket } from "./types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";

export const TicketColumns = (): ColumnDef<Ticket>[] => {
  return [
    {
      accessorKey: "id",
      header: "id",
    },
    { accessorKey: "type", header: "Type" },
    { accessorKey: "ticket_code", header: "Code" },
    {
      accessorKey: "reference_number",
      header: "Reference No.",
    },
    {
      accessorKey: "policy_number",
      header: "Policy No.",
    },
    {
      accessorKey: "request_number",
      header: "Request No.",
    },
    {
      accessorKey: "servey_resolution_number",
      header: "Survey Resolution No.",
    },
    {
      accessorKey: "created_by.full_name",
      header: "Created by",
    },
    {
      accessorKey: "updated_by.full_name",
      header: "Updated by",
    },
    {
      accessorKey: "degree.name",
      header: "Degree",
    },
    {
      accessorKey: "transfer_to.name",
      header: "Transfer To",
    },
    {
      accessorKey: "rd5_report_status.status",
      header: "RD5 Status",
    },
    {
      accessorKey: "activity",
      header: "Activity",
    },
    {
      accessorKey: " ",
      header: "Action",
      cell: () => {
        return (
          <>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <MoreVerticalIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Update</DropdownMenuItem>
                  <DropdownMenuItem>Receiving data</DropdownMenuItem>
                  <DropdownMenuItem className="text-[red]">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        );
      },
    },
  ];
};
