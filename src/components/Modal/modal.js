const Modal = ({ setIsModal }) => {
    return (
        <div className="absolute inset-0 m-auto bg-gray-200 flex justify-center items-center" >
            <div className="flex flex-col bg-gray-100 gap-2 p-10 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-8">Edytuj</h2>
                <form className="flex flex-col gap-2">  
                    <label for='title'>Title</label>
                    <input id="title" name="title" type="text" />
                    <label for='description'>Description</label>
                    <input id="description" name="description" type="text" />
                    <button 
                    type="submit"
                    className="bg-blue-300 text-white py-2 px-4 rounded"
                    onClick = {() => setIsModal(false)}>
                        Zapisz
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal