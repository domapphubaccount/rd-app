import TableHeader from "@/features/settings/general-settings/TableHeader";
export default function GeneralSettings() {
  return (
    <>
      <title>RD App | General Settings</title>

      <section className="bg-white border border-[#E5E5E5]  rounded-[12px]">
        <div className="flex flex-col gap-4 p-4 bg-[#eeecec] rounded-t-[12px]">
          <h1 className="text-2xl font-bold">General Settings</h1>
          <p>
            Fill out the general settings below to customize your site's
            functionality and appearance .
          </p>
        </div>
        <TableHeader />
      </section>
    </>
  );
}
