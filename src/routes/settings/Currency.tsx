import DataLoader from "@/components/shared/DataLoader";
import TableHeader from "@/components/shared/setting-features/TableHeader";
import type { Setting } from "@/components/shared/setting-features/types";
import useGetSettings from "@/components/shared/setting-features/useGetSetting";
import TableConfig from "@/features/settings/currency/tableConfig";

export default function Currency() {
  const { isLoading, data } = useGetSettings("currency");

  return (
    <>
      <title>RD App | Currency Settings</title>

      <section className="bg-white border border-[#E5E5E5] pb-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader
              title="Currency"
              description="Set your website's currency by entering the relevant details in the fields below"
            />

            <TableConfig allSettings={(data?.data ?? []) as Setting[]} />
          </div>
        )}
      </section>
    </>
  );
}
