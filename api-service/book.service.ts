import { IBook } from "@/types/book.types"
import { $api } from '@/api/interceptors';

//create
export const createBook =async(data: IBook)=>{
    try{
        const response = await $api.post("/book/create", data)
        console.log(response)
    }catch(error){
        console.log(error, "error")
    }
}

//update
export const updateBook =async(data: IBook)=>{
    try{
        const response = await $api.post("/book/update", data)
        console.log(response)
    }catch(error){
        console.log(error, "error")
    }
}

//delete
export const deleteBook =async(data: id) => {
    try {
        const response = await $api.delete(`/book/delete/${id}`, data);
        console.log(response);
    } catch (error) {
        console.error(error, "error");
    }
};
