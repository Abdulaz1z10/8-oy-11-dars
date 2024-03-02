import { signIn } from '@/api-service/auth.service'
import { IAuthPromise, ISignInPayload,  } from '@/types/auth.types'
import { redirect } from 'next/navigation'
import React from 'react'

const SignIn = () => {
    const  handleSubmit =async(formData: FormData)=>{
        "use server"
        let username = formData.get("username")
        let password = formData.get("password")
        let payload : ISignInPayload = ({username, password})
        const response: IAuthPromise | undefined = await signIn({...payload})
        console.log(response?.tokens, "user-response")
        if (response?.tokens) {
            redirect("/dashboard")
        }
    }
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-[30px] my-4">SignUp</h1>
      <form
        action={handleSubmit}
        className="w-[600px] min-h-96 p-[20px] border-[1px]"
      >
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

export default SignIn
