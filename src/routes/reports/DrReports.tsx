import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { DrColumns } from "@/features/reports/dr-reports/tableConfig";
import type { DrReport } from "@/features/reports/dr-reports/types";
import useGetReports from "@/features/reports/dr-reports/useGetReports";
import TableHeader from "@/features/users/TableHeader";

export default function DrReports() {
  const { data, isLoading } = useGetReports();

  return (
    <>
      <title>RD App | DR Reports</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<DrReport>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={DrColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
