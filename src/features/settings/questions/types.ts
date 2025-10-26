export interface Question {
  id: number;
  type: string;
  body: string;
  action: string | null;
  operator: string | null;
  value: string | null;
  value_from: string | null;
  value_to: string | null;
  custom_error_text: string | null;
  ticket_code: string | null;
  ticket_type: string | null;
  required: boolean;
  active: boolean;
  rd6: boolean;
  hint: string | null;
  missing_data: string | null;
  help: string | null;
  help_image: string | null;
  max_number_of_files: number | null;
  max_file_size: number | null;
  prefix: string | null;
  number_of_points: number | null;
  can_add_more: boolean | null;
  max_number: number | null;
  category_unit: string | null;
  unit_for_additions: string | null;
  measurement_constraints: string | null;
  conditional_logic: string | null;
  order: number;
}

export interface QuestionsResponse {
  data: Question[];
}
