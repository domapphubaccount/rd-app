import type { Project } from "@/features/projects/types";
import { useState } from "react";
import { projectColumns } from "@/features/projects/tableConfig";
import DataTable from "@/components/data-table/DataTable";
import useGetProjects from "@/features/projects/useGetProjects";
import DataLoader from "@/components/shared/DataLoader";
import TableHeader from "@/features/projects/TableHeader";

export default function ProjectsList() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { data, isLoading } = useGetProjects();

  return (
    <>
      <title>RD App | Project List</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />

            <DataTable<Project>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={projectColumns({ selectedIds, setSelectedIds })}
            />
          </div>
        )}
      </section>
    </>
  );
}
