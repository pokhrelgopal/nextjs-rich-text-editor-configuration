import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import ListItem from "@tiptap/extension-list-item";
import Image from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Toolbar from "./Toolbar";

type Props = {
  description: string;
  onChange: (richText: string) => void;
};

const Tiptap = ({ description, onChange }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false, // Disable the heading from StarterKit
        // The ordered list is included in StarterKit by default
      }),
      Heading.configure({
        levels: [1, 2, 3],
        HTMLAttributes: {
          class: "font-bold",
        },
      }),
      ListItem.configure({ HTMLAttributes: { class: "list-disc ml-4" } }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto my-4",
        },
      }),
      Table.configure({
        HTMLAttributes: {
          class: "border-collapse table-auto w-full my-4",
        },
      }),
      TableRow.configure(),
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
          font-size: 1.8em;
          margin-top: 0.5em;
          margin-bottom: 0.3em;
        }
        .ProseMirror h2 {
          font-size: 1.5em;
          margin-top: 0.4em;
          margin-bottom: 0.2em;
        }
        .ProseMirror h3 {
          font-size: 1.3em;
          margin-top: 0.3em;
          margin-bottom: 0.1em;
        }
        .ProseMirror p {
          margin-top: 0.5em;
          margin-bottom: 0.5em;
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
