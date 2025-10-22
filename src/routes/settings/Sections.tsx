import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { SectionColumns } from "@/features/settings/sections/tableConfig";
import type { Section } from "@/features/settings/sections/types";
import useGetSections from "@/features/settings/sections/useGetSections";
import TableHeader from "@/features/users/TableHeader";

export default function Sections() {
  const { data, isLoading } = useGetSections();

  return (
    <>
      <title>RD App | Tickets </title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Section>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={SectionColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
