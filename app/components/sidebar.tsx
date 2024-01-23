"use client";
import React, { useEffect, useState } from "react";
import FolderSidebar from "./foldersidebar";
import NoteSidebar from "./notesidebar";
export const folderList = [
  { id: 1, name: "Personal" },
  { id: 2, name: "Work" },
  { id: 3, name: "Project X" },
];

export default function Sidebar() {
  const [folders, setFolders] = useState(folderList);

  const [note, setNote] = useState([
    {
      id: 101,
      folderId: 1,
      title: "Grocery List",
      content: "Milk, eggs, bread",
    },
    {
      id: 102,
      folderId: 1,
      title: "Fitness Plan",
      content: "Monday: Jogging, Tuesday: Gym",
    },
    {
      id: 103,
      folderId: 2,
      title: "Meeting Agenda",
      content: "Discuss quarterly goals",
    },
    {
      id: 104,
      folderId: 3,
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
      (note) => note.folderId === selectedFolder
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

  return (
    <div className=" flex h-screen  ">
      <FolderSidebar
        setSelectedFolder={setSelectedFolder}
        selectedFolder={selectedFolder}
        folders={folders}
      />

      <NoteSidebar notes={filteredNotes} />
    </div>
  );
}
