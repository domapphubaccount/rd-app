import DataLoader from "@/components/shared/DataLoader";
import { useGetFaqQuestions } from "@/features/settings/FAQ Questions/useGetFaqQuestions";
import DataTable from "@/components/data-table/DataTable";
import type { FaqQuestion } from "@/features/settings/FAQ Questions/types";
import { FAQQuestionColumns } from "@/features/settings/FAQ Questions/tableConfig";
import TableHeader from "@/features/settings/FAQ Questions/TableHeader";

export default function FAQQuestions() {
  const { isLoading, data } = useGetFaqQuestions();

  return (
    <>
      <title>RD App | FAQ Questions</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader />

            <DataTable<FaqQuestion>
              data={data?.data || []}
              total={data?.meta.total || 0}
              perPage={data?.meta.per_page || 10}
              hasPagination={data?.meta.total !== 0}
              columns={FAQQuestionColumns()}
            />
          </div>
        )}
      </section>
    </>
  );
}
