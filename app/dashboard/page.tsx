"use client"
import { useEffect, useState } from "react";
import BookModal from "./bookModal/page";
import Menu from "../menu/page";
import { $api } from '@/api/interceptors';

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [books, setBooks] = useState([]);
  const [edit, setEdit] = useState("");

  const toggle = () => {
    setModal(false);
    setEdit("");
  };

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await $api.get("/book");
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await $api.delete(`/book/delete/${id}`);
      getBooks(); // Refresh book list after deletion
    } catch (error) {
      console.error(error);
    }
  };

  const updateBook = (item) => {
    setEdit(item);
    setModal(true);
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="w-[300px] h-[100vh]">
        <Menu />
      </div>
      <div className="flex ">
        <BookModal open={modal} toggle={toggle} />
        <button
          className="text-2xl border-[2px] border-slate-900 w-[100px] h-[50px]"
          onClick={() => setModal(true)}
        >
          get books
        </button>
        {books.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-white w-[250px] h-[400px] p-[10px]"
          >
            <img
              src={item.image}
              className="w-[250px] h-[200px] rounded-xl"
              alt=""
            />
            <h1 className="text-[25px] ml-[20px]">Name: {item.name}</h1>
            <h1 className="text-[25px] ml-[20px]">Price: {item.price}</h1>
            <h1 className="text-[25px] ml-[20px]">Code: {item.code}</h1>
            <h1 className="text-[25px] ml-[20px]">Author: {item.author_id}</h1>
            <h1 className="text-[25px] ml-[20px]">Janr: {item.price}</h1>
            <h1 className="text-[25px] ml-[20px]">Desc: {item.description}</h1>
            <div className="flex justify-around">
              <button
                onClick={() => updateBook(item)}
                className="w-[100px] bg-sky-600 p-[10px] text-white rounded-xl"
              >
                Edit
              </button>
              <button
                onClick={() => deleteBook(item.id)}
                className="w-[100px] bg-red-500 p-[10px] text-white rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
