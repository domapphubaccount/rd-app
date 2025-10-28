export interface Setting {
  id: number;
  slug: string;
  key: string;
  value: string | number | string[] | number[]; 
  data_type: "string" | "number" | "select" | "text" | "array"; 
  setting_type: string | "general";
  active: number;
  sort: number;
  quota?: number;
}

export interface SettingResponse {
  message: string;
  data: Setting[];
}


export interface UpdateSettingPayload {
  settings: {
    id: number;
    value: string | number | string[] | number[];
    data_type: "string" | "number" | "select" | "text" | "array";
  }[];
  _method: "PUT";
}
