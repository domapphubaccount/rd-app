import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import useGetMissingData from "./useGetMissingData";
import DataLoader from "@/components/shared/DataLoader";
import InputField from "@/components/shared/InputField";
import { missingDataSchema, type MissingDataForm } from "./schema";

export default function TableConfig() {
  const { data, isLoading, isSaving, saveMissingData } = useGetMissingData();

  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty },
  } = useForm<MissingDataForm>({
    resolver: zodResolver(missingDataSchema),
    defaultValues: { missing_data: [], can_add_more: true },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "missing_data",
  });

  useEffect(() => {
    if (data?.data) {
      reset({
        missing_data: data.data.map((d) => ({
          id: d.id,
          name_en: d.name_en,
          name_ar: d.name_ar,
        })),
        can_add_more: data.can_add_more,
      });
    }
  }, [data, reset]);

  const onSubmit = async (values: MissingDataForm) => {
  const payload = {
    _method: "PUT",
    can_add_more: values.can_add_more,
    missing_data: values.missing_data
      .filter(item => !item.id)
      .map(item => ({
        name_en: item.name_en,
        name_ar: item.name_ar,
      })),
  };

  await saveMissingData(payload);
};


  if (isLoading) return <DataLoader />;

  const canAddMore = watch("can_add_more");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="overflow-x-auto">
        <div className="space-y-3">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-12 items-center gap-2 pb-3"
            >
              <div className="col-span-1">EN</div>
              <div className="col-span-4">
                <InputField
                  id={`name_en_${index}`}
                  placeholder="Enter English name"
                  {...register(`missing_data.${index}.name_en`)}
                  error={errors.missing_data?.[index]?.name_en?.message}
                />
              </div>

              <div className="col-span-1 mx-auto">AR</div>

              <div className="col-span-5">
                <InputField
                  id={`name_ar_${index}`}
                  dir="rtl"
                  className="text-right"
                  placeholder="ادخل الاسم بالعربية"
                  {...register(`missing_data.${index}.name_ar`)}
                  error={errors.missing_data?.[index]?.name_ar?.message}
                />
              </div>

              <div className="col-span-1 flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => remove(index)}
                  type="button"
                  className="text-gray-500 hover:text-red-600"
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("can_add_more")} />
          <label className="text-sm text-gray-700">Can add more</label>
        </div>

        <div className="flex items-center gap-2">
          {canAddMore && (
            <Button
              type="button"
              onClick={() =>
                append({ id: undefined, name_en: "", name_ar: "" })
              }
              className="flex items-center gap-2 bg-[var(--main)] hover:bg-[var(--text)]"
            >
              <Plus className="h-4 w-4" /> Add more
            </Button>
          )}
          <Button
            type="submit"
            disabled={!isDirty || isSaving}
            className={`bg-[var(--main)] hover:bg-[var(--text)] ${
              !isDirty || isSaving ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSaving ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>
    </form>
  );
}
