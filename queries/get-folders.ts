import { TypedSupabaseClient } from "@/utils/types";

export const getFolders = (client: TypedSupabaseClient) => {
  return client
    .from("folders")
    .select("id,name,created_at")
    .order("created_at", { ascending: false });
};
