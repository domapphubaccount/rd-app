import TableHeader from "@/components/shared/setting-features/TableHeader";
import TableConfig from "@/features/settings/currency/tableConfig";

export default function Currency() {

  return (
    <>
      <title>RD App | Currency Settings</title>

      <section className="bg-white border border-[#E5E5E5] pb-3 rounded-[12px]">
        <div className="flex flex-col gap-4">
          <TableHeader
            title="Currency"
            description="Set your website's currency by entering the relevant details in the fields below"
          />

          <TableConfig />
        </div>
      </section>
    </>
  );
}
