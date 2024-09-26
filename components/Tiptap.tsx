"use client"

import React from "react"
import { useEditor, EditorContent, Editor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import Link from "@tiptap/extension-link"
import Image from "@tiptap/extension-image"
import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
import TextStyle from "@tiptap/extension-text-style"
import Table from "@tiptap/extension-table"
import TableRow from "@tiptap/extension-table-row"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import TaskList from "@tiptap/extension-task-list"
import TaskItem from "@tiptap/extension-task-item"
import Youtube from "@tiptap/extension-youtube"
import Highlight from "@tiptap/extension-highlight"
import TextAlign from "@tiptap/extension-text-align"
import Toolbar from "./Toolbar"

type Props = {
  description: string
  onChange: (richText: string) => void
}

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
        types: ['heading', 'paragraph'],
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
      onChange(editor.getHTML())
    },
  })

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent className="prose max-w-none" editor={editor} />
    </div>
  )
}

export default Tiptap