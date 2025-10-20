import type { Meta, PaginationLinks } from "@/types/pagination";

export interface Rd7HistoryItem {
  rd7_report_id: number;
  updater: string;
  action: string;
  file: string | null;
  email: string;
}

export interface Rd7Report {
  id: number;
  reference_number: number;
  project_id: number;
  policy_number: number;
  request_number: number;
  servey_resolution_number: number | null;
  category: string;
  category_name: string;
  date: string;
  inspector: string;
  cost: number;
  owner: string;
  owner_phone: string;
  owner_email: string;
  contractor: string;
  contractor_phone: string;
  contractor_email: string;
  rd0_status: string | null;
  rd0_responsible: string | null;
  quotations_status: string;
  quotation_number: number;
  rd7_responsible: string;
  rd7_cost: number;
  rd7_payment_status: string;
  tis_fees_status: string;
  rd7_total_cost: number;
  rd7_status: string;
  rd7_history: Rd7HistoryItem[];
  area_manager: string;
  export: string;
}

export interface Rd7Response {
  data: Rd7Report[];
  links: PaginationLinks;
  meta: Meta;
}
