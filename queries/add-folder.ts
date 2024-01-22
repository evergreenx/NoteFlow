import { TypedSupabaseClient } from "@/utils/types";

export const addFolder = (client: TypedSupabaseClient , name : string) => {
  return client.from('folders').insert({
    name : name
  });
};
