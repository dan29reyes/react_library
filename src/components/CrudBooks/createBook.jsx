import { useState } from "react";
import Button from "../button";

//Services
import BookService from "../../Services/book-service";

const CreateBook = () => {
  const [book, setBook] = useState({
    _id: null,
    nombre: "",
    author: "",
    pag: 1,
    publicacion: "",
    editorial: "",
    ISBN: "",
    genero: "",
    edicion: 1,
  });

  const handleSubmit = async () => {
    try {
      const resp = await BookService.createBook(book);
      console.log(resp);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col space-y-2 mb-4">
        <label className="text-lg text-white">Book Name</label>
        <input
          type="text"
          className="px-4 rounded-lg py-2 outline-none w-full"
          name="nombre"
          onClick={(e) => {
            setBook({ ...book, nombre: e.target.value });
          }}
        />
      </div>
      <div className="flex flex-col space-y-2 mb-4">
        <label className="text-lg text-white">Author</label>
        <input
          type="text"
          className="px-4 rounded-lg py-2 outline-none w-full"
          name="author"
          onClick={(e) => {
            setBook({ ...book, author: e.target.value });
          }}
        />
      </div>
      <div className="flex w-full space-x-4 mb-4">
        <div className="flex flex-col space-y-2 w-1/2">
          <label className="text-lg text-white">Id</label>
          <input
            type="text"
            className="px-4 rounded-lg py-2 outline-none"
            name="_id"
            onClick={(e) => {
              setBook({ ...book, _id: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col space-y-2 w-1/2">
          <label className="text-lg text-white">Number of Pages</label>
          <input
            type="number"
            className="px-4 rounded-lg py-2 outline-none"
            name="pag"
            onClick={(e) => {
              setBook({ ...book, pag: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2 w-full mb-4">
        <label className="text-lg text-white">Date of Publish</label>
        <input
          type="date"
          className="px-4 rounded-lg py-2 outline-none"
          name="publicacion"
          onClick={(e) => {
            setBook({ ...book, publicacion: e.target.value });
          }}
        />
      </div>
      <div className="flex w-ful space-x-4 mb-4">
        <div className="flex flex-col space-y-2 w-full">
          <label className="text-lg text-white">Editorial</label>
          <input
            type="text"
            className="px-4 rounded-lg py-2 outline-none"
            name="editorial"
            onClick={(e) => {
              setBook({ ...book, editorial: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <label className="text-lg text-white">ISBN</label>
          <input
            type="text"
            className="px-4 rounded-lg py-2 outline-none"
            name="ISBN"
            onClick={(e) => {
              setBook({ ...book, ISBN: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="flex w-full space-x-4 mb-4">
        <div className="flex flex-col space-y-2 w-1/2">
          <label className="text-lg text-white">Genre</label>
          <input type="text" className="px-4 rounded-lg py-2 outline-none" />
        </div>
        <div className="flex flex-col space-y-2 w-1/2">
          <label className="text-lg text-white">Book Edition</label>
          <input
            type="number"
            placeholder="Edition"
            className="px-4 rounded-lg py-2 outline-none"
          />
        </div>
      </div>
      <Button text="Create" style="" type="submit" func={()=>handleSubmit()}/>
    </div>
  );
};

export default CreateBook;
