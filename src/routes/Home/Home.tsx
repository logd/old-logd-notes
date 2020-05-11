import React, { useContext, useState, useEffect } from "react";
import { Note } from "../../models";
import { Page, Editor } from "../../components";
import { API } from "aws-amplify";
import { AuthContext } from "../../providers";
import ReactMarkdown from "react-markdown/with-html";

function loadNotes() {
  return API.get("notes", "/notes", {});
}

const sortByCreatedAt = (a: Note, b: Note) => b.createdAt - a.createdAt;

export const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note>();

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }

      try {
        const notes: Note[] = await loadNotes();

        notes.sort(sortByCreatedAt);
        if (notes.length) {
          setActiveNote(notes[0]);
        }

        setNotes(notes);
      } catch (e) {
        console.log("e: ", e);
      }
    }

    onLoad();
  }, [isAuthenticated, notes]);

  return (
    <Page>
      <h1>Notes</h1>
      {notes.map((note: Note, index: number) => {
        if (activeNote && activeNote.noteId === note.noteId) {
          return (
            <Editor
              key={`${note.noteId}-${index.toString()}`}
              id={activeNote.noteId}
              content={activeNote.content}
            />
          );
        }
        return (
          <ReactMarkdown
            key={`${note.noteId}-${index.toString()}`}
            source={note.content}
            escapeHtml={false}
          />
        );
      })}
    </Page>
  );
};
