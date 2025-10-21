import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { InspectionColumns } from "@/features/reports/inspection-reports/tableConfig";
import TableHeader from "@/features/reports/inspection-reports/TableHeader";
import type { InspectionReport } from "@/features/reports/inspection-reports/types";
import useGetReports from "@/features/reports/inspection-reports/useGetReports";

export default function InspectionReports() {
  const { data, isLoading } = useGetReports();

  return (
    <>
      <title>RD App | Inspection Reports</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<InspectionReport>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={InspectionColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
