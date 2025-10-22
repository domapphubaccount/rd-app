import type { Meta, PaginationLinks } from "@/types/pagination";

export interface Role {
  id: number;
  name: string;
  active_users_count: number;
}

export interface RolesResponse {
  data: Role[];
  links: PaginationLinks;
  meta: Meta;
}
