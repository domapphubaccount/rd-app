export const timeZones = [
  "Asia/Dubai",
  "Asia/Riyadh",
  "Asia/Tehran",
  "Asia/Baghdad",
  "Asia/Kuwait",
  "Asia/Qatar",
  "Asia/Bahrain",
  "Asia/Muscat",
  "Asia/Beirut",
  "Asia/Damascus",
  "Asia/Amman",
  "Asia/Jerusalem",
  "Asia/Gaza",
  "Asia/Aden",
  "Europe/London",
  "Europe/Berlin",
  "Europe/Paris",
  "Europe/Madrid",
  "Europe/Amsterdam",
  "Europe/Rome",
  "Europe/Moscow",
  "America/New_York",
  "America/Chicago",
  "America/Los_Angeles",
  "America/Toronto",
  "America/Sao_Paulo",
  "America/Bogota",
  "America/Mexico_City",
  "Asia/Tokyo",
  "Asia/Seoul",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Bangkok",
  "Asia/Kolkata",
  "Asia/Jakarta",
  "Australia/Sydney",
  "Australia/Perth",
  "Australia/Melbourne",
  "Africa/Johannesburg",
  "Africa/Cairo",
  "Africa/Nairobi",
  "Africa/Lagos",
  "UTC",
  "GMT",
].map((tz) => ({ label: tz, value: tz }));

export const dataFormat = [
  { label: "m-d-y", value: "m-d-y" },
  { label: "d-m-y", value: "d-m-y" },
  { label: "y-m-d", value: "y-m-d" },
];

export const date_selector_format = [
  { label: "mm-dd-yyyy", value: "mm-dd-yyyy" },
  { label: "dd-mm-yyyy", value: "dd-mm-yyyy" },
  { label: "yyyy-mm-dd", value: "yyyy-mm-dd" },
];

export const close_modal = [
  { label: "Yes", value: "1" },
  { label: "No", value: "0" },
];

export const show_session_timeout_popup = [
  { label: "Enabled", value: "1" },
  { label: "Disabled", value: "0" },
];

export const left_menu_position = [
  { label: "Collapsed", value: "Collapsed" },
  { label: "Expanded", value: "Expanded" },
];
