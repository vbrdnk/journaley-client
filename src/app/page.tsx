'use client';

import { useEffect, useState } from 'react';

type JournalEntry = {
  timestamp: Date;
  title: string;
  context: string;
};

export default function Home() {
  const [journalEntries, addJournalEntry] = useState<Array<JournalEntry>>([]);

  const onAddJournalEntry = () => {
    addJournalEntry((prevState) => {
      const dateCreated = new Date();
      const entry = {
        timestamp: dateCreated,
        title: dateCreated.toUTCString(),
        context: 'This is a test journal entry',
      };

      return [...prevState, entry];
    });
  };

  useEffect(() => {
    console.log('journalEntries:', journalEntries);
  }, [journalEntries]);

  return (
    <main className="flex min-h-screen flex-col  justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex h-full w-96 flex-col border-b border-gray-300 bg-white p-10 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          <button onClick={onAddJournalEntry}>+</button>
          <ul>
            {journalEntries.map((entry) => (
              <li key={entry.timestamp.getUTCSeconds()}>{entry.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
