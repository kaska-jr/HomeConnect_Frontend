import { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    leading?: React.ReactNode;
  }

export default function Input(props: InputProps){

    const { leading, ...prop } = props

    return (
        <div className="rounded-[5px] border-[2px] border-[#797A81] h-[55px] px-5 flex items-center gap-4">
            <div>
                { leading }
            </div>
            <input className="flex-1 outline-none bg-transparent text-[#555658] placeholder-[#555658] font-medium" {...prop} />
        </div>
    )
}