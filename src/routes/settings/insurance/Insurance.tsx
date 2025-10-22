import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { insuranceColumns } from "@/features/settings/insurance/tableConfig";
import useGetInsurance from "@/features/settings/insurance/useGetInsurance";
import type { Insurance } from "@/features/settings/insurance/types";
import TableHeader from "@/features/settings/insurance/TableHeader";
export default function Insurance() {
  const { data, isLoading } = useGetInsurance();

  return (
    <>
      <title>RD App | Tickets </title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Insurance>
              data={data?.data || []}
              total={0}
              perPage={0}
              hasPagination={false}
              columns={insuranceColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
