import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { ProjectQuotationsColumns } from "@/features/quotations/ProjectQuotations/tableConfig";
import TableHeader from "@/features/quotations/ProjectQuotations/TableHeader";
import type { ProjectQuotations } from "@/features/quotations/ProjectQuotations/types";
import useGetProjectQuotations from "@/features/quotations/ProjectQuotations/useGetProjectQuotations";

export default function ProjectQuotations() {
  const { isLoading, data } = useGetProjectQuotations();

  return (
    <>
      <title>RD App | Project Quotations</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<ProjectQuotations>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={ProjectQuotationsColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
