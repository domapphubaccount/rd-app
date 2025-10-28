import z from "zod";

export const generalSettingsSchema = z.object({
  product_purchase_code: z.number().min(1, "Required"),
  min_visit_number: z.number().min(1, "Required"),
  number_of_mobile_phones: z.number().min(1, "Required"),
  time_zone: z.string().min(1, "Required"),
  date_format: z.string().min(1, "Required"),
  date_selector_format: z.string().min(1, "Required"),
  left_menu_position: z.string().min(1, "Required"),
  stats_panel_default_position: z.string().min(1, "Required"),
  close_modal: z.string().min(1, "Required"),
  show_session_timeout_popup: z.string().min(1, "Required"),
  pagination_limits: z.number().min(1, "Required"),
  open_street_map_api_key: z.string().optional(),
});

export type GeneralSettingsData = z.infer<typeof generalSettingsSchema>;
