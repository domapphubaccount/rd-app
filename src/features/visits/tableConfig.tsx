import type { ColumnDef } from "@tanstack/react-table";
import type { VisitRequest } from "./types";

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
