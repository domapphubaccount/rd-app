export const CASES_OPTIONS = [
  { id: "A", name: "A" },
  { id: "B", name: "B" },
  { id: "C", name: "C" },
  { id: "D", name: "D" },
];

export const REPORT_TYPE = [
  { id: "Simple", name: "Simple" },
  { id: "Complex", name: "Complex" },
];

export const DELETE_REPORT = [
  { id: "1", name: "yes" },
  { id: "0", name: "No" },
];

export const TIME_ZONES = [
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

export const DATE_FORMATS = [
  { label: "m-d-y", value: "m-d-y" },
  { label: "d-m-y", value: "d-m-y" },
  { label: "y-m-d", value: "y-m-d" },
];

export const DATE_SELECTOR_FORMAT = [
  { label: "mm-dd-yyyy", value: "mm-dd-yyyy" },
  { label: "dd-mm-yyyy", value: "dd-mm-yyyy" },
  { label: "yyyy-mm-dd", value: "yyyy-mm-dd" },
];

export const CLOSE_MODAL = [
  { label: "Yes", value: "1" },
  { label: "No", value: "0" },
];

export const SHOW_SESSION_TIMEOUT_POPUP = [
  { label: "Enabled", value: "1" },
  { label: "Disabled", value: "0" },
];

export const LEFT_MENU_POSITION = [
  { label: "Collapsed", value: "Collapsed" },
  { label: "Expanded", value: "Expanded" },
];

export const CURRENCY_CODES = [
  { label: "US Dollar (USD)", value: "USD" },
  { label: "Euro (EUR)", value: "EUR" },
  { label: "Egyptian Pound (EGP)", value: "EGP" },
  { label: "Saudi Riyal (SAR)", value: "SAR" },
  { label: "UAE Dirham (AED)", value: "AED" },
];

export const DECIMAL_SEPARATORS = [
  { label: ".", value: "." },
  { label: ",", value: "," },
];

export const SYMBOL_POSITIONS = [
  { label: "Left", value: "Left" },
  { label: "Right", value: "Right" },
];

export const PAYMENT_STATUS = [
  { label: "Not Paid", value: "0" },
  { label: "Paid", value: "1" },
  { label: "Pending", value: "2" },
];

export const TYPE_OPTIONS = [
  { label: "NT", name: "NT" },
  { label: "FT", name: "FT" },
];

export const CLASSIFICATION_OPTIONS = [
  { label: "SP", name: "SP" },
  { label: "RP", name: "RP" },
];

export const MISSING_STAGE = [
  { label: "-", value: "0" },
  { label: "MS", value: "1" },
];

export const ACTIVE_OPTIONNS = [
  { lable: "Bloked", value: "0" },
  { lable: "Active", value: "1" },
];

export const ROLE_ID = [
  { lable: "Admin", value: "1" },
  { lable: "User", value: "2" },
  { lable: "Super Admin", value: "3" },
];

export const RD5_REPORT_TYPE = [
  { label: "Design", value: "Des" },
  { label: "Ins-Missing State", value: "Ms" },
  { label: "Ins-Work-interruption", value: "WI" },
];

export const Classification = [
  { label: "SP", value: "SP" },
  { label: "NON-SP", value: "NON-SP" },
  { label: "NT", value: "NT" },
  { label: "FT", value: "FT" },
];

export const TICKET_TYPE = [
  { label: "Inspection", value: "inspection" },
  { label: "Design", value: "design" },
];

export const INPROGRESS = [
  { label: "Design Engineer", id: "1" },
  { label: "Inspection Engineer", id: "2" },
  { label: "Design Manager", id: "3" },
  { label: "Area Manager", id: "4" },
  { label: "RD6 Manager", id: "5" },
];
