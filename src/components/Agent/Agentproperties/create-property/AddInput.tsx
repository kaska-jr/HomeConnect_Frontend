import React from "react";

type AddInputProps = {
  type: string;
  placeholder: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number | undefined;
  label: string;
  required?: boolean;
};

const AddInput: React.FC<AddInputProps> = ({
  type,
  placeholder,
  name,
  onChange,
  value,
  label,
  required,
}) => {
  if (
    name === "bedrooms" ||
    name === "bathrooms" ||
    name === "toilets" ||
    name === "parkingLots"
  ) {
    return (
      <div className="flex flex-row items-center gap-3 text-[#63646B] w-full md:w-4/5">
        <label className="capitalize font-semibold text-lg flex-1 gap-2">
          {label}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-14 border border-[#B7C4CA]  rounded-lg p-2 text-sm text-[#9DA1A8] bg-white"
          // value={value}
          // onChange={onChange}
          required={required}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 text-[#63646B] w-full md:w-4/5">
      <label className="font-semibold text-lg capitalize">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-[#B7C4CA]  rounded-lg p-2 text-sm text-[#9DA1A8] bg-white"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default AddInput;
