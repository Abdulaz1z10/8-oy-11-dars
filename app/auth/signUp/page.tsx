import { signUp } from '@/api-service/auth.service'
import { IAuthPromise, ISignUpPayload } from '@/types/auth.types'
import { redirect } from 'next/navigation'
import React from 'react'

interface formData {
  full_name: FormDataEntryValue | null;
  username: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

const SignUp = () => {
    const handleSubmit =async(formData:FormData)=>{
        "use server"
        let  full_name = formData.get("full_name")
        let username = formData.get("username");
        let password = formData.get("password");
        let payload:formData = {full_name, username, password}  
        const response: IAuthPromise | undefined = await signUp({...payload})
        console.log(response?.tokens, "token")
        if (response?.tokens) {
            redirect("/auth/signIn")
        }
    }
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-[30px] my-4">SignUp</h1>
      <form action={handleSubmit} className="w-[600px] min-h-96 p-[20px] border-[1px]">
        <input
          type="text"
          placeholder="full_name"
          name="full_name"
          className="w-full p-3 m-3 border-[1px] border-gray-950 rounded-md"
        />
        <input
          type="text"
          placeholder="username"
          name="username"
          className="w-full p-3 m-3 border-[1px] border-gray-950 rounded-md"
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          className="w-full p-3 m-3 border-[1px] border-gray-950 rounded-md"
        />
        <button className="w-full p-3 rounded-lg">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp
    