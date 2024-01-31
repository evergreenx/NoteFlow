"use client";
import React, { useEffect, useState } from "react";
import FolderSidebar from "./foldersidebar";
import NoteSidebar from "./notesidebar";

import useSupabaseBrowser from "@/utils/supabase-browser";
import { getFolders } from "@/queries/get-folders";
import { getNotes } from "@/queries/get-notes";
import { useQuery } from "@tanstack/react-query";

export default function Sidebar() {
  const supabase = useSupabaseBrowser();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["folders"],
    queryFn: async () => {
      const data = await getFolders(supabase);
      return data.data;
    },
  });
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

  const [selectedFolder, setSelectedFolder] = useState<string>("");

  useEffect(() => {
    if (data) {
      setSelectedFolder(data[0]?.id);
    }
  }, [data]);

  const [filteredNotes, setFilteredNotes] = useState([]);

  const {
    data: noteData,
    isError: noteError,
    isLoading: noteIsLoading,
    isFetching: noteIsFetching,
    isRefetching: noteRefetching,
  } = useQuery({
    queryFn: async () => {
      const data = await getNotes(supabase, selectedFolder);
      return data.data;
    },
    queryKey: ["notes", selectedFolder],

    enabled: !!selectedFolder,
    retry: 1,
  });

  console.log(selectedFolder);

  // useEffect(() => {
  //   const filteredNotes = data?.filter(
  //     (note) => note.folderid. === selectedFolder
  //   );
  //   setFilteredNotes(filteredNotes);

  //   // Optionally, update selectedNote based on the first note in filteredNotes
  //   if (filteredNotes.length > 0) {
  //     setSelectedNote(filteredNotes[0]);
  //   } else {
  //     // Handle the case where there are no notes in the selected folder
  //     setSelectedNote(null);
  //   }
  // }, [selectedFolder, note]);

  if (noteError) {
    console.log(isError);
  }

  return (
    <div className=" flex h-screen  ">
      <FolderSidebar
        isLoading={isLoading}
        setSelectedFolder={setSelectedFolder}
        selectedFolder={selectedFolder}
        folders={data}
      />

      <NoteSidebar
        isLoading={noteIsLoading || noteIsFetching || noteRefetching}
        selectedFolder={selectedFolder}
        notes={noteData}
      />
    </div>
  );
}
