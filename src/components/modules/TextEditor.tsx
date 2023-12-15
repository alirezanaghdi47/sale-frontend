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
    LuItalic,
    LuList,
    LuListOrdered,
    LuMinus,
    LuPaintbrush2,
    LuRotateCcw,
    LuRotateCw,
    LuStrikethrough,
} from "react-icons/lu";

// components
import {IconButton} from "@/components/modules/IconButton";
import SelectBox from "@/components/modules/SelectBox";

// styles
import "@/styles/customize/tiptap.scss";

// utils
import {colorList, sizeList} from "@/utils/constants";

const Toolbar = ({editor, ...props}) => {

    if (!editor) return null;

    return (
        <ul className="flex flex-wrap justify-start items-center gap-2 w-full">

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

            <li className="w-[0.5px] h-[16px] bg-gray"/>

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

            <li className="w-[0.5px] h-[16px] bg-gray"/>

            <li className='min-w-[100px]'>
                <SelectBox
                    name="color"
                    options={colorList}
                    placeholder="رنگ"
                    value={colorList.find(colorItem => colorItem.value === editor.getAttributes('textStyle').color)}
                    onChange={(item) => editor.chain().focus().setColor(item.value).run()}
                />
            </li>

            <li className="w-[0.5px] h-[16px] bg-gray"/>

            <li className='min-w-[100px]'>
                <SelectBox
                    name="size"
                    options={sizeList}
                    placeholder="اندازه"
                    value={sizeList.find(sizeItem => sizeItem.value === editor.getAttributes('heading').level)}
                    onChange={(item) => editor.chain().focus().toggleHeading({level: item.value}).run()}
                />
            </li>

            <li className="w-[0.5px] h-[16px] bg-gray"/>

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

            <li className="w-[0.5px] h-[16px] bg-gray"/>

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
        <div className="flex flex-col justify-start items-start gap-y-4 w-full h-full bg-secondary rounded-lg">

            <Toolbar
                editor={editor}
                className="toolbar"
            />

            <EditorContent
                editor={editor}
                className='w-full h-full max-h-[320px] overflow-y-scroll'
            />

        </div>
    )
}

export default TextEditor;