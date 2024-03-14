import axios from "axios";
const url = process.env.BACKEND_CONNECTION + "/test"

async function getBooks() {
  const options = {
    method: "GET",
    url: url+"/getLibros",
  };
  const response = await axios.request(options)
  return response.data;
}

async function createBook(book) {
  const options = {
    method: "POST",
    url: url+"/postLibros",
    body: book,
  };
  const response = await axios.request(options)
  return response.data;
}

export default {
  getBooks,
  createBook
};
