"use client";

import React from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextStyle from "@tiptap/extension-text-style";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Youtube from "@tiptap/extension-youtube";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Toolbar from "./Toolbar";

type Props = {
  description: string;
  onChange: (richText: string) => void;
};

const Tiptap = ({ description, onChange }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto my-4",
        },
      }),
      Subscript,
      Superscript,
      TextStyle,
      Table.configure({
        HTMLAttributes: {
          class: "border-collapse table-auto w-full my-4",
        },
      }),
      TableRow,
      TableCell.configure({
        HTMLAttributes: {
          class: "border border-gray-300 p-2",
        },
      }),
      TableHeader.configure({
        HTMLAttributes: {
          class: "border border-gray-300 p-2 bg-gray-100 font-bold",
        },
      }),
      TaskList,
      TaskItem.configure({
        HTMLAttributes: {
          class: "flex items-center",
        },
      }),
      Youtube.configure({
        HTMLAttributes: {
          class: "w-full aspect-video my-4",
        },
      }),
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
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
      <EditorContent className="prose max-w-none" editor={editor} />
      <style jsx global>{`
        .ProseMirror h1 {
          font-size: 2.5em;
          margin-top: 0.5em;
          margin-bottom: 0.3em;
        }
        .ProseMirror h2 {
          font-size: 2.2em;
          margin-top: 0.4em;
          margin-bottom: 0.2em;
        }
        .ProseMirror h3 {
          font-size: 2em;
          margin-top: 0.3em;
          margin-bottom: 0.1em;
        }
        .ProseMirror h4 {
          font-size: 1.8em;
          margin-top: 0.3em;
          margin-bottom: 0.1em;
        }
        .ProseMirror h5 {
          font-size: 1.5em;
          margin-top: 0.3em;
          margin-bottom: 0.1em;
        }
        .ProseMirror p {
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }
        .ProseMirror a {
          color: #2563eb;
          text-decoration: underline;
        }
        .ProseMirror ul,
        .ProseMirror ol {
          padding-left: 1.5em;
        }
        .ProseMirror ul {
          list-style-type: disc;
        }
        .ProseMirror ol {
          list-style-type: decimal;
        }
        .ProseMirror table {
          border-collapse: collapse;
          margin: 0;
          overflow: hidden;
          table-layout: fixed;
          width: 100%;
        }
        .ProseMirror table td,
        .ProseMirror table th {
          border: 2px solid #ced4da;
          box-sizing: border-box;
          min-width: 1em;
          padding: 3px 5px;
          position: relative;
          vertical-align: top;
        }
        .ProseMirror table th {
          background-color: #f8f9fa;
          font-weight: bold;
          text-align: left;
        }
        .ProseMirror table .selectedCell:after {
          background: rgba(200, 200, 255, 0.4);
          content: "";
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          pointer-events: none;
          position: absolute;
          z-index: 2;
        }
        .ProseMirror table .column-resize-handle {
          background-color: #adf;
          bottom: -2px;
          position: absolute;
          right: -2px;
          pointer-events: none;
          top: 0;
          width: 4px;
        }
        .ProseMirror img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default Tiptap;
