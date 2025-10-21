import type { Meta, PaginationLinks } from "@/types/pagination";

export interface ReportStatus {
  status: string;
  color: string;
}

export interface ProgressBar {
  design_report: boolean;
  inspection_report: boolean;
  design_status: string;
  inspection_status: string;
}

export interface HistoryItem {
  id: number;
  updater: string;
  action: string;
  description: string;
  date: string;
}

export interface Rd6Report {
  id: number;
  icon: string;
  icon_name: string;
  pStageId: number;
  reference_number: number;
  policy_number: number;
  request_number: number;
  servey_resolution_number: number | null;
  type: string;
  date: string;
  designer: string;
  inspector: string;
  total_cost: number;
  addendum_status: string;
  progress_bar: ProgressBar;
  rd3_date: string | null;
  rd3_status: string | null;
  owner: string;
  contractor: string;
  area_manager: string | null;
  design_manager: string;
  report_status: ReportStatus;
  history: HistoryItem[];
  export: string;
}

export interface Rd6Response {
  data: Rd6Report[];
  links: PaginationLinks;
  meta: Meta;
}
