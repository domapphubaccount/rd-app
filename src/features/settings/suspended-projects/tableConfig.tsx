import type { ColumnDef } from "@tanstack/react-table";
import type { SuspendProject } from "./types";

export const SuspendFiltersColumns = (): ColumnDef<SuspendProject>[] => {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name.",
    },
    {
      accessorKey: "rate",
      header: "Rate",
      cell: (info) => {
        const rate = info.getValue() as number;
        return <span className="font-semibold">{rate}%</span>;
      },
    },
    {
      accessorKey: "User.name",
      header: "Created By.",
    },

    {
      accessorKey: "active",
      header: "Status",
      cell: (info) => {
        const status = info.getValue();
        return (
          <span
            className={`px-4 py-1 text-[12px] rounded-full font-bold ${
              status
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {status ? "Enabeld" : "Disabled"}
          </span>
        );
      },
    },
    {
      accessorKey: "id",
      header: "Actions",
      cell: () => {
        return (
          <div className="flex items-center gap-3">
            <button className="text-white bg-gray-400 rounded-[12px] px-4 py-2">
              {" "}
              Action
            </button>
          </div>
        );
      },
    },
  ];
};
