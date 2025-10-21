import type { Meta, PaginationLinks } from "@/types/pagination";

export interface EndUser {
  id: number;
  full_name: string;
  mobile: string;
  owner_projects: number;
  managed_projects: number;
  viewed_projects: number;
}

export interface EndUsersResponse {
  data: EndUser[];
  links: PaginationLinks;
  meta: Meta;
}
