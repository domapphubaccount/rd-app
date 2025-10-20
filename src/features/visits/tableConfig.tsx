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
    },
  ];
};
