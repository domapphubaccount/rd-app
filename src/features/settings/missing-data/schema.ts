import z from "zod";

export const missingDataSchema = z.object({
  missing_data: z.array(
    z.object({
      id: z.number().optional(),
      name_en: z.string().min(1, "English name is required"),
      name_ar: z.string().min(1, "Arabic name is required"),
    })
  ),
  can_add_more: z.boolean(),
});
export type MissingDataForm = z.infer<typeof missingDataSchema>;
