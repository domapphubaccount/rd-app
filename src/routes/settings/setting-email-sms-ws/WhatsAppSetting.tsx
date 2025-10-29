import DataLoader from "@/components/shared/DataLoader";
import TableHeader from "@/components/shared/setting-features/TableHeader";
import useGetSettings from "@/components/shared/setting-features/useGetSetting";
import TableConfig from "@/features/settings/sitting-email-sms-ws/tableConfig";

export default function WhatsAppSetting() {
  const { isLoading, token } = useGetSettings("token","whatsapp_api_token");

  return (
    <>
      <title>RD App | WhatsApp Setting</title>

      <section className="bg-white border border-[#E5E5E5] pb-3  rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4 ">
            <TableHeader
              title="ChatPlus API Token"
              description="Enter your ChatPlus API Token below to integrate with our email system"
            />
            <TableConfig
              tokenId={token?.id ?? 0}
              dataType={token?.data_type ?? "string"}
              tokenValue={String(token?.value ?? "")} 
              title="Mailersend API Token"
            />
          </div>
        )}
      </section>
    </>
  );
}
