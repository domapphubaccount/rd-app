import type { Meta, PaginationLinks } from "@/types/pagination";

export interface CostEstimation {
  id: number;
  est_cost: number;
  idi_cost: number;
  ratio: number;
  total_area: number;
  cost_per_meter: number;
  region_cost: string;
  project: Project;
}

export interface Project {
  ReferenceNo: number;
  Category: string;
  Date: string;
  owner_name: string;
  contractor_name: string;
  design_engineering_office: string;
  supervising_engineering_office: string;
  cost: number;
}

export interface CostEstimationResponse {
  data: CostEstimation[];
  links: PaginationLinks;
  meta: Meta;
}
