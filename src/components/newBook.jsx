import { useState } from "react";
import Modal from "./modal";
import Button from "./button";
import { Helmet } from "react-helmet";

const NewBook = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    type: "",
  });
  return (
    <div className="flex flex-col items-center bg-violet-500 h-screen w-full">
      <Helmet>
        <title>New Book</title>
        <meta name="description" content="New Book" />
      </Helmet>
      {modal.type === "" && (
        <h1 className="text-3xl text-white pt-10 animate-pulse">New Book</h1>
      )}
      {modal.type === "CREATE" && (
        <Modal
          isOpen={true}
          onClose={() => setModal({ ...modal, type: "" })}
          title="Create New a Book"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Title"
                className="px-4 m-2 rounded-lg py-2 outline-none"
              />
              <input
                type="text"
                placeholder="Title"
                className="px-4 m-2 rounded-lg py-2 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Title"
                className="px-4 m-2 rounded-lg py-2 outline-none"
              />
              <input
                type="text"
                placeholder="Title"
                className="px-4 m-2 rounded-lg py-2 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Title"
                className="px-4 m-2 rounded-lg py-2 outline-none"
              />
              <input
                type="text"
                placeholder="Title"
                className="px-4 m-2 rounded-lg py-2 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Title"
                className="px-4 m-2 rounded-lg py-2 outline-none"
              />
              <input
                type="text"
                placeholder="Title"
                className="px-4 m-2 rounded-lg py-2 outline-none"
              />
            </div>
          </div>
        </Modal>
      )}
      {modal.type === "EDIT" && (
        <Modal
          isOpen={true}
          onClose={() => setModal({ ...modal, type: "" })}
          title="Edit a Book"
        >
          <></>
        </Modal>
      )}
      {modal.type === "DELETE" && (
        <Modal
          isOpen={true}
          onClose={() => setModal({ ...modal, type: "" })}
          title="Delete a Book"
        >
          <></>
        </Modal>
      )}
      {modal.type === "VIEW" && (
        <Modal
          isOpen={true}
          onClose={() => setModal({ ...modal, type: "" })}
          title="Showing all Books"
        >
          <></>
        </Modal>
      )}
      {modal.type === "" && (
        <div className="flex flex-col space-y-10 pt-4">
          <Button
            text="Create"
            style="bg-gray-200 text-violet-500 hover:bg-gray-400 hover:text-black px-12 text-xl rounded-lg py-2 transition duration-300 ease-in-out"
            type="SUBMIT"
            func={() => setModal({ ...modal, type: "CREATE" })}
          ></Button>
          <Button
            text="Edit"
            style="bg-gray-200 text-violet-500 hover:bg-gray-400 hover:text-black px-12 text-xl rounded-lg py-2 transition duration-300 ease-in-out"
            type="SUBMIT"
            func={() => setModal({ ...modal, type: "EDIT" })}
          ></Button>
          <Button
            text="Delete"
            style="bg-gray-200 text-violet-500 hover:bg-gray-400 hover:text-black px-12 text-xl rounded-lg py-2 transition duration-300 ease-in-out"
            type="SUBMIT"
            func={() => setModal({ ...modal, type: "DELETE" })}
          ></Button>
          <Button
            text="View Books"
            style="bg-gray-200 text-violet-500 hover:bg-gray-400 hover:text-black px-12 text-xl rounded-lg py-2 transition duration-300 ease-in-out"
            type="SUBMIT"
            func={() => setModal({ ...modal, type: "VIEW" })}
          ></Button>
        </div>
      )}
    </div>
  );
};

export default NewBook;
