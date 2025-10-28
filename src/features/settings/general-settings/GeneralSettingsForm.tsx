import {
  CLOSE_MODAL,
  DATE_FORMATS,
  TIME_ZONES,
  LEFT_MENU_POSITION,
  DATE_SELECTOR_FORMAT,
  SHOW_SESSION_TIMEOUT_POPUP,
} from "@/utils/constans";
import { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generalSettingsSchema, type GeneralSettingsData } from "./schema";
import { toast } from "sonner";
import useGetGeneral from "./useGetGeneral";
import useUpdateGeneral from "./useUpdateGeneral";
import DataLoader from "@/components/shared/DataLoader";
import InputField from "@/components/shared/InputField";
import SelectField from "@/components/shared/SelectField";
import SubmitBtn from "@/components/shared/SubmitBtn";

export default function GeneralSettingsForm() {
  const { data, isLoading } = useGetGeneral();
  const { updateGeneralAction, isPending } = useUpdateGeneral();
  const originalValuesRef = useRef<Record<string, string>>({});

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<GeneralSettingsData>({
    resolver: zodResolver(generalSettingsSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (!data?.data?.length) return;

    const defaults: Record<string, string> = {};
    data.data.forEach((setting) => {
      defaults[setting.key] = setting.value?.toString() ?? "";
    });

    queueMicrotask(() => {
      reset(defaults);
      originalValuesRef.current = defaults;
    });
  }, [data, reset]);

  const onSubmit = (formValues: GeneralSettingsData) => {
    if (!data?.data) return;

    const hasChanges = Object.keys(formValues).some(
      (key) =>
        formValues[key as keyof GeneralSettingsData]?.toString() !==
        originalValuesRef.current[key]
    );

    if (!hasChanges) {
      toast.info("No changes detected — nothing to update.");
      return;
    }

    const payload = {
      settings: data.data.map((setting) => {
        const rawValue = formValues[setting.key as keyof GeneralSettingsData];
        const value =
          setting.data_type === "number" ? Number(rawValue) || 0 : rawValue ?? "";

        return {
          id: setting.id,
          value,
          data_type:
            setting.data_type === "string"
              ? "select"
              : (setting.data_type as "number" | "text" | "select"),
        };
      }),
      _method: "PUT" as const,
    };

    updateGeneralAction(payload);
  };

  if (isLoading || !data?.data?.length) return <DataLoader />;

  return (
    <form
      key={data?.data ? "form-loaded" : "form-loading"}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-6"
    >
      <div className="grid grid-cols-3 gap-5">
        <InputField
          label="Product Purchase Code"
          id="product_purchase_code"
          type="number"
          {...register("product_purchase_code")}
          error={errors.product_purchase_code?.message}
        />

        <Controller
          name="time_zone"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Time Zone"
              id="time_zone"
              placeholder="Europe/Amsterdam"
              options={TIME_ZONES}
              value={field.value ?? ""}
              onChange={field.onChange}
              error={errors.time_zone?.message}
            />
          )}
        />

        <Controller
          name="date_format"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Date Format"
              id="date_format"
              placeholder="m-d-y"
              options={DATE_FORMATS}
              value={field.value ?? ""}
              onChange={field.onChange}
              error={errors.date_format?.message}
            />
          )}
        />

        <Controller
          name="date_selector_format"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Date Selector Format"
              id="date_selector_format"
              placeholder="dd-mm-yy"
              options={DATE_SELECTOR_FORMAT}
              value={field.value ?? ""}
              onChange={field.onChange}
              error={errors.date_selector_format?.message}
            />
          )}
        />

        <Controller
          name="left_menu_position"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Left Menu Position - Default Position"
              id="left_menu_position"
              placeholder="Collapsed"
              options={LEFT_MENU_POSITION}
              value={field.value ?? ""}
              onChange={field.onChange}
              error={errors.left_menu_position?.message}
            />
          )}
        />

        <Controller
          name="stats_panel_default_position"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Stats Panel - Default Position"
              id="stats_panel_default_position"
              placeholder="Expanded"
              options={LEFT_MENU_POSITION}
              value={field.value ?? ""}
              onChange={field.onChange}
              error={errors.stats_panel_default_position?.message}
            />
          )}
        />

        <Controller
          name="close_modal"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Close Modal Window On Page Click"
              id="close_modal"
              placeholder="No"
              options={CLOSE_MODAL}
              value={field.value ?? ""}
              onChange={field.onChange}
              error={errors.close_modal?.message}
            />
          )}
        />

        <Controller
          name="show_session_timeout_popup"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Setting Session Timeout Popup"
              id="show_session_timeout_popup"
              placeholder="No"
              options={SHOW_SESSION_TIMEOUT_POPUP}
              value={field.value ?? ""}
              onChange={field.onChange}
              error={errors.show_session_timeout_popup?.message}
            />
          )}
        />

        <InputField
          label="Pagination Limits"
          id="pagination_limits"
          type="number"
          {...register("pagination_limits")}
          error={errors.pagination_limits?.message}
        />

        <InputField
          label="Number Of Mobile Phones"
          id="number_of_mobile_phones"
          type="number"
          {...register("number_of_mobile_phones")}
          error={errors.number_of_mobile_phones?.message}
        />

        <InputField
          label="Open Street Map Api Key"
          id="open_street_map_api_key"
          type="text"
          {...register("open_street_map_api_key")}
          disabled
        />

        <InputField
          label="Min Visit Number"
          id="min_visit_number"
          type="number"
          {...register("min_visit_number")}
          error={errors.min_visit_number?.message}
        />

        <div className="col-start-3 flex justify-end">
          <SubmitBtn text="Save" loading={isPending} />
        </div>
      </div>
    </form>
  );
}
