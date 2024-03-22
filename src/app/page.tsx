'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

import { TextEditor } from './components/TextEditor/TextEditor';

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function load() {
      const response = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
      const data = await response.json(); 
      setBooks(data.docs);
    }

    // load();
  }, []);

  console.log(books);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className='tiptap'>
          <TextEditor />  
        </div>
      </div>
    </main>
  );
}
