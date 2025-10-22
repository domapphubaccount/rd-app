import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { FAQColumns } from "@/features/settings/FAQ/tableConfig";
import TableHeader from "@/features/settings/FAQ/TableHeader";
import type { FAQ } from "@/features/settings/FAQ/types";
import useGetFAQ from "@/features/settings/FAQ/useGetFAQ";

export default function FAQCategory() {
  const { isLoading, data } = useGetFAQ();

  return (
    <>
      <title>RD App | FAQ Categories</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<FAQ>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={FAQColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
