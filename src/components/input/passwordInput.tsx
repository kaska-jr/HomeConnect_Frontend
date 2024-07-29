import { InputHTMLAttributes, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "../svgs";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    leading?: React.ReactNode;
}

export default function PasswordInput(props: InputProps) {

    const [visibility, setVisibility] = useState<boolean>(false)

    const toggleVisibility = () => setVisibility(prev => !prev)

    const { leading, type, ...prop } = props

    return (
        <div className="rounded-[5px] border-[2px] border-[#797A81] h-[55px] px-5 flex items-center gap-4">
            <div>
                {leading}
            </div>
            <input
                type={visibility ? "text" : type ?? "password"}
                className="flex-1 outline-none bg-transparent text-[#555658] placeholder-[#555658] font-medium" {...prop}
            />
            <span>
                {
                    visibility ? <EyeIcon onClick={toggleVisibility} /> : <EyeSlashIcon onClick={toggleVisibility} />
                }
            </span>
        </div>
    )
}