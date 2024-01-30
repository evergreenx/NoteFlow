import { TypedSupabaseClient } from "@/utils/types";

export const getFolder = (client: TypedSupabaseClient, id: string) => {
  return client.from("folders").select("*").eq("id", id).single();
};
