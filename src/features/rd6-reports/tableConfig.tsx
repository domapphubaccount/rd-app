import type { ColumnDef } from "@tanstack/react-table";
import type { Rd6Report } from "./types";
import { Eye, History } from "lucide-react";
import ActionsMenu from "./ActionsMenu";

export const Rd6Columns = (): ColumnDef<Rd6Report>[] => {
  return [
    {
      header: "Report Id",
      accessorKey: "id",
    },
    {
      header: "Category",
      accessorKey: "icon_name",
    },
    {
      header: "Stage Id",
      accessorKey: "pStageId",
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
      header: "Survey Resolution No.",
      accessorKey: "servey_resolution_number",
    },
    {
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Designer",
      accessorKey: "designer",
    },
    {
      header: "Inspector",
      accessorKey: "inspector",
    },
    {
      header: "Total Cost",
      accessorKey: "total_cost",
    },
    {
      header: "Status",
      accessorKey: "report_status.status",
      cell: ({ row }) => {
        const { status, color } = row.original.report_status;
        return (
          <span
            className="py-1 px-3 rounded-full w-fit text-sm font-medium"
            style={{ backgroundColor: color, color: "#fff" }}
          >
            {status}
          </span>
        );
      },
    },
    {
      header: "Addendum Status",
      accessorKey: "addendum_status",
    },
    {
      header: "RD3 Notif. Date",
      accessorKey: "rd3_date",
    },
    {
      header: "RD3 Notif. Status",
      accessorKey: "rd3_status",
    },
    {
      header: "Progress Bar",
      accessorKey: "progress_bar",
      cell: ({ row }) => {
        const {
          design_report,
          inspection_report,
          design_status,
          inspection_status,
        } = row.original.progress_bar;

        const progressData = [
          {
            label: "Design Report",
            value: design_report ? "Completed" : "Pending",
          },
          {
            label: "Inspection Report",
            value: inspection_report ? "Completed" : "Pending",
          },
          { label: "Design Status", value: design_status },
          { label: "Inspection Status", value: inspection_status },
        ];

        // ألوان حسب الحالة
        const getColor = (status: string) => {
          switch (status) {
            case "Completed":
              return "bg-green-500";
            case "InProgress":
              return "bg-yellow-500";
            case "Pending":
              return "bg-gray-400";
            case "Failed":
              return "bg-red-500";
            default:
              return "bg-gray-300";
          }
        };

        return (
          <div className="flex w-full h-4 rounded overflow-hidden border border-gray-300">
            {progressData.map((item, idx) => (
              <div
                key={idx}
                className={`relative h-full flex-1 group ${getColor(
                  item.value
                )}`}
              >
                <div
                  title={item.value}
                  className="absolute -top-7 left-1/2 -translate-x-1/2 
                         px-2 py-1 rounded bg-black text-white text-[10px] 
                         opacity-0 group-hover:opacity-100 transition 
                         pointer-events-none whitespace-nowrap"
                >
                  {item.label}: {item.value}
                </div>
              </div>
            ))}
          </div>
        );
      },
    },
    {
      header: "History",
      id: "history",
      cell: () => <History className="w-5 h-5 text-gray-600 cursor-pointer" />,
    },
    {
      header: "Action",
      id: "actions",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <button className="text-blue-400">
            <Eye className="w-4 h-4" />
          </button>
          <ActionsMenu policyNumber={row.original.policy_number} />
        </div>
      ),
    },
  ];
};
