import type { Meta, PaginationLinks } from "@/types/pagination";

export interface ReportStatus {
  status: string;
  color: string;
}

export interface Location {
  location_1: string | null;
  location_2: string | null;
  accurate_location: string | null;
}

export interface Files {
  word: string | null;
  pdf: string | null;
}

export interface InspectionReport {
  id: number;
  reference_number: number;
  policy_number: number;
  request_number: number;
  servey_resolution_number: string | null;
  project_uuid: string;
  stage: string;
  stage_id: number;
  r3: boolean;
  result: string | null;
  inspector: string;
  date: string;
  report_status: ReportStatus;
  area: string | null;
  location: Location;
  files: Files;
  contractor: string;
  owner: string;
}

export interface InspectionReportsResponse {
  data: InspectionReport[];
  links: PaginationLinks;
  meta: Meta;
}
