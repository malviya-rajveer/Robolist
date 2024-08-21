"use client"
import { useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { LabelledInput } from "./textinput"

export function Signin(){
    const router = useRouter()
    const  [email , setEmail ] = useState("")
    const  [password , setPassword ] = useState("")

return <div>
            <div>              
                <LabelledInput label="email" placeholder="123@gmail.com" onChange={(value)=>{
                    setEmail(value)
                }} />
                <LabelledInput type="password" label="password" placeholder="ad1@sfw123" onChange={(value)=>{
                    setPassword(value)
                }} />
            </div>
    <div className="my-4 pt-1 ml-14 ">
                            <button onClick={async()=>{
                            const res =  await signIn('credentials',{
                                email : email,
                                password : password,
                                redirect : false
                             })
                             router.push("/")
                            }} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-32">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    signup
                                </span>
                            </button>
                            <button onClick={async()=>{
                                await signIn("google")
                            }} className=" mt-5 -ml-7 flex items-center p-2 text-black bg-gray-200 rounded">
                        <FcGoogle size={24} className="mr-2" />
                        Sign in with Google
                        </button>
                        </div>
          
        </div>
}
