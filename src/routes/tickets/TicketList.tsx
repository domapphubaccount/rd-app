import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import TableHeader from "@/features/tickets/TableHeader";
import { TicketColumns } from "@/features/tickets/tableConfig";
import useGetTickets from "@/features/tickets/useGetTickets";
import type { Ticket } from "@/features/tickets/types";

export default function TicketList() {
  const { data, isLoading } = useGetTickets();

  return (
    <>
      <title>RD App | Tickets </title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader/>

            <DataTable<Ticket>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={TicketColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
