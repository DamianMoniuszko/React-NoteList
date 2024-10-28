const Modal = ({children, active }) => {

    return active && (
        <div className="absolute inset-0 m-auto bg-gray-200 flex justify-center items-center" >
            <div className="flex flex-col bg-gray-100 gap-2 p-10 shadow-lg rounded-lg">
                {children}
            </div>
        </div>
    )
}

export default Modal