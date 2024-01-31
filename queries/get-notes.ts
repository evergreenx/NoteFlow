import { TypedSupabaseClient } from "@/utils/types";

export const getNotes = (
  client: TypedSupabaseClient,
  selectedFolder: string
) => {
  return client
    .from("notes")
    .select("id,folderid,content,created_at,title")
    .eq("folderid", selectedFolder);
};
