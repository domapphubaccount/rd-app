import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import {MessageColumns } from "@/features/settings/log-queue/tableConfig";
import TableHeader from "@/features/settings/log-queue/TableHeader";
import type { Message } from "@/features/settings/log-queue/types";
import useGetMessage from "@/features/settings/log-queue/useGetMessage";
import { useState } from "react";

export default function EmailQueue() {
  const { isLoading, data } = useGetMessage("queue","email");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  return (
    <>
      <title>RD App | Email Queue</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader
               selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />

            <DataTable<Message>
              data={data?.data || []}
              hasPagination={false}
              columns={MessageColumns(selectedIds, setSelectedIds)}
              total={0}
              perPage={0}
            />
          </div>
        )}
      </section>
    </>
  );
}
