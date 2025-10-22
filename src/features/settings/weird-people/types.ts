import type { Meta, PaginationLinks } from "@/types/pagination";

export interface WeirdPeople
 {
  id: number;
  name: string;
  name_ar: string;
  active: boolean;
  number_of_answers: number;
  soil: string;
  reviewed: number;
  inspection: number;
}

export interface WeirdPeopleResponse {
  data: WeirdPeople[];
  links: PaginationLinks;
  meta: Meta;
}
