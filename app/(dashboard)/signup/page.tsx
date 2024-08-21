import { BottomWarning } from "@/components/objects/bottomWarning";
import { SignUp } from "@/components/objects/signup";


export default function signup() {
    
    return <div className="h-screen flex justify-center flex-col -m-6 ">
         <div className="hidden lg:block absolute -top-[5rem] -right-[10%] bg-primary-pink w-72 h-72 rounded-full z-10 blur-[14rem]"></div>
         <div className="hidden lg:block absolute -bottom-20 -left-1/4 bg-primary-blue w-96 h-72 rounded-full z-100 blur-[14rem]"></div>
        
        <div className="flex justify-center ">
        <a href="#" className="block max-w-[30rem] px-8 py-4  border border-slate-600 rounded-lg shadow  ">
                <div>
                    <div className="px-10 pt-2 ">
                        <div className="text-3xl ml-5 font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-700 text-transparent bg-clip-text">   
                            Sign up
                        </div>
                    </div>
                    <div className="">
                        <SignUp></SignUp>
                    </div>

                </div>
            </a>
        </div>
        <div className="z-10 -m-9  ">
            <BottomWarning label={"Already have an account?"} href={"/signin"} buttonText={"Sign In"}></BottomWarning> 
        </div>
    </div>
}