import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { RD7QuotationsColumns } from "@/features/quotations/RD7Quotations/tableConfig";
import TableHeader from "@/features/quotations/RD7Quotations/TableHeader";
import type { Rd7Quotation } from "@/features/quotations/RD7Quotations/types";
import useGetRD7Quotations from "@/features/quotations/RD7Quotations/useGetRD7Quotations";

export default function RD7Quotations() {
  const { data, isLoading } = useGetRD7Quotations();

  return (
    <>
      <title>RD App |RD7 Quotations</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader/>

            <DataTable<Rd7Quotation>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={RD7QuotationsColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
