import Link from "next/link"

interface props{
    label :string
    href : string
    buttonText : string
}
export function BottomWarning({label , href , buttonText }:props) {
return <div className = "py-2 text-sm flex justify-center">
        <div>
            {label}
        </div>
        <Link className = "pointer underline pl-1 cursor-pointer" href= {href}>
        {buttonText}
        </Link>
    </div>
}