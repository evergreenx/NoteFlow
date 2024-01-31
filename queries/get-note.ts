import { TypedSupabaseClient } from "@/utils/types";

export const getNote = (
  client: TypedSupabaseClient,
  id: string
) => {
  return client.from("notes").select("id,content,title,folderid,created_at").eq("id", id).single();
};
