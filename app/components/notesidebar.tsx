import Link from "next/link";
import React from "react";
import { folderList } from "./sidebar";
import { useParams } from "next/navigation";
import { stringify } from "querystring";
import { getNotes } from "@/queries/get-notes";
import useSupabaseBrowser from "@/utils/supabase-browser";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { RotatingLines } from "react-loader-spinner";

export default function NoteSidebar({ notes, selectedFolder, isLoading }) {
  return (
    <div>
      <div className="w-[350px] py-[30px] h-screen     px-5 mb-20 bg-[#1C1C1C]">
        <h1 className="text-[22px] font-semibold text-white mb-[30px] capitalize">
          {/* {title?.folderId.title} */}
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <RotatingLines
              visible={true}
              width="30"
              strokeColor="white"
              strokeWidth="3"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
            />
          </div>
        ) : (
          notes?.map((i) => {
            return (
              <NoteItem id={i.id} key={i.id} title={i.title} desc={i.content} />
            );
          })
        )}
      </div>
    </div>
  );
}

const NoteItem = ({ title, desc, id }) => {
  const paaramsid = useParams();

  return (
    <Link href={`/note/${id}`}>
      {id}
      {title}
      <div
        className={` 
        
  ${paaramsid.id === id.toString() ? "bg-[#ffffff1a]" : "bg-[#ffffff08]"}
        
        rounded-[3px] text-lg mb-[20px] text-white cursor-pointer  p-5`}
      >
        {title}
        <div className="mt-[10px] flex justify-between text-[#ffffff99]">
          <p className=" text-base font-normal">{"21/06/2022"}</p>
          <p className=" text-base font-normal tracking-tighter">
            {desc.slice(0, 16)}.....
          </p>
        </div>
      </div>
    </Link>
  );
};
