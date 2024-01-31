"use client";
import useSupabaseBrowser from "@/utils/supabase-browser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

import RswEditor, { ContentEditableEvent } from "react-simple-wysiwyg";

export default function NoteEditor({
  content,
  id
}: {
  content: string | undefined;
  id: string
}) {
  const supabase = useSupabaseBrowser();
  const queryClient = useQueryClient()

  const [value, setValue] = useState(content);

  const mutation = useMutation({
    mutationFn: async () => {
      return await supabase.from("notes").update({
        content: value,
      }).eq('id' , id)
    },

    onSuccess : () => {
    queryClient.invalidateQueries({ queryKey: ["note"] });

    }
  });

  function onChange(e: ContentEditableEvent) {
    setValue(e.target.value);

    mutation.mutateAsync();
  }

  // onSuccess: () => {
  //   queryClient.invalidateQueries({ queryKey: ["folders"] });
  // },

  console.log(value)

  return (
    <div>
      <div className=" prose w-full min-w-[90%] overflow-hidden   prose-headings:text-white">
        <RswEditor
          containerProps={{ style: { resize: "none" } }}
          value={value}
          onChange={onChange}
        ></RswEditor>
      </div>
    </div>
  );
}
