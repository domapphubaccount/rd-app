import type { Meta, PaginationLinks } from "@/types/pagination";

export interface ProjectQuotations {
  quotation_no: number;
  uuid: string;
  reference_no: number;
  policy_number: number;
  request_number: number;
  servey_resolution_number: number | null;
  project_id: number;
  quoted_by: string;
  project_cost: number;
  quotation_cost: number;
  quotation_date: string; 
  payment_status: string;
  visit_number: number;
  owner: string;
  contractor: string;
  link_url: string;
}

export interface ProjectQuotationsResponse {
  data: ProjectQuotations[];
  links: PaginationLinks;
  meta: Meta;
}
