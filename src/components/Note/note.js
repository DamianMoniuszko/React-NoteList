import { useState } from "react";
import Modal from "../Modal/modal";

const Note = ({title, description, active}) => {
    const [showDescription, setShowDescription] = useState(active);
    const [IsModal, setIsModal] = useState(false);

    const handleClick = () => {
        setShowDescription(prevState => !prevState);
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-70 text-center">
            <button onClick={() => handleClick()} className="text-xl font-bold text-blue-600 mb-2">
                <h2>{title}</h2>
            </button>
            {showDescription && <p className="text-gray-700 mb-4">{description}</p>}
            <div>
            <button type="button" 
            className="bg-yellow-400 text-white py-1 px-4 mx-2 rounded "
            onClick={() => setIsModal(true)}>
                Edytuj
            </button>

            <button type="button" 
            className="bg-red-600 text-white py-1 px-4 rounded">
                Usuń
            </button>

            {IsModal && (
                <Modal setIsModal = {setIsModal} />
            )}
            </div>             
        </div>
    )
}

export default Note;