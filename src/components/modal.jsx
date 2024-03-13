import Button from "./button";

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content mt-10 flex flex-col items-center space-y-4">
        <h1 className="text-white text-4xl">{title}</h1>
        {children}
        <Button text="Close" style="bg-gray-200 text-violet-500 hover:bg-gray-400 hover:text-black px-12 text-xl rounded-lg py-2 transition duration-300 ease-in-out" func={onClose}></Button>
      </div>
    </div>
  );
};

export default Modal;