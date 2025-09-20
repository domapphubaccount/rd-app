import type { Meta, PaginationLinks } from "@/types/pagination";

export interface Project {
  uuid: string;
  Category: string;
  ReferenceNo: number;
  Date: string;
  Type: string;
  Payment: number;
  LastStage: string;
  Classification: string;
  MS: boolean;
}

export interface ProjectsResponse {
  data: Project[];
  links: PaginationLinks;
  meta: Meta;
}
