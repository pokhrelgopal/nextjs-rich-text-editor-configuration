"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Image,
  Table,
  RowsIcon,
  ColumnsIcon,
  Trash2,
  Plus,
  Minus,
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  editor: Editor | null;
};

export default function Toolbar({ editor }: Props) {
  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt("Enter the URL of the image:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addTable = () => {
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  };

  return (
    <div className="border border-input bg-transparent rounded-md mb-2 w-fit">
      <div className="flex flex-wrap gap-1 p-1">
        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 1 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <Heading1 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 2 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Heading2 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 3 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          <Heading3 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("strike")}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("bulletList")}
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
        >
          <List className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("orderedList")}
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
        >
          <ListOrdered className="h-4 w-4" />
        </Toggle>
        <Button size="sm" variant="ghost" onClick={addImage}>
          <Image className="h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="sm"
              variant="ghost"
              className={editor.isActive("table") ? "bg-muted" : ""}
            >
              <Table className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem onSelect={addTable}>
                <Plus className="mr-2 h-4 w-4" />
                <span>Insert Table</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => editor.chain().focus().addColumnBefore().run()}
              >
                <ColumnsIcon className="mr-2 h-4 w-4" />
                <span>Add Column Before</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => editor.chain().focus().addColumnAfter().run()}
              >
                <ColumnsIcon className="mr-2 h-4 w-4" />
                <span>Add Column After</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => editor.chain().focus().deleteColumn().run()}
              >
                <Minus className="mr-2 h-4 w-4" />
                <span>Delete Column</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => editor.chain().focus().addRowBefore().run()}
              >
                <RowsIcon className="mr-2 h-4 w-4" />
                <span>Add Row Before</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => editor.chain().focus().addRowAfter().run()}
              >
                <RowsIcon className="mr-2 h-4 w-4" />
                <span>Add Row After</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => editor.chain().focus().deleteRow().run()}
              >
                <Minus className="mr-2 h-4 w-4" />
                <span>Delete Row</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => editor.chain().focus().deleteTable().run()}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Delete Table</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
