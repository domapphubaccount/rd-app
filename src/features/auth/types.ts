export interface Permission {
  id: number;
  section: string;
  slug: string;
  value: string;
}

export interface Role {
  id: number;
  name: string;
}

export interface LoginResponse {
  token: string;
  name: string;
  role: Role;
  image: string | null;
  message: string;
  permissions: Permission[];
}
