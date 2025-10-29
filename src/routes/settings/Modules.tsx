import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import type { Setting } from "@/components/shared/setting-features/types";
import useGetSettings from "@/components/shared/setting-features/useGetSetting";
import { ModulesColumns } from "@/features/settings/modules/tableConfig";
import TableHeader from "@/features/settings/modules/TableHeader";
import { useState } from "react";

export default function Modules() {
  const { isLoading, data } = useGetSettings("modules");
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

            <DataTable<Setting>
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
