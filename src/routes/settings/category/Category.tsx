import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { CategoriesColumns } from "@/features/settings/catrgories/tableConfig";
import TableHeader from "@/features/settings/catrgories/TableHeader";
import type { Category } from "@/features/settings/catrgories/types";
import useGetCategory from "@/features/settings/catrgories/useGetCategory";

export default function Category() {
 const { data, isLoading } = useGetCategory();

  return (
    <>
      <title>RD App | Category</title>
      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Category>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={CategoriesColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
