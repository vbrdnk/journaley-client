'use client';

import { useEditor, EditorContent, FloatingMenu, BubbleMenu, EditorProvider } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import StarterKit from '@tiptap/starter-kit';

import { MenuBar } from './MenuBar';

export const TextEditor = (): JSX.Element | null => {
    const editor = useEditor({
        extensions: [StarterKit, Highlight, TaskList, TaskItem],
        content: '<p>Hello World! 🌍</p>',
    });

    if (!editor) {
        return null;
    }

    return <div className="editor">
        {editor && <MenuBar editor={editor} />}
        <EditorContent editor={editor} className='editor__content'/>
        {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
        {/* <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
    </div>
};

