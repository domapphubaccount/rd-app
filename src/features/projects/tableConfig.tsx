import type { ColumnDef } from "@tanstack/react-table";
import type { Project } from "./types";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ConfigProps = {
  selectedIds: string[];
  setSelectedIds: (ids: string[]) => void;
};

export const projectColumns = ({
  selectedIds,
  setSelectedIds,
}: ConfigProps): ColumnDef<Project>[] => {
  return [
    {
      id: "select",
      header: ({ table }) => {
        const allIds = table
          .getCoreRowModel()
          .rows.map((row) => row.original.uuid);
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
        const id = row.original.uuid;
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
      header: "Category",
    },
    {
      accessorKey: "ReferenceNo",
      header: "Reference No.",
    },
    {
      accessorKey: "Date",
      header: "Date",
    },
    {
      accessorKey: "Type",
      header: "Type",
    },
    {
      accessorKey: "Payment",
      header: "Payment",
      cell: (info) => {
        const paid = info.getValue<number>();
        return (
          <span
            className={`px-4 py-1 text-[12px] rounded-full font-bold ${
              paid === 1
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {paid === 1 ? "Paid" : "Unpaid"}
          </span>
        );
      },
    },
    {
      accessorKey: "LastStage",
      header: "Last Stage",
    },
    {
      accessorKey: "Classification",
      header: "Classification",
    },
    {
      accessorKey: "MS",
      header: "MS",
      cell: (info) => {
        const ms = info.getValue<boolean>();
        return <span>{ms ? "MS" : "-"}</span>;
      },
    },
    {
      accessorKey: "uuid",
      header: "Actions",
      cell: (info) => {
        const id = info.getValue<string>();
        return (
          <div className="flex rounded overflow-hidden w-fit">
            <Link
              to={`/projects-list/${id}`}
              className="bg-[#74788d] py-2 px-3 text-white hover:bg-[var(--main)]"
            >
              Details
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center justify-center bg-[#74788d] py-2 px-3 text-white cursor-pointer hover:bg-[var(--main)]">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuRadioItem
                  value="edit"
                  className="pl-2 cursor-pointer"
                >
                  Edit
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="missing"
                  className="pl-2 cursor-pointer"
                >
                  Missing Data
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="classification"
                  className="pl-2 cursor-pointer"
                >
                  Classification
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="report"
                  className="pl-2 cursor-pointer"
                >
                  Create RD0 Report
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="delete"
                  className="pl-2 cursor-pointer text-red-500 hover:text-red-500"
                >
                  Delete
                </DropdownMenuRadioItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];
};
