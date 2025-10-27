import InputField from "@/components/shared/InputField";
import SubmitBtn from "@/components/shared/SubmitBtn";

interface TableHeaderProps {
  title: string; 
  description: string; 
  tokenValue: string;
}

export default function TableHeader({
  title,
  description,
  tokenValue = "",
}: TableHeaderProps) {
  return (
    <>
      <div className="bg-[#f6f8fb] px-6 py-4 border-b border-[#eee] rounded-t-[12px]">
        <h2 className="text-[20px] font-semibold text-[#344155]">{title}</h2>
        <p className="text-[#667085] text-[15px] mt-1">{description}</p>
      </div>

      <div className="p-6 flex flex-col gap-6">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <InputField
              label={title}
              placeholder="Enter your token here..."
              id="apiToken"
               value={tokenValue} 
            />
          </div>

            <div className="bg-[#f6f8fb] px-5 py-3 mt-7 rounded-[8px] text-[#344155] font-medium min-w-[140px] text-center">
              Quota : 100
            </div>
        </div>

        <div className="flex justify-end">
          <div className="w-[120px]">
            <SubmitBtn text="Save" />
          </div>
        </div>
      </div>
    </>
  );
}
