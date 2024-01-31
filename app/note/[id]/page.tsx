import { NoteDropMenu } from "@/app/components/dropmenu";
import NoteDetails from "@/app/components/noteDetails";
import NoteEditor from "@/app/components/noteEditor";
import { getNote } from "@/queries/get-note";
import useSupabaseServer from "@/utils/supabase-server";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { cookies } from "next/headers";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const cookieStore = cookies();

  const queryClient = new QueryClient();
  const supabase = useSupabaseServer(cookieStore);

  await queryClient.prefetchQuery({
    queryKey: ["note"],
    queryFn: async () => {
      const data = await getNote(supabase, params.id);

      return data.data;
    },
    staleTime : 1,
    
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="bg-[#181818] h-screen w-full overflow-hidden  p-[50px]">
        <NoteDetails params={params} />
      </div>
    </HydrationBoundary>
  );
}
