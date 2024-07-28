"use client";
import React from "react";
import { type Editor } from "@tiptap/react";
import { Bold, Strikethrough, Italic, List, Heading2 } from "lucide-react";
import { Toggle } from "./ui/toggle";

type Props = {
  editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) return null;
  return (
    <div className="border border-input bg-transparent p-1 rounded-md mb-2 w-fit">
      <Toggle
        size={"sm"}
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 />
      </Toggle>
      <Toggle
        size={"sm"}
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold />
      </Toggle>
      <Toggle
        size={"sm"}
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic />
      </Toggle>
      <Toggle
        size={"sm"}
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough />
      </Toggle>
      <Toggle
        size={"sm"}
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List />
      </Toggle>
    </div>
  );
};

export default Toolbar;
