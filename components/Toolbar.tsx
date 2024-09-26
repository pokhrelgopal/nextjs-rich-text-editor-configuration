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
  Heading4,
  Heading5,
  Heading6,
  Image,
  Table,
  RowsIcon,
  ColumnsIcon,
  Trash2,
  Plus,
  Minus,
  Code,
  Highlighter,
  Link,
  Subscript,
  Superscript,
  Underline,
  Quote,
  Minus as HorizontalRule,
  Youtube,
  CheckSquare,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Pilcrow,
  ChevronDown,
  MoreHorizontal,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

  const addYoutubeVideo = () => {
    const url = window.prompt("Enter the YouTube video URL:");
    if (url) {
      editor.commands.setYoutubeVideo({ src: url });
    }
  };

  const addLink = () => {
    const url = window.prompt("Enter the URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
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
    <TooltipProvider>
      <div className="border border-input bg-transparent rounded-md mb-2 w-fit">
        <div className="flex flex-wrap gap-1 p-1">
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex items-center gap-1"
                  >
                    {editor.isActive("paragraph") ? (
                      <Pilcrow className="h-4 w-4" />
                    ) : editor.isActive("heading", { level: 1 }) ? (
                      <Heading1 className="h-4 w-4" />
                    ) : editor.isActive("heading", { level: 2 }) ? (
                      <Heading2 className="h-4 w-4" />
                    ) : editor.isActive("heading", { level: 3 }) ? (
                      <Heading3 className="h-4 w-4" />
                    ) : editor.isActive("heading", { level: 4 }) ? (
                      <Heading4 className="h-4 w-4" />
                    ) : editor.isActive("heading", { level: 5 }) ? (
                      <Heading5 className="h-4 w-4" />
                    ) : editor.isActive("heading", { level: 6 }) ? (
                      <Heading6 className="h-4 w-4" />
                    ) : (
                      <Pilcrow className="h-4 w-4" />
                    )}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>Paragraph / Heading</TooltipContent>
            </Tooltip>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onSelect={() => editor.chain().focus().setParagraph().run()}
                >
                  <Pilcrow className="mr-2 h-4 w-4" />
                  <span>Paragraph</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                  }
                >
                  <Heading1 className="mr-2 h-4 w-4" />
                  <span>Heading 1</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                >
                  <Heading2 className="mr-2 h-4 w-4" />
                  <span>Heading 2</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                  }
                >
                  <Heading3 className="mr-2 h-4 w-4" />
                  <span>Heading 3</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() =>
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                  }
                >
                  <Heading4 className="mr-2 h-4 w-4" />
                  <span>Heading 4</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() =>
                    editor.chain().focus().toggleHeading({ level: 5 }).run()
                  }
                >
                  <Heading5 className="mr-2 h-4 w-4" />
                  <span>Heading 5</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() =>
                    editor.chain().focus().toggleHeading({ level: 6 }).run()
                  }
                >
                  <Heading6 className="mr-2 h-4 w-4" />
                  <span>Heading 6</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("bold")}
                onPressedChange={() => editor.chain().focus().toggleBold().run()}
              >
                <Bold className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Bold</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("italic")}
                onPressedChange={() => editor.chain().focus().toggleItalic().run()}
              >
                <Italic className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Italic</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("underline")}
                onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
              >
                <Underline className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Underline</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("strike")}
                onPressedChange={() => editor.chain().focus().toggleStrike().run()}
              >
                <Strikethrough className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Strikethrough</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("code")}
                onPressedChange={() => editor.chain().focus().toggleCode().run()}
              >
                <Code className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Code</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("highlight")}
                onPressedChange={() => editor.chain().focus().toggleHighlight().run()}
              >
                <Highlighter className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Highlight</TooltipContent>
          </Tooltip>
          <div className="border-r border-gray-300"></div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("bulletList")}
                onPressedChange={() =>
                  editor.chain().focus().toggleBulletList().run()
                }
              >
                <List className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Bullet List</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("orderedList")}
                onPressedChange={() =>
                  editor.chain().focus().toggleOrderedList().run()
                }
              >
                <ListOrdered className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Ordered List</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("taskList")}
                onPressedChange={() => editor.chain().focus().toggleTaskList().run()}
              >
                <CheckSquare className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Task List</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("blockquote")}
                onPressedChange={() =>
                  editor.chain().focus().toggleBlockquote().run()
                }
              >
                <Quote className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Blockquote</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
              >
                <HorizontalRule className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Horizontal Rule</TooltipContent>
          </Tooltip>
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex items-center gap-1"
                  >
                    {editor.isActive({ textAlign: "left" }) ? (
                      <AlignLeft className="h-4 w-4" />
                    ) : editor.isActive({ textAlign: "center" }) ? (
                      <AlignCenter className="h-4 w-4" />
                    ) : editor.isActive({ textAlign: "right" }) ? (
                      <AlignRight className="h-4 w-4" />
                    ) : editor.isActive({ textAlign: "justify" }) ? (
                      <AlignJustify className="h-4 w-4" />
                    ) : (
                      <AlignLeft className="h-4 w-4" />
                    )}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>Text Alignment</TooltipContent>
            </Tooltip>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onSelect={() =>
                    editor.chain().focus().setTextAlign("left").run()
                  }
                >
                  <AlignLeft className="mr-2 h-4 w-4" />
                  <span>Align Left</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() =>
                    editor.chain().focus().setTextAlign("center").run()
                  }
                >
                  <AlignCenter className="mr-2 h-4 w-4" />
                  <span>Align Center</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() =>
                    editor.chain().focus().setTextAlign("right").run()
                  }
                >
                  <AlignRight className="mr-2 h-4 w-4" />
                  <span>Align Right</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() =>
                    editor.chain().focus().setTextAlign("justify").run()
                  }
                >
                  <AlignJustify className="mr-2 h-4 w-4" />
                  <span>Justify</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="border-r border-gray-300"></div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="ghost" onClick={addLink}>
                <Link className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add Link</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="ghost" onClick={addImage}>
                <Image className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add Image</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="ghost" onClick={addYoutubeVideo}>
                <Youtube className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add YouTube Video</TooltipContent>
          </Tooltip>
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    className={`flex items-center gap-1 ${
                      editor.isActive("table") ? "bg-muted" : ""
                    }`}
                  >
                    <Table className="h-4 w-4" />
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>Table</TooltipContent>
            </Tooltip>
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
          <div className="border-r border-gray-300"></div>
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex items-center gap-1"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>More Options</TooltipContent>
            </Tooltip>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onSelect={() => editor.chain().focus().toggleSubscript().run()}
                >
                  <Subscript className="mr-2 h-4 w-4" />
                  <span>Subscript</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => editor.chain().focus().toggleSuperscript().run()}
                >
                  <Superscript className="mr-2 h-4 w-4" />
                  <span>Superscript</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </TooltipProvider>
  );
}