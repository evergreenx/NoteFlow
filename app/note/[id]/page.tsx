import { NoteDropMenu } from "@/app/components/dropmenu";
import NoteDetails from "@/app/components/noteDetails";
import NoteEditor from "@/app/components/noteEditor";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="bg-[#181818] h-screen w-full   p-[50px]">
      <div className=" flex justify-between items-center">
        <h1 className="text-[32px] font-semibold text-white">{params.id}</h1>

        <NoteDropMenu />
      </div>

      <NoteDetails />

      <NoteEditor />
    </div>
  );
}
