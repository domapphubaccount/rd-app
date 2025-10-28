import DataLoader from "@/components/shared/DataLoader";
import TableHeader from "@/features/settings/sitting-email-sms-ws/TableHeader";
import useGetToken from "@/features/settings/sitting-email-sms-ws/useGetToken";

export default function WhatsAppSetting() {
  const { isLoading, token } = useGetToken("whatsapp_api_token");

  return (
    <>
      <title>RD App | WhatsApp Setting</title>

      <section className="bg-white border border-[#E5E5E5] pb-3  rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4 ">
            <TableHeader
              tokenId={token?.id ?? 0}
              dataType={token?.data_type ?? "string"}
              tokenValue={token?.value ?? ""}
              title="ChatPlus API Token"
              description="Enter your ChatPlus API Token below to integrate with our email system"
            />
          </div>
        )}
      </section>
    </>
  );
}
