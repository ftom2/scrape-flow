import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(4, "Name must contain at least 4 characters")
    .max(50, "Name can't be longer than 50 characters"),
  description: z
    .string()
    .max(80, "Description can't be longer than 80 characters")
    .optional(),
});
export const createWorkflowSchema = toTypedSchema(schema);
export type CreateWorkflowSchema = z.infer<typeof schema>;
