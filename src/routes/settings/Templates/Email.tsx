import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { TemplateColumns } from "@/features/settings/templates/tableConfig";
import TableHeader from "@/features/settings/templates/TableHeader";
import type { Template } from "@/features/settings/templates/types";
import useGetTemplate from "@/features/settings/templates/useGetTemplate";

export default function Email() {
  const { isLoading, data } = useGetTemplate("email");
  return (
    <>
      <title>RD App | Template Email</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Template>
              data={data?.data || []}
              hasPagination={false}
              columns={TemplateColumns()}
              total={0}
              perPage={0}
            />
          </div>
        )}
      </section>
    </>
  );
}
