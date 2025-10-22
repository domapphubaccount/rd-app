import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import { ModulesColumns } from "@/features/settings/modules/tableConfig";
import TableHeader from "@/features/settings/modules/TableHeader";
import type { Modules } from "@/features/settings/modules/types";
import useGetModule from "@/features/settings/modules/useGetModule";
import { useState } from "react";

export default function Modules() {
  const { isLoading, data } = useGetModule();
  const [selected, setSelected] = useState<Record<number, boolean>>({});

  const handleToggle = (id: number) => {
    setSelected((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const anySelected = Object.values(selected).some(Boolean);

  return (
    <>
      <title>RD App | Modules Settings</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader disabled={!anySelected} />

            <DataTable<Modules>
              data={data?.data || []}
              columns={ModulesColumns(selected, handleToggle)}
              hasPagination={false}
            />
          </div>
        )}
      </section>
    </>
  );
}
