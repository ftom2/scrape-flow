import { supabase } from "@/lib/supabaseClient";
import { useUserStore } from "@/stores/userStore";
import { Tables } from "@/types/database.types";
import { QueryClient, useMutation, useQuery } from "@tanstack/vue-query";
import { computed } from "vue";
import { toast } from "vue-sonner";
import { CreateWorkflowSchema } from "../schema";
import { WorkflowStatus } from "../types";

export const useWorkflowsApi = () => {
  const queryClient = new QueryClient();
  const { user } = useUserStore();
  async function getWorkflows() {
    const { data } = await supabase
      .from("Workflow")
      .select()
      .eq("userId", user?.id as string)
      .order("createdAt", { ascending: true })
      .returns<Tables<"Workflow">[]>();

    return data;
  }

  async function createWorkflow(payload: CreateWorkflowSchema) {
    const { data, error } = await supabase
      .from("Workflow")
      .insert([
        {
          userId: user?.id as string,
          definition: "TODO",
          status: WorkflowStatus.DRAFT,
          ...payload,
        },
      ])
      .select();

    if (error) {
      throw error;
    }
    return data;
  }

  const {
    isPending: isGetWorkflowPending,
    data,
    error,
  } = useQuery({
    queryKey: ["workflows"],
    queryFn: getWorkflows,
  });

  const { mutateAsync, isPending: isCreateWorkflowPending } = useMutation({
    mutationFn: createWorkflow,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workflows"] });
      toast.success("Workflow created", { id: "create-workflow" });
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to create workflow", { id: "create-workflow" });
    },
  });

  const isLoading = computed(
    () => isGetWorkflowPending.value || isCreateWorkflowPending.value
  );
  return { isLoading, workflows: data, error, createWorkflow: mutateAsync };
};
