import type { ColumnDef } from "@tanstack/react-table";
import type { VisitRequest } from "./types";
import { format } from "date-fns";

export const visitColumns = (): ColumnDef<VisitRequest>[] => {
  return [
    {
      accessorKey: "id",
      header: "id",
    },
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
      accessorKey: "request_date",
      header: "Request Date",
      cell: ({ getValue }) => {
        const value = getValue<string>();
        return value ? format(new Date(value), "dd/MM/yyyy") : "-";
      },
    },
    {
      accessorKey: "visit_date",
      header: "Visit Date",
    },
    {
      accessorKey: "stage",
      header: "Stage",
    },
    {
      accessorKey: "inspector",
      header: "Inspector",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const status = info.getValue<string>();

        const statusMap: Record<string, string> = {
          Pending: "bg-[#FFF3E7] text-[#F49A47]",
          APPROVED: "bg-[#DAFFF2] text-[#5DC486]",
          Rejected: "bg-[#FBEAEB] text-[#F54B5F]",
          Completed: "bg-[#DAFFF2] text-[#5DC486]",
          Hold: "bg-[#cbd5e1] text-[#737373]",
          Cancelled: "bg-[#C4C6C8] text-[#000000]",
          Confirmed: "bg-[#A8C80926] text-[#98B40A]",
        };

        const dotMap: Record<string, string> = {
          Pending: "bg-[#F49A47]",
          APPROVED: "bg-[#5DC486]",
          Rejected: "bg-[#F54B5F]",
          Completed: "bg-[#5DC486]",
          Hold: "bg-[#737373]",
          Cancelled: "bg-[#000000]",
          Confirmed: "bg-[#98B40A]",
        };

        const badgeClass = statusMap[status] ?? "";
        const dotClass = dotMap[status] ?? "";

        return (
          <span
            className={`py-1 px-3 rounded-full w-fit flex items-center gap-1 text-[14px] font-medium ${badgeClass}`}
          >
            <span className={`w-2 h-2 block rounded-full ${dotClass}`} />
            {status}
          </span>
        );
      },
    },
  ];
};
