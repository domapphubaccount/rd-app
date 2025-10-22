import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { TaxRateColumns } from "@/features/settings/tax-rates/tableConfig";
import TableHeader from "@/features/settings/tax-rates/TableHeader";
import type { TaxRate } from "@/features/settings/tax-rates/types";
import useGetTaxes from "@/features/settings/tax-rates/useGetTaxses";

export default function TaxRates() {
  const { data, isLoading } = useGetTaxes();

  return (
    <>
      <title>RD App | Tax Rates</title>
      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<TaxRate>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={TaxRateColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
