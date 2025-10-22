export interface Modules {
  id: number;
  slug: string;
  key: string;
  value: string;
  data_type: string;
  setting_type: string;
  active: number;
  sort: number;
}

export interface ModulesResponse {
  message: string;
  data: Modules[];
}
