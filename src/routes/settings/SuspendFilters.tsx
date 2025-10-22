import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { SuspendFiltersColumns } from "@/features/settings/suspend-filters/tableConfig";
import TableHeader from "@/features/settings/suspend-filters/TableHeader";
import type { SuspendProject } from "@/features/settings/suspend-filters/types";
import useGetSupsendP from "@/features/settings/suspend-filters/useGetSupsendP";

export default function SuspendFilters() {
  const { data, isLoading } = useGetSupsendP();

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
