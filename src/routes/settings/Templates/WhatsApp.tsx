import DataTable from "@/components/data-table/DataTable";
import DataLoader from "@/components/shared/DataLoader";
import useGetTemplate from "@/features/settings/templates/useGetTemplate";
import type { Template } from "@/features/settings/templates/types";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { TemplateWhatsAPPColumns } from "@/features/settings/templates/tableconfigWahtsApp";

export default function WhatsApp() {
  const { isLoading, data } = useGetTemplate("whatsapp");
  return (
    <>
      <title>RD App | Template WhatsApp</title>

      <section className="bg-white border border-[#E5E5E5] py-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-end px-4">
              <div className="flex items-center gap-4 text-[14px]">
                <button className="px-2 py-2 bg-[var(--main)] text-white flex items-center gap-2 rounded-md text-[14px]">
                  <SlidersHorizontal className="w-3 h-3" />
                  Filter
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
            <DataTable<Template>
              data={data?.data || []}
              hasPagination={false}
              columns={TemplateWhatsAPPColumns()}
              total={0}
              perPage={0}
            />
          </div>
        )}
      </section>
    </>
  );
}
