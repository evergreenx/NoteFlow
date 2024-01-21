import { TypedSupabaseClient } from "@/utils/types";

export const getFolders = (client: TypedSupabaseClient) => {
  return client
    .from("folders")
    .select("*")
    .order("created_at", { ascending: false });
};
