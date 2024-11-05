import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

export const createWorkflowSchema = toTypedSchema(
  z.object({
    name: z.string().max(50),
    description: z.string().max(80).optional(),
  })
);
