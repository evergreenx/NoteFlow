import Link from "next/link";
import React from "react";
import { folderList } from "./sidebar";
import { useParams } from "next/navigation";
import { stringify } from "querystring";

export default function NoteSidebar({ notes }) {
  const title = notes && notes[0];

  const { id } = useParams();

  console.log(id);
  const selectedNote = notes.find((note) => note.id.toString() === id);

  console.log(selectedNote);
  return (
    <div>
      <div className="w-[350px] py-[30px] h-screen     px-5 mb-20 bg-[#1C1C1C]">
        <h1 className="text-[22px] font-semibold text-white mb-[30px] capitalize">
          {title?.folderId.title}
        </h1>
        {notes.map((i) => {
          return (
            <NoteItem id={i.id} key={i.id} title={i.title} desc={i.content} />
          );
        })}
      </div>
    </div>
  );
}

const NoteItem = ({ title, desc, id }) => {
  const paaramsid = useParams();

  console.log(paaramsid);

  console.log(id);

  return (
    <Link href={`/note/${id}`}>
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
