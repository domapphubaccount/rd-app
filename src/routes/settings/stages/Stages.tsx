import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { StageColumns } from "@/features/settings/stages/tableConfig";
import TableHeader from "@/features/settings/stages/TableHeader";
import type { Stage } from "@/features/settings/stages/types";
import useGetStages from "@/features/settings/stages/useGetStages";

export default function Stages() {
  const { data, isLoading } = useGetStages();

  return (
    <>
      <title>RD App | Stages</title>
      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Stage>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={StageColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
