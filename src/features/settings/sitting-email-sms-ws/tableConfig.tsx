import InputField from "@/components/shared/InputField";
import useUpdateGeneral from "@/components/shared/setting-features/useUpdateGeneral";
import { useMemo, useState } from "react";

interface TableConfigProps {
  title: string;
  tokenValue: string;
  tokenId: number;
  dataType: string;
}

export default function TableConfig({
  title,
  tokenValue,
  tokenId,
  dataType,
}: TableConfigProps) {
  const [value, setValue] = useState(tokenValue);
  const { updateGeneralAction, isPending } = useUpdateGeneral();
  const isChanged = useMemo(() => value !== tokenValue, [value, tokenValue]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isChanged) return;

    const payload = {
      _method: "PUT" as const,
      settings: [
        {
          id: tokenId,
          value,
          data_type: dataType as "number" | "select" | "text",
        },
      ],
    };

    updateGeneralAction(payload);
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <form
        onSubmit={(e) => isChanged && handleSubmit(e)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <InputField
              label={title}
              placeholder="Enter your token here..."
              id="apiToken"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>

          <div className="bg-[#f6f8fb] px-5 py-3 mt-7 rounded-[8px] text-[#344155] font-medium min-w-[140px] text-center">
            Quota : 100
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isChanged || isPending}
            className={`px-4 py-2 bg-[var(--main)] text-white flex items-center 
              justify-center gap-2 rounded-md text-[14px] transition-all duration-200
              ${
                !isChanged || isPending
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
          >
            {isPending ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
