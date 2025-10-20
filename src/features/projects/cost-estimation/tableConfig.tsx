import type { ColumnDef } from "@tanstack/react-table";
import type { CostEstimation } from "./types";
import { Eye } from "lucide-react";

export default function estimationColumns(): ColumnDef<CostEstimation>[] {
  return [
    {
      header: "#",
      accessorKey: "id",
    },
    {
      header: "Category",
    },
    {
      header: "Reference No",
      accessorKey: "project.ReferenceNo",
    },
    {
      header: "Project Added Date",
      accessorKey: "project.Date",
    },
    {
      header: "Region",
      accessorKey: "region_cost",
    },
    {
      header: "Est Cost/M²",
      accessorKey: "est_cost",
    },
    {
      header: "Total Floors Area",
      accessorKey: "total_area",
    },
    {
      header: "Est Project Cost",
      accessorKey: "project.cost",
    },
    {
      header: "Idi Cost",
      accessorKey: "idi_cost",
    },
    {
      header: "Est Cost Ratio",
      accessorKey: "ratio",
      cell: (info) => {
        const ratio = info.getValue();
        return `${ratio}%`;
      },
    },
    {
      header: "Action",
      accessorKey: "id",
      cell: () => {
        return (
          <button className="text-blue-400">
            <Eye className="w-4 h-4" />
          </button>
        );
      },
    },
  ];
}
