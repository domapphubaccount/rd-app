import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import type { Setting } from "@/components/shared/setting-features/types";

export const ModulesColumns = ( selected: Record<number, boolean>,
  onToggle: (id: number) => void): ColumnDef<Setting>[] => {
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
