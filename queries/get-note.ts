import { TypedSupabaseClient } from "@/utils/types";

export const getNote = (
  client: TypedSupabaseClient,
  id: string
) => {
  return client.from("notes").select("*").eq("id", id).single();
};
