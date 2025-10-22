import type { Meta, PaginationLinks } from "@/types/pagination";

export interface Stage {
  id: number;
  name: string;
  name_ar: string;
  active: boolean;
  number_of_answers: number;
  platforms: string;
  order: number;
  inspection: number;
}

export interface StagesResponse {
  data: Stage[];
  links: PaginationLinks;
  meta: Meta;
}
