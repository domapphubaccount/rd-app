import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { SuspendFiltersColumns } from "@/features/settings/suspended-projects/tableConfig";
import TableHeader from "@/features/settings/suspended-projects/TableHeader";
import type { SuspendProject } from "@/features/settings/suspended-projects/types";
import useGetSupProjects from "@/features/settings/suspended-projects/useGetSupProjects";

export default function SuspendedProjects() {
  const { data, isLoading } = useGetSupProjects();

  return (
    <>
      <title>RD App | Suspend Filters</title>
      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<SuspendProject>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={SuspendFiltersColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
