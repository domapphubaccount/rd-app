export interface Insurance {
  id: number;
  name_ar: string;
  name_en: string;
}

export interface InsurancesResponse {
  data: Insurance[];
}
