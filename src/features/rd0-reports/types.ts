import type { Meta, PaginationLinks } from "@/types/pagination";

interface ReportStatus {
  status: string;
  color: string;
}
export interface Rd0Report {
  id: number;
  stage_id: number;
  category: string;
  category_name: string;
  report_name: string;
  reference_number: number;
  date: string;
  created_by: string;
  rev: string | null;
  export: string;
  report_status: ReportStatus;
  tickets: unknown[];
  notes: unknown[];
}

export interface Rd0Response {
  data: Rd0Report[];
  links: PaginationLinks;
  meta: Meta;
}
