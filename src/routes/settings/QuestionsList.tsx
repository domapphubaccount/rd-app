import DataLoader from "@/components/shared/DataLoader";
import TableHeader from "@/features/settings/questions/TableHeader";
import useGetQuestion from "@/features/settings/questions/useGetQuestion";
import type { Question } from "@/features/settings/questions/types";
import DataTable from "@/components/data-table/DataTable";
import { QuestionsColumns } from "@/features/settings/questions/tableConfig";

export default function QuestionsList() {
  // Replace 1 and "" with the actual id and body value you want to fetch
  const { data, isLoading } = useGetQuestion();

  return (
    <>
      <title>RD App | Section </title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<Question>
              data={data?.data || []}
              total={0}
              perPage={0}
              hasPagination={false}
              columns={QuestionsColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
