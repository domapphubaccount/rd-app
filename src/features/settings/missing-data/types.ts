
export interface MissingDataItem {
  id: number;
  name_en: string;
  name_ar: string;
}

export interface TemplatesResponse {
  data: MissingDataItem[];
  can_add_more: boolean;
}