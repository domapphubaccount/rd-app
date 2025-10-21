import type { Meta, PaginationLinks } from "@/types/pagination";

export interface ReportStatus {
  status: string;
  color: string;
}

export interface ReportHistoryItem {
  date: string;
  by: string;
  rev: number | null;
  status: ReportStatus;
  export: string;
}

export interface Rd1Report {
  id: number;
  area: string;
  reference_number: number;
  policy_number: number;
  request_number: number;
  servey_resolution_number: number | null;
  res_person: string;
  rev: number;
  max_degree: string;
  type: string;
  cases: string;
  created_at: string;
  design_engineering_office: string;
  contractor_name: string;
  project_cost: number;
  soil_company: string;
  report_status: ReportStatus;
  report_history: ReportHistoryItem[];
}

export interface Rd1Response {
  data: Rd1Report[];
  links: PaginationLinks;
  meta: Meta;
}
