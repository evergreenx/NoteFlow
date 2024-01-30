"use client";
import React, { useState } from "react";

import dynamic from "next/dynamic";

import RswEditor from "react-simple-wysiwyg";

export default function NoteEditor() {
  const [value, setValue] = useState("simple text");

  function onChange(e) {
    setValue(e.target.value);
  }

  console.log(value);
  return (
    <div>
  

      <div className="prose  prose:text-white prose-headings:text-white">
        <RswEditor
          containerProps={{ style: { resize: "horizontal" } }}
          value={value}
          onChange={onChange}
        ></RswEditor>
      </div>
    </div>
  );
}
