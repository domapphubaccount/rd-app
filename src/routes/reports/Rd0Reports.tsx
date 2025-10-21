import type { Rd0Report } from "@/features/reports/rd0-reports/types";
import { useState } from "react";
import { Rd0Columns } from "@/features/reports/rd0-reports/tableConfig";
import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import TableHeader from "@/features/reports/rd0-reports/TableHeader";
import useGetReports from "@/features/reports/rd0-reports/useGetReports";

export default function Rd0Reports() {
  const { data, isLoading } = useGetReports();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  return (
    <>
      <title>RD App | RD0 Reports</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />

            <DataTable<Rd0Report>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={Rd0Columns({ selectedIds, setSelectedIds })}
            />
          </div>
        )}
      </section>
    </>
  );
}
