import { TypedSupabaseClient } from "@/utils/types";

export const getNotes = (
  client: TypedSupabaseClient,
  selectedFolder: string
) => {
  return client.from("notes").select("*").eq("folderid", selectedFolder);
};
