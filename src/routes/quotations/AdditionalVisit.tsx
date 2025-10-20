import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { AdditionalVisitColumns } from "@/features/quotations/AdditionalVisit/tableConfig";
import TableHeader from "@/features/quotations/AdditionalVisit/TableHeader";
import type { AdditionalVisit } from "@/features/quotations/AdditionalVisit/types";
import useGetAdditionalVisit from "@/features/quotations/AdditionalVisit/useGetAdditionalVisit";

export default function AdditionalVisit() {
  const { data, isLoading } = useGetAdditionalVisit();

  return (
    <>
      <title>RD App | Additional Visit</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader/>

            <DataTable<AdditionalVisit>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={AdditionalVisitColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
