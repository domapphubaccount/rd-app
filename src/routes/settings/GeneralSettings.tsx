import GeneralSettingsForm from "@/features/settings/general-settings/GeneralSettingsForm";

export default function GeneralSettings() {
  return (
    <>
      <title>RD App | General Settings</title>

      <section className="bg-white border border-[#E5E5E5]  rounded-[12px]">
        <div className="flex flex-col gap-3 p-5 bg-gray-100 rounded-t-[12px]">
          <h1 className="text-xl font-semibold">General Settings</h1>
          <p className="text-[14px] text-gray-600">
            Fill out the general settings below to customize your site's
            functionality and appearance .
          </p>
        </div>
        
        <GeneralSettingsForm />
      </section>
    </>
  );
}
