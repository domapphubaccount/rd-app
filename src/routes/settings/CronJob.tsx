import DataLoader from "@/components/shared/DataLoader";
import InputField from "@/components/shared/InputField";
import TableHeader from "@/components/shared/setting-features/TableHeader";
import useGetSettings from "@/components/shared/setting-features/useGetSetting";

export default function CronJob() {
  const { isLoading, data } = useGetSettings("cron_job");

  const setting = data?.data?.[0];


  return (
    <>
      <title>RD App | Cron Job Settings</title>

      <section className="bg-white border border-[#E5E5E5] pb-3 rounded-[12px]">
        <div className="flex flex-col gap-4">
          <TableHeader
            title="Cron Job Settings"
            description="Configure your application's Cron Job command below."
          />
          {isLoading || !setting? (
            <DataLoader />
          ) : (
            <div className="p-6">
              <InputField
                label="Cron Job Command"
                id={setting.key}
                type="text"
                value={
                  Array.isArray(setting.value)
                    ? setting.value.join(", ")
                    : String(setting.value ?? "")
                }
                readOnly
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
