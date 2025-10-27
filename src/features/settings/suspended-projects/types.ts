import type { Meta, PaginationLinks } from "@/types/pagination";

export interface SuspendProject {
  id: number;
  name: string;
  active: boolean;
  rate: number;
  user: {
    uuid: string;
    name: string;
    role: {
      id: number;
      name: string;
      active_users_count: number;
    };
    status: boolean;
    specialist: {
      id: number;
      name: string;
    };
    last_visit: string;
  };
  company: {
    id: number;
    name: string;
  };
}

export interface SuspendProjectsResponse {
  data: SuspendProject[];
  links: PaginationLinks;
  meta: Meta;
}
