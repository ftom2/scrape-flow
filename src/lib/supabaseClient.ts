import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ythhtfufslmvswxsuljm.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0aGh0ZnVmc2xtdnN3eHN1bGptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MTk3OTAsImV4cCI6MjA0NjI5NTc5MH0.sSqG8hECsV7LFqCLkw7HktvB1ag5Lyi5waZxdw_A6CM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
