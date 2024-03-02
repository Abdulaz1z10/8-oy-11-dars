"use client";
import React, { ChangeEvent, useState, } from "react";
import { $api } from "@/api/interceptors";
import { createBook, updateBook } from "@/api-service/book.service";
import { IBook } from "@/types/book.types";
import {Modal} from "reactstrap"

const BookModal = ({open, toggle}) => {
  const [file, setFile] = useState("");
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files && e.target.files[0];
    let form = new FormData();
    form.append("file", file as Blob);
    const response = await $api.post("/files/upload", form);
    setFile(response?.data);
  };
  const handleSubmit = async (formData: FormData) => {
    const payload: IBook = {
      name: formData.get("name"),
      price: Number(formData.get("price")),
      code: formData.get("code"),
      author_id: Number(formData.get("author_id")),
      janr_id: Number(formData.get("janr_id")),
      description: formData.get("description"),
      image: file,
    };
    await createBook({ ...payload });
  };

  return (
      <div className=" w-[20%] h-screen flex flex-col items-center justify-center">
          <Modal isOpen={open} toggle={toggle}>
        <form
          action={handleSubmit}
          className="w-[600px] ml-[600px] mb-[200px] min-h-96 p-[20px] border-[1px]"
        >
          <input type="file" onChange={handleFileChange} />
          <input
            type="text"
            placeholder="name"
            name="name"
            className="w-full p-3 my-3 rounded-md border-[1px] border-slate-900"
          />
          <input
            type="number"
            placeholder="price"
            name="price"
            className="w-full p-3 my-3 rounded-md border-[1px] border-slate-900"
          />
          <input
            type="number"
            placeholder="code"
            name="code"
            className="w-full p-3 my-3 rounded-md border-[1px] border-slate-900"
          />
          <select
            name="author_id"
            className="w-full p-3 my-3 rounded-md border border-slate-900"
          >
            <option value="100">100</option>
            <option value="101">101</option>
            <option value="102">102</option>
          </select>
          <select
            name="janr_id"
            className="w-full p-3 my-3 rounded-md border border-slate-900"
          >
            <option value="61">61</option>
            <option value="45">45</option>
            <option value="47">47</option>
          </select>
          <textarea
            name="description"
            placeholder="Description"
            className="w-full border border-slate-900"
            cols={30}
            rows={10}
          ></textarea>
          <button className="w-full border bg-slate-900 text-white p-3 rounded-lg" onClick={()=>updateBook()}>Save</button>
        </form>
    </Modal>
      </div>
  );
};

export default BookModal;

