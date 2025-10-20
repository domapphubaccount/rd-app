import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { Rd6Columns } from "@/features/rd6-reports/tableConfig";
import type { Rd6Report } from "@/features/rd6-reports/types";

import TableHeader from "@/features/rd6-reports/TableHeader";
import useGetReports from "@/features/rd6-reports/useGetReports";

export default function Rd6Reports() {
  const { data, isLoading } = useGetReports();

  return (
    <>
      <title>RD App | RD6 Reports</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Rd6Report>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={Rd6Columns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
