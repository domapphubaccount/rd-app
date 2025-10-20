import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { Rd1Columns } from "@/features/rd1-reports/tableConfig";
import TableHeader from "@/features/rd1-reports/TableHeader";
import type { Rd1Report } from "@/features/rd1-reports/types";
import useGetReports from "@/features/rd1-reports/useGetReports";

export default function Rd1Reports() {
  const { data, isLoading } = useGetReports();

  return (
    <>
      <title>RD App | RD1 Reports</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Rd1Report>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={Rd1Columns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
