// types.ts
export interface GeneralSetting {
  id: number;
  slug: string;
  key: string;
  value: string | number;
  data_type: "string" | "number" | "select" | "text";
  setting_type: "general";
  active: number;
  sort: number;
}

export interface GeneralResponse {
  message: string;
  data: GeneralSetting[];
}

export interface UpdateSettingPayload {
  settings: {
    id: number;
    value: string  | number;
    data_type: "number" | "select" | "text";
  }[];
  _method: "PUT";
}
