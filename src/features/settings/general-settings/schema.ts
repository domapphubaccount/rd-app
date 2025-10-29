import z from "zod";

export const generalSettingsSchema = z.object({
  product_purchase_code: z.coerce.number().optional(),
  min_visit_number: z.coerce.number().optional(),
  number_of_mobile_phones: z.coerce.number().optional(),
  time_zone: z.string().min(1, "Required"),
  date_format: z.string().min(1, "Required"),
  date_selector_format: z.string().min(1, "Required"),
  left_menu_position: z.string().min(1, "Required"),
  stats_panel_default_position: z.string().min(1, "Required"),
  close_modal: z.string().min(1, "Required"),
  show_session_timeout_popup: z.string().min(1, "Required"),
  pagination_limits: z.coerce.number().optional(),
  open_street_map_api_key: z.string().optional(),
  front_end_payfort_callback_success_url: z.string().min(1, "Required"),
  front_end_payfort_callback_fail_url: z.string().min(1, "Required"),
});

export type GeneralSettingsData = z.infer<typeof generalSettingsSchema>;
