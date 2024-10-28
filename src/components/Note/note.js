import { useState } from "react";
import Modal from "../Modal/modal";

const Note = ({title, description, deleteNote}) => {
    const [showDescription, setShowDescription] = useState(false);
    const [IsModal, setIsModal] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(title);
    const [currentDescription, setCurrentDescription] = useState(description);

    const handleClick = () => {
        setShowDescription(prevState => !prevState);
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-70 text-center">
            <button 
            onClick={() => handleClick()} 
            className="text-xl font-bold text-blue-600 mb-2">
                <h2>{currentTitle}</h2>
            </button>
            
            {showDescription && <p className="text-gray-700 mb-4">{currentDescription}</p>}
            
            <div>
            <button 
            type="button" 
            className="bg-yellow-400 text-white py-1 px-4 mx-2 rounded "
            onClick={() => setIsModal(true)}>
                Edytuj
            </button>

            <button 
            type="button" 
            className="bg-red-600 text-white py-1 px-4 rounded"
            onClick={deleteNote}>
                Usuń
            </button>

            <Modal active={IsModal}>
                <h2 className="text-2xl font-bold mb-8">Edytuj</h2>
                <form className="flex flex-col gap-2">  
                    <label for='title'>Title</label>
                    
                    <input 
                    id="title" 
                    name="title" 
                    type="text" 
                    value={currentTitle}
                    onChange={(event) => setCurrentTitle(event.target.value)} />
                    
                    <label for='description'>Description</label>

                    <input 
                    id="description" 
                    name="description" 
                    type="text" 
                    value={currentDescription}
                    onChange={(event) => setCurrentDescription(event.target.value)} />

                    <button 
                    type="button"
                    className="bg-blue-300 text-white py-2 px-4 rounded"
                    onClick = {() => setIsModal(false)}>
                        Zapisz
                    </button>
                </form>
            </Modal>
            </div>             
        </div>
    )
}

export default Note;