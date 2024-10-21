import { useState } from "react";
import { NOTES } from "./data";
import Note from "../Note/note";

const NoteList = () => {
    console.log(NOTES);

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-80 text-center">
            {NOTES.map(
                (currentNote) => (
                    <Note title={currentNote.title} description={currentNote.description} />
                )
            )}
        </div>
    )
}

export default NoteList;


