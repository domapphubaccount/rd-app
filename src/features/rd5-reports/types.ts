import type { Meta, PaginationLinks } from "@/types/pagination";

export interface ReportStatus {
  status: string;
  color: string;
}

export interface Rd5Report {
  id: number;
  ticket_code: string;
  reference_number: number;
  project_id: number;
  policy_number: number;
  request_number: number;
  servey_resolution_number: number | null;
  created_by: string;
  status: number;
  type: string;
  creation_date: string;
  issues_date: string | null;
  owner: string;
  contractor: string;
  owner_phone: string;
  owner_email: string;
  contractor_email: string;
  contractor_phone: string;
  report_status: ReportStatus;
  view_rd5: string;
}

export interface Rd5Response {
  data: Rd5Report[];
  links: PaginationLinks;
  meta: Meta;
}
