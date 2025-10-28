import DataLoader from "@/components/shared/DataLoader";
import TableConfig from "@/features/settings/sitting-email-sms-ws/tableConfig";
import TableHeader from "@/components/shared/setting-features/TableHeader";
import useGetSettings from "@/components/shared/setting-features/useGetSetting";

export default function EmailSetting() {
  const { isLoading, token } = useGetSettings("token","email_api_token");

  return (
    <>
      <title>RD App | Email Setting</title>

      <section className="bg-white border pb-3 border-[#E5E5E5] rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader
              title="Mailersend API Token"
              description="Enter your Mailersend API Token below to integrate with our email system"
            />

            <TableConfig
              tokenId={token?.id ?? 0}
              dataType={token?.data_type ?? "string"}
              tokenValue={token?.value ?? ""}
              title="Mailersend API Token"
            />
          </div>
        )}
      </section>
    </>
  );
}
