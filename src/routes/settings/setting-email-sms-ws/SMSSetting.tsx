import DataLoader from "@/components/shared/DataLoader";
import TableHeader from "@/features/settings/sitting-email-sms-ws/TableHeader";
import useGetToken from "@/features/settings/sitting-email-sms-ws/useGetToken";

export default function SMSSetting() {
  const { isLoading, token } = useGetToken("sms_api_token");

  return (
    <>
      <title>RD App | SMS Setting</title>

      <section className="bg-white border border-[#E5E5E5] pb-3 rounded-[12px]">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="flex flex-col gap-4">
            <TableHeader
              tokenId={token?.id ?? 0}
              dataType={token?.data_type ?? "string"}
              tokenValue={token?.value ?? ""}
              title="Msegat API Token"
              description="Enter your Msegat API Token below to integrate with our email system"
            />
          </div>
        )}
      </section>
    </>
  );
}
