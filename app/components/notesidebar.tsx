import Link from "next/link";
import React from "react";
import { folderList } from "./sidebar";
import { useParams } from "next/navigation";
import { stringify } from "querystring";
import { getNotes } from "@/queries/get-notes";
import useSupabaseBrowser from "@/utils/supabase-browser";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { RotatingLines } from "react-loader-spinner";

import { formatDistance, subDays } from "date-fns";
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
              <NoteItem
                id={i.id}
                key={i.id}
                title={i.title}
                desc={i.content}
                createdAt={i.created_at}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

const NoteItem = ({ title, desc, id, createdAt }) => {
  const paaramsid = useParams();

  return (
    <Link href={`/note/${id}`}>
      <div
        className={` hover:bg-[#ffffff1a]
        
  ${paaramsid.id === id.toString() ? "bg-[#ffffff1a]" : "bg-[#ffffff08]"}
        
        rounded-[3px] text-lg mb-[20px] text-white cursor-pointer  p-5`}
      >
        {title}
        <div className="mt-[10px] flex justify-between text-[#ffffff99]">
          <p className=" text-base font-normal">
            {formatDistance(createdAt, new Date(), { addSuffix: true })}
          </p>
          <p className=" text-base font-normal tracking-tighter">
            {desc.slice(0, 16)}.....
          </p>
        </div>
      </div>
    </Link>
  );
};
