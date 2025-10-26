import type { ColumnDef } from "@tanstack/react-table";
import type { FaqQuestion } from "./types";
import { Eye, Pencil, Trash } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const FAQQuestionColumns = (): ColumnDef<FaqQuestion>[] => {
  return [
    {
      accessorKey: "order",
      header: "Order",
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => {
        const title = row.getValue("title") as string;
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="truncate max-w-[150px] block cursor-pointer">
                  {title}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>{title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      },
    },
    {
      accessorKey: "answer_preview",
      header: "Answer Preview",
      cell: ({ row }) => {
        const answer = row.getValue("answer_preview") as string;
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="truncate max-w-[200px] block cursor-pointer">
                  {answer}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>{answer}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      },
    },
    {
      accessorKey: " ",
      header: "Actions",
      cell: () => {
        return (
          <div className="flex gap-2">
            <Eye className="text-gray-500 cursor-pointer" size={16} />
            <Pencil className="text-gray-500 cursor-pointer" size={16} />
            <Trash className="text-red-500 cursor-pointer" size={16} />
          </div>
        );
      },
    },
  ];
};
