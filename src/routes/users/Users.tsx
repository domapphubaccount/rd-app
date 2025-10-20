import type { User } from "@/features/users/types";
import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import useGetUsers from "@/features/users/useGetUsers";
import userColumns from "@/features/users/tableConfig";
import TableHeader from "@/features/users/TableHeader";

export default function Users() {
  const { data, isLoading } = useGetUsers();

  return (
    <>
      <title>RD App | Users</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<User>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={userColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
