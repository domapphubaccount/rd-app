import type { ColumnDef } from "@tanstack/react-table";
import type { Rd0Report } from "./types";
import { Eye } from "lucide-react";

type ConfigProps = {
  selectedIds: number[];
  setSelectedIds: (ids: number[]) => void;
};

export const Rd0Columns = ({
  selectedIds,
  setSelectedIds,
}: ConfigProps): ColumnDef<Rd0Report>[] => {
  return [
    {
      id: "select",
      header: ({ table }) => {
        const allIds = table
          .getCoreRowModel()
          .rows.map((row) => row.original.id);
        const allSelected = allIds.every((id) => selectedIds.includes(id));
        const someSelected =
          !allSelected && allIds.some((id) => selectedIds.includes(id));

        return (
          <div className="w-full flex items-center">
            <input
              type="checkbox"
              checked={allSelected}
              ref={(el) => {
                if (el) el.indeterminate = someSelected;
              }}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedIds([...new Set([...selectedIds, ...allIds])]);
                } else {
                  setSelectedIds(
                    selectedIds.filter((id) => !allIds.includes(id))
                  );
                }
              }}
            />
          </div>
        );
      },
      cell: ({ row }) => {
        const id = row.original.id;
        const isChecked = selectedIds.includes(id);

        return (
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedIds([...selectedIds, id]);
              } else {
                setSelectedIds(selectedIds.filter((i) => i !== id));
              }
            }}
          />
        );
      },
    },
    {
      header: "Stage Id",
      accessorKey: "stage_id",
    },
    {
      header: "Reference No.",
      accessorKey: "reference_number",
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Created By",
      accessorKey: "created_by",
    },
    {
      header: "Rev",
      accessorKey: "rev",
    },
    {
      header: "Actions",
      cell: () => {
        return (
          <button className="text-blue-400">
            <Eye className="w-4 h-4" />
          </button>
        );
      },
    },
  ];
};
