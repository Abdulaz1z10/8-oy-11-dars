import { $apiAuth } from "@/api/interceptors"
import { IAuthPromise, ISignInPayload, ISignUpPayload,} from "@/types/auth.types"
import { cookies } from "next/headers"

export const signUp =async(data:ISignUpPayload):Promise<IAuthPromise | undefined>=>{
    try{
        const response = await $apiAuth.post("/auth/signup", data)
        return response?.data
    }catch(error){
        console.log(error, "error")
    }
}

export const signIn =async(data: ISignInPayload): Promise<IAuthPromise | undefined>=>{
    try{
        const response = await $apiAuth.post("/auth/signin", data)
        cookies().set("token", response?.data?.tokens?.access_token)
        return response?.data
    }catch(error){
        console.log(error, "error")
    }
}