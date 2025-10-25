// types.ts
export type FiltersState = Record<string, string>;

export type FilterOption =
  | {
      type: "text" | "number" | "select";
      name: string;
      label: string;
      placeholder?: string;
      options?: { value: string; label: string }[];
    }
  | {
      type: "date";
      startName: string;
      endName: string;
      label: string;
    }
  | {
      type: "checkbox";
      name: string;
      label: string;
    };

export type SavedFilter = {
  id: string;
  name: string;
  category: string;
  filters: FiltersState;
  default: boolean;
};

export type FilterDetail = {
  key: string;
  value: string;
};

export type SavedFilterResponse = {
  id: string;
  name: string;
  category: string;
  details?: FilterDetail[];
  default: boolean;
  order?: number;
};

export type ApiResponse = {
  message: string;
  data: SavedFilterResponse[];
};
