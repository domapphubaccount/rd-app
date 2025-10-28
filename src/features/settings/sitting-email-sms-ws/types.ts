export interface TokenSetting {
  id: number;
  slug: string;
  key: string;
  value: string;
  data_type: string;
  setting_type: string;
  active: number;
  sort: number;
  quota: number;
}

export interface TokensResponse {
  message: string;
  data: TokenSetting[];
}
