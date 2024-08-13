

export default function signup() {
    
    return <div className="h-screen flex justify-center flex-col ">
         <div className="hidden lg:block absolute -top-[5rem] -right-[10%] bg-primary-pink w-72 h-72 rounded-full z-10 blur-[14rem]"></div>
         <div className="hidden lg:block absolute -bottom-20 -left-1/4 bg-primary-blue w-96 h-72 rounded-full z-100 blur-[14rem]"></div>
        
        <div className="flex justify-center ">
        <a href="#" className="block max-w-[30rem] p-8  border border-slate-600 rounded-lg shadow  ">
                <div>
                    <div className="px-10 pt-2 ">
                        <div className="text-3xl ml-5 font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-700 text-transparent bg-clip-text">   
                            Sign up
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput label="Firstname" placeholder="carl" />
                        <LabelledInput label="lastname" placeholder="doe" />
                        <LabelledInput label="email" placeholder="carl@gmail.com" />
                        <LabelledInput label="Password" type={"password"} placeholder="123456" />
                        </div>
                        <div className="mt-7 ml-14 ">
                        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-32">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            signup
                            </span>
                        </button>

                        </div>

                </div>
            </a>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-white font-semibold pt-3">{label}</label>
        <input type={type || "text"} id="first_name" className="bg-zinc-900 border border-slate-600 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-10 w-full p-2.5" placeholder={placeholder} required />
    </div>
}