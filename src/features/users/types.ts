import type { Meta, PaginationLinks } from "@/types/pagination";

export interface User {
  uuid: string;
  name: string;
  last_visit: string;
  status: boolean;
  role: {
    id: number;
    name: string;
    active_users_count: number;
  };
  specialist: {
    id: number;
    name: string;
  };
}

export interface UsersResponse {
  data: User[];
  links: PaginationLinks;
  meta: Meta;
}
