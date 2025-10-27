import type { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import type { Message } from "./types";
import { Checkbox } from "@/components/ui/checkbox";

export const MessageColumns = (
  selectedIds: number[],
  setSelectedIds: (ids: number[]) => void
): ColumnDef<Message>[] => {
  return [
    {
      id: "select",
      header: ({ table }) => {
        const allIds = table
          .getCoreRowModel()
          .rows.map((row) => row.original.id);
        const allSelected = allIds.every((id) => selectedIds.includes(id));

        return (
          <Checkbox
            checked={allSelected}
            onCheckedChange={(checked) => {
              if (checked) {
                setSelectedIds([...new Set([...selectedIds, ...allIds])]);
              } else {
                setSelectedIds(
                  selectedIds.filter((id) => !allIds.includes(id))
                );
              }
            }}
          />
        );
      },
      cell: ({ row }) => {
        const id = row.original.id;
        const isChecked = selectedIds.includes(id);

        return (
          <Checkbox
            checked={isChecked}
            onCheckedChange={(checked) => {
              if (checked) {
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
      header: "ID",
      accessorKey: "id",
    },

    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "to",
      header: "To",
    },
    {
      accessorKey: "subject",
      header: "Subject",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const status = info.getValue<string>();

        const statusMap: Record<string, string> = {
          New: "bg-[#DAFFF2] text-[#5DC486]", 
          Processing: "bg-[#E9E9FF] text-[#5A57E5]",
          Sent: "bg-[#FFF3E7] text-[#F49A47]", 
        };

        const dotMap: Record<string, string> = {
          New: "bg-[#5DC486]", 
          Processing: "bg-[#5A57E5]", 
          Sent: "bg-[#F49A47]", 
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
    {
      accessorKey: "",
      header: "Actions",
      cell: () => {
        return (
          <div className="flex gap-4">
            <Trash size={16} className="text-red-500 cursor-pointer" />
          </div>
        );
      },
    },
  ];
};
