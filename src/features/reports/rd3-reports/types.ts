import type { Meta, PaginationLinks } from "@/types/pagination";

export interface Rd3Report {
  report_id: number;
  category: string;
  category_name: string;
  reference_number: number;
  policy_number: number;
  request_number: number;
  servey_resolution_number: number | null;
  type: string;
  date: string;
  inspector: string;
  status: string;
}

export interface Rd3Response {
  data: Rd3Report[];
  links: PaginationLinks;
  meta: Meta;
}
