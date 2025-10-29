import type { FilterOption } from "@/components/filter/types";
import { useFilterStore } from "@/components/filter/store";
import { ChevronDown, Plus, SlidersHorizontal } from "lucide-react";
import { TICKET_TYPE } from "@/utils/constans";
import useGetTicketUsers from "@/hooks/useGetTicketUsers";
import useGetRD5ReportStatus from "@/hooks/useGetRD5ReportStatus";
import useGetAllDegrees from "@/hooks/useGetTicketDegrees";
import useGetAllUsers from "@/hooks/useGetAllUsers";
import useGetAllstages from "@/hooks/useGetStages";
import TimeRange from "@/components/shared/TimeRange";

export default function TableHeader() {
  const { openFilter } = useFilterStore();

  const { data } = useGetAllUsers();
  const { data: report } = useGetRD5ReportStatus();
  const { data: degrees } = useGetAllDegrees();
  const { data: tickets } = useGetTicketUsers();
  const { data: stages } = useGetAllstages();

  const handleOpen = () => {
    const filterOptions: FilterOption[] = [
      {
        name: "ticket_id",
        type: "number",
        label: "Tickets ID",
        placeholder: "Enter a Ticket Id",
      },
      {
        name: "ticket_code",
        type: "number",
        label: "Tickets Code",
        placeholder: "Enter numbers &press enter",
      },
      {
        name: "reference_number",
        type: "number",
        label: "Reference No",
        placeholder: "Enter numbers &press enter",
      },
      {
        name: "created_by",
        type: "select",
        label: "Created By",
        options:
          data?.data?.map((user) => ({
            label: user.name,
            value: user.uuid.toString(),
          })) || [],
      },
      {
        name: "updated_by",
        type: "select",
        label: "Updated By",
        options:
          data?.data?.map((user) => ({
            label: user.name,
            value: user.uuid.toString(),
          })) || [],
      },
      {
        name: "rd5_report_status",
        type: "select",
        label: "Rd5 Status",
        options:
          report?.data?.map((s) => ({
            label: s.name,
            value: s.id.toString(),
          })) || [],
      },
      {
        name: "ticket_degree",
        type: "select",
        label: "Degree",
        options:
          degrees?.data?.map((d) => ({
            label: d.name,
            value: d.id.toString(),
          })) || [],
      },
      {
        name: "specialist",
        type: "select",
        label: "Tickets Users Transfered",
        options:
          tickets?.data?.map((t) => ({
            label: t.name,
            value: t.id.toString(),
          })) || [],
      },
      {
        name: "ticket_type",
        type: "select",
        label: "Ticket Type",
        options:
          TICKET_TYPE.map((d) => ({
            label: d.label,
            value: d.value,
          })) || [],
      },
      {
        name: "stage",
        type: "select",
        label: "Ins Stage",
        options:
          stages?.data?.map((stage) => ({
            label: stage.name,
            value: stage.id.toString(),
          })) || [],
      },
    ];
    openFilter(filterOptions, "tickets");
  };
  return (
    <div className="flex items-center justify-between px-4">
      <TimeRange />

      <div className="flex items-center gap-4 text-[14px]">
        <button className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]">
          <Plus className="w-4 h-4" />
          New Ticket
        </button>

        <button
          onClick={handleOpen}
          className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]"
        >
          <SlidersHorizontal width={16} />
          Filter
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
