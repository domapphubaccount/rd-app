import type { Meta, PaginationLinks } from "@/types/pagination";

export interface FaqQuestion {
  id: number;
  order: number;
  title: string;
  answer_preview: string;
}

export interface FaqQuestionResponse {
  data: FaqQuestion[];
  meta: Meta;
  links: PaginationLinks;
}
