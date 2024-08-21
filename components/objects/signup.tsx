"use client"
import { useState } from "react"
import { LabelledInput } from "./textinput"
import { FcGoogle } from "react-icons/fc"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { CreateUser } from "@/lib/actions/createUser"

interface CreateUserResponse {
    message: string;
}
export function SignUp(){    
    const router = useRouter()
    const  [email , setEmail ] = useState("")
    const  [password , setPassword ] = useState("")
    const  [firstName , setFirstName ] = useState("")
    const  [lastName , setLastName] = useState("")
    const  [notification , setNotification] = useState(false)

return <div>
            <div>              
                <LabelledInput label="First Name" placeholder="carl" onChange={(value)=>{
                    setFirstName(value)
                }} />
                <LabelledInput label="Last Name" placeholder="doe" onChange={(value)=>{
                    setLastName(value)
                }} />
                <LabelledInput label="email" placeholder="123@gmail.com" onChange={(value)=>{
                    setEmail(value)
                }} />
                <LabelledInput label="password" placeholder="ad13123@" onChange={(value)=>{
                    setPassword(value)
                }} />
            </div>

    <div className="my-4 pt-1 ml-14 ">
                <button onClick={async()=>{
                    if(!firstName || !lastName || !email || !password ){
                        setNotification(true)
                    }
                    if(firstName && lastName && email && password ){
                        setNotification(false)
                        const resp : CreateUserResponse  = await  CreateUser({ firstName , lastName, email, password })
                             if(resp.message === 'User created successfully' ){
                                const signin = await signIn('credentials',{
                                    email : email,
                                    password : password
                                })
                                if(signin?.ok){
                                    router.push("/")
                                }
                             }
                    }

                }} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-32">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        signup
                    </span>
                </button>
            <button onClick={async()=>{
                await signIn("google")
            }} className=" mt-2 -ml-7 flex items-center p-1 text-black bg-gray-200 rounded">
                    <FcGoogle size={24} className="mr-2" />
                Sign in with Google
            </button>
                {notification && (
                  <div className="absolute top-20 h-14 -ml-12 w-56 p-4 pl-10 bg-red-500 text-white right">
                    input are not given 
                  </div>
                )}
      </div>
      <div>

    </div>

        </div>
}
                