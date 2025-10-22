import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { UserRoleColumns } from "@/features/settings/userRoles/tableConfig";
import TableHeader from "@/features/settings/userRoles/TableHeader";
import type { Role } from "@/features/settings/userRoles/types";
import useGetRole from "@/features/settings/userRoles/useGetRole";

export default function UserRoles() {
  const { isLoading, data } = useGetRole();

  return (
    <>
      <title>RD App | User Roles</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Role>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={UserRoleColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
