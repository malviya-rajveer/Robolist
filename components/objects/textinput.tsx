"use client"
interface props{
    label :string;
    placeholder :string;
    onChange : (value: string) => void;
    type?: string;

}   
export function LabelledInput({  label ,placeholder, onChange , type }:props){
    return  <div>
    <label className="block mb-2 text-sm text-white font-semibold pt-3">{label}</label>
    <input  onChange={(e) => onChange(e.target.value)} type={type || "text"} id="first_name" className="bg-zinc-900 border border-slate-600 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-10 w-full p-2.5" placeholder={placeholder} required />
</div>
}