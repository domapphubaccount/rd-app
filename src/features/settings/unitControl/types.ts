import type { Meta, PaginationLinks } from "@/types/pagination";

export interface Unit {
  id: number;
  name: string;
  value: string;
  default: number;
}

export interface UnitCategory {
  id: number;
  category: string;
  units: Unit[];
}

export interface UnitsResponse {
  data: UnitCategory[];
  links: PaginationLinks;
  meta: Meta;
}
