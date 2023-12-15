// libraries
import {EditorContent, useEditor} from '@tiptap/react';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Document from '@tiptap/extension-document';
import Italic from '@tiptap/extension-italic';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Heading from '@tiptap/extension-heading';
import Bold from '@tiptap/extension-bold';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import TextAlign from '@tiptap/extension-text-align';
import HardBreak from '@tiptap/extension-hard-break';
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import History from "@tiptap/extension-history";
import {
    LuAlignCenter,
    LuAlignLeft, LuAlignRight,
    LuBold,
    LuCornerDownLeft,
    LuHeading1,
    LuHeading2,
    LuHeading3,
    LuItalic,
    LuList,
    LuListOrdered,
    LuMinus,
    LuPaintbrush2,
    LuRotateCcw,
    LuRotateCw,
    LuStrikethrough,
    LuType
} from "react-icons/lu";

// components
import {IconButton} from "@/components/modules/IconButton";
import SelectBox from "@/components/modules/SelectBox";

// styles
import "@/styles/customize/tiptap.scss";

// utils
import {colorList} from "@/utils/constants";

const Toolbar = ({editor, ...props}) => {

    if (!editor) return null;

    return (
        <ul className="flex flex-wrap justify-center items-center gap-2 w-full">

            <li className='w-[100px]'>
                <SelectBox
                    name="color"
                    options={colorList}
                    placeholder="رنگ"
                    value={colorList.find(colorItem => colorItem.value === editor.getAttributes('textStyle').color)}
                    onChange={(item) => editor.chain().focus().setColor(item.value).run()}
                />
            </li>

            <li className="mr-2"/>

            <li>
                <IconButton
                    variant="contained"
                    color={editor.isActive('strike') ? "blue" : "secondary"}
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                >
                    <LuStrikethrough
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li>
                <IconButton
                    variant="contained"
                    color={editor.isActive('italic') ? "blue" : "secondary"}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                    <LuItalic
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li>
                <IconButton
                    variant="contained"
                    color={editor.isActive('bold') ? "blue" : "secondary"}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                >
                    <LuBold
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li className="mr-2"/>

            <li>
                <IconButton
                    variant="contained"
                    color={editor.isActive({textAlign: 'right'}) ? "blue" : "secondary"}
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                >
                    <LuAlignRight
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li>
                <IconButton
                    variant="contained"
                    color={editor.isActive({textAlign: 'center'}) ? "blue" : "secondary"}
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                >
                    <LuAlignCenter
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li>
                <IconButton
                    variant="contained"
                    color={editor.isActive({textAlign: 'left'}) ? "blue" : "secondary"}
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                >
                    <LuAlignLeft
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li className="mr-2"/>

            <li>
                <IconButton
                    variant="contained"
                    color={editor.isActive('heading', {level: 3}) ? "blue" : "secondary"}
                    onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                >
                    <LuHeading3
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li>
                <IconButton
                    variant="contained"
                    color={editor.isActive('heading', {level: 2}) ? "blue" : "secondary"}
                    onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                >
                    <LuHeading2
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li>
                <IconButton
                    variant="contained"
                    color={editor.isActive('heading', {level: 1}) ? "blue" : "secondary"}
                    onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                >
                    <LuHeading1
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li>
                <IconButton
                    variant="contained"
                    color={editor.isActive('paragraph') ? "blue" : "secondary"}
                    onClick={() => editor.chain().focus().setParagraph().run()}
                >
                    <LuType
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li className="mr-2"/>

            <li>
                <IconButton
                    variant="contained"
                    color={editor.isActive('bulletList') ? "blue" : "secondary"}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                >
                    <LuList
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li>
                <IconButton
                    variant="contained"
                    color={editor.isActive('orderedList') ? "blue" : "secondary"}
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                >
                    <LuListOrdered
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li>
                <IconButton
                    variant="contained"
                    color="secondary"
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                >
                    <LuMinus
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li>
                <IconButton
                    variant="contained"
                    color="secondary"
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                >
                    <LuCornerDownLeft
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li className="mr-2"/>

            <li>
                <IconButton
                    variant="contained"
                    color="secondary"
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}
                >
                    <LuPaintbrush2
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li>
                <IconButton
                    variant="contained"
                    color="secondary"
                    disabled={!editor.can().chain().focus().undo().run()}
                    onClick={() => editor.chain().focus().undo().run()}
                >
                    <LuRotateCcw
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

            <li>
                <IconButton
                    variant="contained"
                    color="secondary"
                    disabled={!editor.can().chain().focus().redo().run()}
                    onClick={() => editor.chain().focus().redo().run()}
                >
                    <LuRotateCw
                        size={16}
                        className="text-current"
                    />
                </IconButton>
            </li>

        </ul>
    )
}

const TextEditor = ({name , value , onChange}) => {

    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Underline,
            Bold,
            Italic,
            Strike,
            HardBreak,
            HorizontalRule,
            BulletList,
            OrderedList,
            ListItem,
            History.configure({
                depth: 10,
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
                defaultAlignment: 'right',
                alignments: ['left', 'center', 'right']
            }),
            Heading.configure({
                levels: [1, 2, 3, 4],
            }),
            TextStyle,
            Color,
        ],
        autofocus: false,
        content: value,
        name: name,
        onUpdate: ({editor}) => {
            onChange(editor.isEmpty ? "" : editor.getHTML());
        }
    });

    return (
        <>
            <Toolbar
                editor={editor}
                className="toolbar"
            />

            <EditorContent
                editor={editor}
                className='w-full min-h-[300px] h-full bg-secondary rounded-lg p-4'
            />
        </>
    )
}

export default TextEditor;