import DataLoader from "@/components/shared/DataLoader";
import TableHeader from "@/features/reports/rd2-reports/TableHeader";
import useGetReports from "@/features/reports/rd2-reports/useGetReports";
import type { Rd2Report } from "../../features/reports/rd2-reports/types";
import DataTable from "@/components/data-table/DataTable";
import { Rd2Columns } from "@/features/reports/rd2-reports/tableConfig";

export default function Rd2Reports() {
  const { data, isLoading } = useGetReports();

  return (
    <>
      <title>RD App | RD2 Reports</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Rd2Report>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={Rd2Columns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
