import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { WeirdPeopleColumns } from "@/features/settings/weird-people/tableConfig";
import TableHeader from "@/features/settings/weird-people/TableHeader";
import type { WeirdPeople } from "@/features/settings/weird-people/types";
import useGetWeirdPeople from "@/features/settings/weird-people/useGetWeirdPeople";

export default function WeirdPeople() {
  const { data, isLoading } = useGetWeirdPeople();

  return (
    <>
      <title>RD App | Weird People</title>
      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<WeirdPeople>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={WeirdPeopleColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
