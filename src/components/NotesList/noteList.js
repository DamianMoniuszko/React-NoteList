import { useState } from "react";
import { NOTES } from "./data";
import Note from "../Note/note";

const NoteList = () => {
   
    const [currentNotes, setCurrentNotes] = useState(NOTES)

    const deleteNote = (noteId) => {
        setCurrentNotes(currentNotes.filter((note) => note.id !== noteId))
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-80 text-center">
            {currentNotes.map(
                (currentNote) => (
                    <Note 
                        key = {currentNote.id}
                        title={currentNote.title} 
                        description={currentNote.description} 
                        deleteNote = {() => deleteNote(currentNote.id)}
                    />
                )
            )}
        </div>
    )
}

export default NoteList;


