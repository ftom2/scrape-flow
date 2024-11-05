import { supabase } from "@/lib/supabaseClient";
import { useUserStore } from "@/stores/userStore";
import { Tables } from "@/types/database.types";
import { useQuery } from "@tanstack/vue-query";

export const useWorkflowsApi = () => {
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

  const { isLoading, data, error } = useQuery({
    queryKey: ["workflows"],
    queryFn: getWorkflows,
  });

  return { isLoading, workflows: data, error };
};
