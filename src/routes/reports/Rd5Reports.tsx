import DataLoader from "@/components/shared/DataLoader";
import useGetReports from "@/features/rd5-reports/useGetReports";
import TableHeader from "@/features/users/TableHeader";
import type { Rd5Report } from "@/features/rd3-reports/types";
import DataTable from "@/components/data-table/DataTable";
import { Rd5Columns } from "@/features/rd5-reports/tableConfig";

export default function Rd5Reports() {
  const { data, isLoading } = useGetReports();

  return (
    <>
      <title>RD App | RD5 Reports</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Rd5Report>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={Rd5Columns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
