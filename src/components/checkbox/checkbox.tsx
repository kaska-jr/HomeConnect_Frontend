
interface CheckBoxProps {
    checked?: boolean;
    setChecked?: () => void;
    className?: string;
    checkedStyle?: string
}

export default function CheckBox(props: CheckBoxProps) {

    const { checked, setChecked, className, checkedStyle } = props

    return (
        <div
            className={`shrink-0 w-[15px] h-[15px] rounded-[4px] border-[#0D99FF] border-[1px] grid place-items-center ${checked ? `${checkedStyle ?? "bg-[#0D99FF]"} ` : "bg-transparent"} ${className ?? ''}`}
            onClick={setChecked}
        >
            {
                checked && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-white">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                        </path>
                    </svg>
                )
            }
        </div>
    )
}