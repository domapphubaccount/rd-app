import { useState, useMemo, useEffect } from "react";
import InputField from "@/components/shared/InputField";
import type {
  Setting,
  UpdateSettingPayload,
} from "@/components/shared/setting-features/types";
import SubmitBtn from "@/components/shared/SubmitBtn";

interface Section {
  title: string;
  keys: string[];
}

interface TableConfigProps {
  allSettings: Setting[];
  sections: Section[];
  onSubmit: (payload: UpdateSettingPayload) => void;
  isPending: boolean;
}

const WEEK_DAYS = [
  { id: 7, label: "Sun" },
  { id: 1, label: "Mon" },
  { id: 2, label: "Tue" },
  { id: 3, label: "Wed" },
  { id: 4, label: "Thu" },
  { id: 5, label: "Fri" },
  { id: 6, label: "Sat" },
];

function normalizeValue(v: unknown): string | number | (string | number)[] {
  if (Array.isArray(v)) {
    const nums: number[] = v
      .map((x) => (typeof x === "string" && x.trim() !== "" ? Number(x) : x))
      .map((x) => (typeof x === "number" ? x : Number(x)))
      .filter((n) => !Number.isNaN(n));
    return nums;
  }

  if (typeof v === "string") {
    const n = Number(v);
    return Number.isNaN(n) ? v : n;
  }

  return v as string | number;
}

export default function TableConfig({
  allSettings,
  sections,
  onSubmit,
  isPending,
}: TableConfigProps) {
  const [values, setValues] = useState<
    Record<number, string | number | string[] | number[]>
  >(
    Object.fromEntries(
      allSettings.map((s) => [
        String(s.id),
        normalizeValue(s.value) as string | number | string[] | number[],
      ])
    ) as Record<string, string | number | string[] | number[]>
  );

  useEffect(() => {
    const parsed = Object.fromEntries(
      allSettings.map((s) => [
        String(s.id),
        normalizeValue(s.value) as string | number | string[] | number[],
      ])
    ) as Record<string, string | number | string[] | number[]>;

    setValues(parsed);
  }, [allSettings]);

  const isChanged = useMemo(
    () =>
      allSettings.some(
        (s) =>
          JSON.stringify(values[s.id]) !==
          JSON.stringify(normalizeValue(s.value))
      ),
    [values, allSettings]
  );

  const handleChange = (
    id: number,
    val: string | number | number[] | string[]
  ) => {
    setValues((prev) => ({ ...prev, [id]: val }));
  };

  const toggleWeekDay = (settingId: number, dayId: number) => {
    const current = Array.isArray(values[settingId])
      ? (values[settingId] as number[]).slice()
      : [];
    const exists = current.includes(dayId);
    const updated = exists
      ? current.filter((d) => d !== dayId)
      : [...current, dayId];
    const unique = Array.from(new Set(updated));

    handleChange(settingId, unique);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isChanged) return;

    const payload: UpdateSettingPayload = {
      _method: "PUT",
      settings: allSettings.map((s) => ({
        id: s.id,
        value: values[s.id] as string | number | string[] | number[],
        data_type: s.data_type,
      })),
    };

    onSubmit(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-[#E5E5E5] rounded-[12px] p-6 flex flex-col gap-6"
    >
      {sections.map((section) => {
        const sectionSettings =
          allSettings.filter((item) => section.keys.includes(item.key)) ?? [];

        return (
          <div
            key={section.title}
            className="border-gray-200 p-6 flex flex-col gap-4"
          >
            <h3 className="text-[18px] py-3 font-semibold text-[#1E293B] flex items-center gap-2 mb-4 relative">
              <span className="w-[4px] h-[20px] bg-[var(--main)] rounded-full" />
              {section.title}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 mt-2" />
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {sectionSettings.map((setting) => {
                if (setting.key === "weekend_days") {
                  const raw = values[setting.id];
                  const selectedNums = Array.isArray(raw)
                    ? (raw as number[])
                    : [];

                  const displayDays = selectedNums.filter(
                    (d) => d !== 0 && !Number.isNaN(d)
                  );
                  const uniqueDisplay = Array.from(new Set(displayDays));

                  return (
                    <div
                      key={setting.id}
                      className="col-span-3 flex flex-col gap-3"
                    >
                      <label className="block text-[14px] text-[var(--main)] font-semibold">
                        {setting.slug}
                      </label>

                      <div className="flex gap-3 flex-wrap">
                        {WEEK_DAYS.map((day) => {
                          const isActive = uniqueDisplay.includes(day.id);
                          return (
                            <button
                              type="button"
                              key={day.id}
                              onClick={() => toggleWeekDay(setting.id, day.id)}
                              className={`px-4 py-2 min-w-[50px] rounded-md border text-sm font-medium transition-all duration-200 ${
                                isActive
                                  ? "bg-[var(--main)] text-white border-[var(--main)] shadow-sm"
                                  : "bg-white text-gray-700 border-gray-300 hover:border-[var(--main)]"
                              }`}
                            >
                              {day.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                const val = values[setting.id];
                const inputValue = Array.isArray(val)
                  ? (val as (string | number)[]).join(", ")
                  : (val as string | number | undefined);

                return (
                  <InputField
                    key={setting.id}
                    label={setting.slug}
                    type={setting.data_type === "number" ? "number" : "text"}
                    value={inputValue}
                    onChange={(e) => handleChange(setting.id, e.target.value)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="flex justify-end">
        <SubmitBtn
          text="Save"
          loading={isPending}
          disabled={!isChanged}
          className=" w-[140px] "
        />
      </div>
    </form>
  );
}
