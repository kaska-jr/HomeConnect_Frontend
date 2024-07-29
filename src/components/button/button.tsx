import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button(props: ButtonProps) {
  const { loading, className, children, disabled, ...prop } = props;

  return (
    <Link to={"/agent"}>
      <button
        disabled={disabled || loading}
        className={`h-[52px] font-medium grid place-items-center w-full rounded-[15px] text-white bg-[#4959EE] disabled:cursor-not-allowed disabled:bg-opacity-70 ${
          className ?? ""
        }`}
        {...prop}
      >
        <div className="flex items-center">
          {loading && (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx={12}
                cy={12}
                r={10}
                stroke="currentColor"
                strokeWidth={4}
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          {children}
        </div>
      </button>
    </Link>
  );
}
