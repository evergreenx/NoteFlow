import Link from "next/link";
import React from "react";
import { folderList } from "./sidebar";

export default function NoteSidebar({ notes }) {


    const data = folderList.map((i) => {

        
    })

    console.log(data)


    const renderListTitle =() =>{


        const data = folderList.map((i) => i.filter(i.id === notes.id ))

        console.log(data)


        // return (


        // )
    }
  return (
    <div>
      <div className="w-[350px] py-[30px] h-screen     px-5 mb-20 bg-[#1C1C1C]">
        {notes.map((i) => {
          return (
            <div className="text-xl text-white   p-3" key={i.id}>
              <Link href={`/note/${i.id}`}>{i.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
