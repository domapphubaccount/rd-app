import DataTable from "@/components/data-table/DataTable";
import TableHeader from "@/features/end-user/TableHeader";
import useGetEnduser from "@/features/end-user/useGetEnduser";
import DataLoader from "@/components/shared/DataLoader";
import { EndUserColumns } from "@/features/end-user/tableConfig";

export default function Enduser() {
  const { data, isLoading } = useGetEnduser();
  return (
    <>
      <title>RD App | End Users </title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={EndUserColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
