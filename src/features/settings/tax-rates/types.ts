import type { Meta, PaginationLinks } from "@/types/pagination";

export interface Role {
  id: number;
  name: string;
  active_users_count: number;
}

export interface Specialist {
  id: number;
  name: string;
}

export interface User {
  uuid: string;
  name: string;
  role: Role;
  status: boolean;
  specialist: Specialist;
  last_visit: string;
}

export interface Company {
  id: number;
  name: string;
}

export interface TaxRate {
  id: number;
  name: string;
  active: boolean;
  rate: number;
  user: User;
  company: Company;
}

export interface TaxRatesResponse {
  data: TaxRate[];
  links: PaginationLinks;
  meta: Meta;
}
