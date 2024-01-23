"use client";
import React, { useEffect, useState } from "react";
import FolderSidebar from "./foldersidebar";
import NoteSidebar from "./notesidebar";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from '@/utils/supabase-browser'
import { getFolders } from "@/queries/get-folders";
export const folderList = [
  { id: 1, name: "Personal" },
  { id: 2, name: "Work" },
  { id: 3, name: "Project X" },
];



export default function Sidebar() {




  const supabase = useSupabaseBrowser()
 const {data , isError , isLoading} =  useQuery(getFolders(supabase))

  const [folders, setFolders] = useState(data);

  const [note, setNote] = useState([
    {
      id: 101,
      folderId: {
        id: 1,
        title: "Personal",
      },
      title: "Grocery List",
      content: "Milk, eggs, bread",
    },
    {
      id: 102,
      folderId: {
        id: 1,
        title: "Personal",
      },
      title: "Fitness Plan",
      content: "Monday: Jogging, Tuesday: Gym",
    },
    {
      id: 103,
      folderId: {
        id: 2,
        title: "work",
      },
      title: "Meeting Agenda",
      content: "Discuss quarterly goals",
    },
    {
      id: 104,
      folderId: {
        id: 3,
        title: "project x",
      },
      title: "Project X Tasks",
      content: "Task 1: Research, Task 2: Planning",
    },
  ]);

  const [selectedNote, setSelectedNote] = useState({
    id: 101,
    folderId: 1,
    title: "Grocery List",
    content: "Milk, eggs, bread",
  });

  const [selectedFolder, setSelectedFolder] = useState(1);

  const [filteredNotes, setFilteredNotes] = useState([]);




  useEffect(() => {
    const filteredNotes = note.filter(
      (note) => note.folderId.id === selectedFolder
    );
    setFilteredNotes(filteredNotes);

    // Optionally, update selectedNote based on the first note in filteredNotes
    if (filteredNotes.length > 0) {
      setSelectedNote(filteredNotes[0]);
    } else {
      // Handle the case where there are no notes in the selected folder
      setSelectedNote(null);
    }
  }, [selectedFolder, note]);




  if(isLoading) {
    return <h1>loading</h1>
  }



  return (
    <div className=" flex h-screen  ">
      <FolderSidebar
        setSelectedFolder={setSelectedFolder}
        selectedFolder={selectedFolder}
        folders={folders}
        setFolders={setFolders}
        setNote={setNote}
        note={note}
      />

      

      <NoteSidebar notes={filteredNotes} />
    </div>
  );
}
