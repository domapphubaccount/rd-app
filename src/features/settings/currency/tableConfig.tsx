import InputField from "@/components/shared/InputField";
import SelectField from "@/components/shared/SelectField";
import SubmitBtn from "@/components/shared/SubmitBtn";
import useUpdateGeneral from "@/components/shared/setting-features/useUpdateGeneral";
import useGetSettings from "@/components/shared/setting-features/useGetSetting";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  CURRENCY_CODES,
  DECIMAL_SEPARATORS,
  SYMBOL_POSITIONS,
} from "@/utils/constans";
import DataLoader from "@/components/shared/DataLoader";
import type { Setting } from "@/components/shared/setting-features/types";

export default function TableConfig() {
  const { data, isLoading } = useGetSettings("currency");
  const { updateGeneralAction, isPending } = useUpdateGeneral();
  const allSettings = useMemo(
    () => (data?.data ?? []) as Setting[],
    [data?.data]
  );
  const [values, setValues] = useState<Record<number, string | number>>({});

  useEffect(() => {
    if (!allSettings?.length) return;

    const mapped = Object.fromEntries(
      allSettings.map((s) => [s.id, String(s.value ?? "")])
    ) as Record<number, string>;

    queueMicrotask(() => {
      setValues(mapped);
    });
  }, [allSettings]);

  const isChanged = useMemo(
    () => allSettings.some((s) => values[s.id] !== s.value),
    [values, allSettings]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isChanged) {
      toast.info("No changes detected — nothing to update.");
      return;
    }

    const payload = {
      _method: "PUT" as const,
      settings: allSettings.map((s) => ({
        id: s.id,
        value: values[s.id],
        data_type: s.data_type as "string" | "number",
      })),
    };

    updateGeneralAction(payload);
  };

  const currency_code = allSettings.find((s) => s.key === "currency_code");
  const currency_symbol = allSettings.find((s) => s.key === "currency_symbol");
  const decimal_separator = allSettings.find(
    (s) => s.key === "decimal_separator"
  );
  const thousands_separator = allSettings.find(
    (s) => s.key === "thousands_separator"
  );
  const currency_symbol_position = allSettings.find(
    (s) => s.key === "currency_symbol_position"
  );
  if (isLoading || !allSettings.length) return <DataLoader />;

  return (
    <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {currency_code && (
          <SelectField
            label={currency_code.slug}
            id={currency_code.key}
            options={CURRENCY_CODES}
            value={String(values[currency_code.id] ?? "")}
            onChange={(val) =>
              setValues((prev) => ({ ...prev, [currency_code.id]: val }))
            }
          />
        )}

        {currency_symbol && (
          <InputField
            label={currency_symbol.slug}
            id={currency_symbol.key}
            value={values[currency_symbol.id]}
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                [currency_symbol.id]: e.target.value,
              }))
            }
          />
        )}

        {decimal_separator && (
          <SelectField
            label={decimal_separator.slug}
            id={decimal_separator.key}
            options={DECIMAL_SEPARATORS}
            value={String(values[decimal_separator.id] ?? "")}
            onChange={(val) =>
              setValues((prev) => ({
                ...prev,
                [decimal_separator.id]: val,
              }))
            }
          />
        )}

        {thousands_separator && (
          <SelectField
            label={thousands_separator.slug}
            id={thousands_separator.key}
            options={DECIMAL_SEPARATORS}
            value={String(values[thousands_separator.id] ?? "")}
            onChange={(val) =>
              setValues((prev) => ({
                ...prev,
                [thousands_separator.id]: val,
              }))
            }
          />
        )}

        {currency_symbol_position && (
          <SelectField
            label={currency_symbol_position.slug}
            id={currency_symbol_position.key}
            options={SYMBOL_POSITIONS}
            value={String(values[currency_symbol_position.id] ?? "")}
            onChange={(val) =>
              setValues((prev) => ({
                ...prev,
                [currency_symbol_position.id]: val,
              }))
            }
          />
        )}
      </div>
      <div className="flex justify-end">
        <SubmitBtn
          text="Save"
          loading={isPending}
          className=" w-[140px] "
        />
      </div>
    </form>
  );
}
