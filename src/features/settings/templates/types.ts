export interface TemplateVariable {
  ref: string;
  buttonVariable?: string;
}

export interface TemplateStats {
  total: number;
  queued: number;
  sent: number;
  rejected: number;
  delivered: number;
  last_email_sent_at?: string;
}

export interface Template {
  id: number;
  name: string;
  event: string;
  body: string | null;
  type: "email" | "sms" | "whatsapp";
  stats: TemplateStats | null;
  variables: TemplateVariable[] | null;
  to: string | null;
  cc: string[] | null;
  bcc: string[] | null;
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

export interface TemplatesResponse {
  data: Template[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: PaginationMeta;
}
