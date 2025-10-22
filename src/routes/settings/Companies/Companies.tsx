import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { CompanyColumns } from "@/features/settings/companies/tableConfig";
import TableHeader from "@/features/settings/companies/TableHeader";
import type { Company } from "@/features/settings/companies/types";
import useGetCompanies from "@/features/settings/companies/useGetCompanies";

export default function Companies() {
  const { isLoading, data } = useGetCompanies();
  return (
    <>
      <title>RD App | Companies </title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Company>
              data={data?.data || []}
              hasPagination={false}
              columns={CompanyColumns()}
              total={0}
              perPage={0}
            />
          </div>
        )}
      </section>
    </>
  );
}
