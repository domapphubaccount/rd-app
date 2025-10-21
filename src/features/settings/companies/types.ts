import type { Meta, PaginationLinks } from "@/types/pagination";

export interface Company {
  id: number;
  name: string;
  country: {
    name: string;
  };
}

export interface CompaniesResponse {
  data: Company[];
  links: PaginationLinks;
  meta: Meta;
}
