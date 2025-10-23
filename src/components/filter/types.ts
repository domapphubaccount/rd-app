export type OptionItem = {
  value: string;
  label: string;
};

export type BaseFilterOption = {
  label: string;
  placeholder?: string;
  options?: OptionItem[];
};

export type TextFilterOption = BaseFilterOption & {
  name: string;
  type: "text";
};

export type NumberFilterOption = BaseFilterOption & {
  name: string;
  type: "number";
};

export type SelectFilterOption = BaseFilterOption & {
  name: string;
  type: "select";
};

export type CheckboxFilterOption = BaseFilterOption & {
  name: string;
  type: "checkbox";
};

export type DateRangeFilterOption = BaseFilterOption & {
  type: "date";
  startName: string;
  endName: string;
};

export type FilterOption =
  | TextFilterOption
  | NumberFilterOption
  | SelectFilterOption
  | CheckboxFilterOption
  | DateRangeFilterOption;

export type FiltersState = Record<string, string>;
