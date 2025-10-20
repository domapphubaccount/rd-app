import type { Meta, PaginationLinks } from "@/types/pagination";

export interface VisitRequest {
  id: number;
  reference_number: number;
  policy_number: number;
  request_number: number;
  servey_resolution_number: number | null;
  request_date: string; 
  visit_date: string;   
  stage: string;
  inspector: string;
  status: string;
}

export interface VisitRequestsResponse {
  data: VisitRequest[];
  links: PaginationLinks;
  meta: Meta;
}
