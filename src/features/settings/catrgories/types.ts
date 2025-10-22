import type { Meta, PaginationLinks } from "@/types/pagination";

export interface Category {
  id: number;
  name: string;
  icon: string;
  additional_cost_factor: number;
}

export interface CategoriesResponse {
  data: Category[];
  links: PaginationLinks;
  meta: Meta;
}
