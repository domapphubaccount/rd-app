import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import type { VisitRequest } from "@/features/visits/types";
import { visitColumns } from "@/features/visits/tableConfig";
import useGetVisits from "@/features/visits/useGetVisits";
import TableHeader from "@/features/visits/TableHeader";

export default function Visit() {
  const { data, isLoading } = useGetVisits();

  return (
    <>
      <title>RD App | Visits</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<VisitRequest>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={visitColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
