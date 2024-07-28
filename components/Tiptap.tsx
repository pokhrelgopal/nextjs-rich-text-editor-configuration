import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import ListItem from "@tiptap/extension-list-item";
import Toolbar from "./Toolbar";
type Props = {
  description: string;
  onChange: (richText: string) => void;
};

const Tiptap = ({ description, onChange }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Heading.configure({
        HTMLAttributes: { class: "text-2xl font-bold", levels: [1] },
      }),
      ListItem.configure({ HTMLAttributes: { class: "list-disc ml-4" } }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          "rounded-md border p-3 min-h-[150px] ring-1 focus:ring-offset-2 ring-gray-300",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });
  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
