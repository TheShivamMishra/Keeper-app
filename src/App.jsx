import React, { useState } from "react";
import Heading from "./heading";
import Footer from "./Footer";
import Note from "./Note";
import InsertComp from "./InsertComp";


function App() {
  const [notesArr, setNotes] = useState([]);

  function addNotes(newNote) {
    const note = {
      title: newNote.title,
      content: newNote.content,
    };
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />
      <InsertComp onAdd={addNotes} />
      <div className="notes-container">
        {notesArr.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              onDelete={deleteNote}
              title={noteItem.title}
              content={noteItem.content}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
