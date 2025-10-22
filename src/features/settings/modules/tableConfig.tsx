import type { ColumnDef } from "@tanstack/react-table";
import type { Modules } from "./types";
import { Checkbox } from "@/components/ui/checkbox";

export const ModulesColumns = ( selected: Record<number, boolean>,
  onToggle: (id: number) => void): ColumnDef<Modules>[] => {
  return [
    {
      header: "#",
      cell: (info) => info.row.index + 1,
    },
    {
      header: "Modules",
      accessorKey: "slug",
    },

    {
      header: "Enabled",
      cell: ({ row }) => {
        const module = row.original;
        const checked = !!selected[module.id];

        return (
          <Checkbox
            checked={checked}
            onCheckedChange={() => onToggle(module.id)}
          />
        );
      },
    },
  ];
};
