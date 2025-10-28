import TableHeader from "@/components/shared/setting-features/TableHeader";
import GeneralSettingsForm from "@/features/settings/general-settings/GeneralSettingsForm";

export default function GeneralSettings() {
  return (
    <>
      <title>RD App | General Settings</title>

      <section className="bg-white border border-[#E5E5E5] pb-3 rounded-[12px]">
        <div className="flex flex-col gap-4">
          <TableHeader
            title="General Settings"
            description="Fill out the general settings below to customize your
      site's functionality and appearance ."
          />

          <GeneralSettingsForm />
        </div>
      </section>
    </>
  );
}
