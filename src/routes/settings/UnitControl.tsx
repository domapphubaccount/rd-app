import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { UnitControlColumns } from "@/features/settings/unitControl/tableConfig";
import TableHeader from "@/features/settings/unitControl/TableHeader";
import type { UnitCategory } from "@/features/settings/unitControl/types";
import useGetUnitControl from "@/features/settings/unitControl/useGetUnitControl";

export default function UnitControl() {
  const { isLoading, data } = useGetUnitControl();

  return (
    <>
      <title>RD App | Unit Control</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<UnitCategory>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={UnitControlColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
