import type { Meta, PaginationLinks } from "@/types/pagination";

export interface Rd7Quotation {
  quotation_no: number;
  uuid: string;
  owner_phone: string;
  owner_email: string;
  contractor_email: string;
  contractor_phone: string;
  category: string;
  category_name: string;
  owner: string;
  contractor_name: string;
  reference_number: number;
  policy_number: number;
  request_number: number;
  servey_resolution_number: string | null;
  project_id: number;
  quoted_by: string;
  rd7_total_cost: number;
  project_cost: number;
  quotation_date: string; 
  payment_status: string;
  payment_date: string | null;
  tis_fee_status: string;
  link_url: string;
}

export interface Rd7QuotationsResponse {
  data: Rd7Quotation[];
  links: PaginationLinks;
  meta: Meta;
}
