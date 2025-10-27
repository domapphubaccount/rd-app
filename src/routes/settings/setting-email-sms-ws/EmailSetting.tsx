import DataLoader from "@/components/shared/DataLoader";
import TableHeader from "@/features/settings/sitting-email-sms-ws/TableHeader";
import useGetToken from "@/features/settings/sitting-email-sms-ws/useGetToken";

export default function EmailSetting() {
  const { isLoading, token } = useGetToken("email_api_token");

  return (
    <>
      <title>RD App | Email Setting</title>

      <section className="bg-white border pb-3 border-[#E5E5E5] rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader
              tokenValue={token?.value ?? ""}
              title="Mailersend API Token"
              description="Enter your Mailersend API Token below to integrate with our email system"
            />
          </div>
        )}
      </section>
    </>
  );
}
