import type { Meta, PaginationLinks } from "@/types/pagination";

export interface Section {
  id: number;
  name: string;
  order: number;
  is_special: boolean;
}

export interface SectionResponse {
  data: Section[];
  meta: Meta;
  links: PaginationLinks;
}
