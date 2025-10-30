import TableHeader from "@/components/shared/setting-features/TableHeader";
import TableConfig from "@/features/settings/missing-data/tableConfig";


export default function MissingData() {

  return (
    <>
      <title>RD App | Missing Data</title>

      <section className="bg-white border border-[#E5E5E5] pb-3 rounded-[12px]">
        <div className="flex flex-col gap-4">
          <TableHeader
            title="Missing Data"
            description="Set your missing data by entering the relevant details in the fields below"
          />

          <TableConfig />
        </div>
      </section>
    </>
  );
}
