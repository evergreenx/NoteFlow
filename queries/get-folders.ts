import { TypedSupabaseClient } from "@/utils/types";

export const getFolders = (client: TypedSupabaseClient) => {
  return client.from("folders").select("*");
};
