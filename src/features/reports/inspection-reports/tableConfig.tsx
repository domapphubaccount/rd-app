import type { ColumnDef } from "@tanstack/react-table";
import type { InspectionReport } from "./types";
import { Eye, FileText, MapPin } from "lucide-react";

export const InspectionColumns = (): ColumnDef<InspectionReport>[] => {
  return [
    {
      header: "Report Id",
      accessorKey: "id",
    },
    {
      header: "Reference No.",
      accessorKey: "reference_number",
    },
    {
      header: "Policy No.",
      accessorKey: "policy_number",
    },
    {
      header: "Request No.",
      accessorKey: "request_number",
    },
    {
      header: "Survey Resolution No",
      accessorKey: "servey_resolution_number",
    },
    {
      header: "Stage",
      accessorKey: "stage",
    },
    {
      header: "R3",
      accessorKey: "r3",
    },
    {
      header: "Result",
      accessorKey: "result",
    },
    {
      header: "Inspector",
      accessorKey: "inspector",
    },
    {
      header: "Date",
      accessorKey: "date",
    },

    {
      header: "Status",
      accessorKey: "report_status.status",
      cell: ({ row }) => {
        const status = row.original.report_status.status;
        const color = row.original.report_status.color;

        return (
          <span
            className="py-1 px-3 rounded-full w-fit flex items-center gap-1 text-sm font-medium text-white"
            style={{ backgroundColor: color }}
          >
            {status}
          </span>
        );
      },
    },
    {
      header: "Area",
      accessorKey: "area",
    },
    {
      header: "Location",
      accessorKey: "location",
      cell: ({ row }) => {
        const location = row.original.location?.accurate_location;

        return (
          <div title={location || "No location available"}>
            <MapPin className="h-5 w-5 text-blue-600 cursor-pointer" />
          </div>
        );
      },
    },

    {
      header: "Files",
      accessorKey: "files",
      cell: ({ row }) => {
        const pdfUrl = row.original.files?.pdf;
        const wordUrl = row.original.files?.word;

        return (
          <div className="flex gap-2">
            {pdfUrl && (
              <a
                href={pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
              >
                <FileText className="w-4 h-4" />
                PDF
              </a>
            )}
            {wordUrl && (
              <a
                href={wordUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 text-sm bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
              >
                <FileText className="w-4 h-4" />
                Word
              </a>
            )}
          </div>
        );
      },
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
