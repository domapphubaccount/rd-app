import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { Rd3Columns } from "@/features/rd3-reports/tableConfig";
import TableHeader from "@/features/rd3-reports/TableHeader";
import type { Rd3Report } from "@/features/rd3-reports/types";
import useGetReports from "@/features/rd3-reports/useGetReports";

export default function Rd3Reports() {
    const { data, isLoading } = useGetReports();
  
  return (
    <>
      <title>RD App | RD3 Reports</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Rd3Report>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={Rd3Columns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
