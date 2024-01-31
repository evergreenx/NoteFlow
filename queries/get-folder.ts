import { TypedSupabaseClient } from "@/utils/types";

export const getFolder = (client: TypedSupabaseClient, id: string ) => {
  return client.from("folders").select("id,name").eq("id", id).single();
};
