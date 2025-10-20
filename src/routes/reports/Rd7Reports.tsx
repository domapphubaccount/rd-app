import useGetReports from "@/features/rd7-reports/useGetReports";
import type { Rd7Report } from "@/features/rd7-reports/types";
import { Rd7Columns } from "@/features/rd7-reports/tableConfig";
import TableHeader from "@/features/rd7-reports/TableHeader";
import DataLoader from "@/components/shared/DataLoader";
import DataTable from "@/components/data-table/DataTable";

export default function Rd7Reports() {
  const { data, isLoading } = useGetReports();

  return (
    <>
      <title>RD App | RD7 Reports</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Rd7Report>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={Rd7Columns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
