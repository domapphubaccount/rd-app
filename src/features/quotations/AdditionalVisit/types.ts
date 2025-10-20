import type { Meta, PaginationLinks } from "@/types/pagination";

export interface AdditionalVisit {
  quotation_no: number;
  uuid: string;
  reference_no: number;
  policy_number: number;
  request_number: number;
  servey_resolution_number: string | null;
  quoted_by: string;
  av_cost: number;
  payment_status: string;
  quotation_date: string;
  payment_date: string | null;
  owner: string;
  contractor: string;
  av_total_cost: number;
  payment_link: string;
}

export interface AdditionalVisitResponse {
  data: AdditionalVisit[];
  links: PaginationLinks;
  meta: Meta;
}


