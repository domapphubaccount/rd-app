import type { CostEstimation } from "@/features/cost-estimation/types";
import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import useGetEstimations from "@/features/cost-estimation/useGetEstimations";
import estimationColumns from "@/features/cost-estimation/tableConfig";
import TableHeader from "@/features/cost-estimation/TableHeader";

export default function CostEstimation() {
  const { isLoading, data } = useGetEstimations();

  return (
    <>
      <title>RD App | Cost Estimation</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<CostEstimation>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={estimationColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
