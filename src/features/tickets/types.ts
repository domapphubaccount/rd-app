import type { Meta, PaginationLinks } from "@/types/pagination";

export interface Degree {
  id: number;
  name: string;
  type: string;
}

export interface TransferTo {
  id: number;
  name: string;
}

export interface Stage {
  id: number;
  name: string;
}

export interface UserSummary {
  id: number;
  full_name: string;
}

export interface Rd5ReportStatus {
  status: string;
  color: string;
}

export interface Ticket {
  id: number;
  type: string;
  description: string | null;
  ticket_code: string;
  transfer_to: TransferTo | null;
  degree: Degree | null;
  reference_number: number | null;
  policy_number: number | null;
  request_number: number | null;
  servey_resolution_number: number | null;
  stage: Stage;
  created_by: UserSummary;
  updated_by: UserSummary;
  rd5_report_status: Rd5ReportStatus | null;
  activity: string; 
}

export interface TicketsResponse {
  data: Ticket[];
  links: PaginationLinks;
  meta: Meta;
}
