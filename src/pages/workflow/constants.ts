import { WorkflowStatus } from "./types";

export const STATUS_COLORS = {
  [WorkflowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
  [WorkflowStatus.PUBLISHED]: "bg-primary",
};
