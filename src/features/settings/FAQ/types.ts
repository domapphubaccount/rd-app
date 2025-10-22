import type { Meta, PaginationLinks } from "@/types/pagination";

export interface FAQ {
  id: number;
  category_name: string;
  type: string;
  order: number;
  no_of_questions: number;
}

export interface FAQResponse {
  data: FAQ[];
  links: PaginationLinks;
  meta: Meta;
}
