export interface Message {
  id: number;
  date: string;
  to: string;
  subject: string;
  status: "Sent" | "Failed" | "Queued" | string;
  type: "email" | "sms" | "ws";
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface MessagesResponse {
  data: Message[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: PaginationMeta;
}
