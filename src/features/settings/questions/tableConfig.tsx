import type { ColumnDef } from "@tanstack/react-table";
import type { Question } from "./types";
import { Pencil, Trash } from "lucide-react";

export const QuestionsColumns = (): ColumnDef<Question>[] => {
  return [
    {
      accessorKey: "order",
      header: "#",
    },
    {
      accessorKey: "body",
      header: "Question Name",
    },
    {
      accessorKey: " ",
      header: "Actions",
      cell: () => {
        return (
          <div className="flex gap-2">
            <Pencil className="text-gray-500 cursor-pointer" size={16} />
            <Trash className="text-red-500 cursor-pointer" size={16} />
          </div>
        );
      },
    },
  ];
};
