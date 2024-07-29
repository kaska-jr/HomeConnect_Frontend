import React from "react";

const AddinputSelect = ({
  options,
  label,
  name,
  onChange,
  value,
  required,
}: {
  options: string[];
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number | undefined;
  required?: boolean;
  placeholder: string;
}) => {
  return (
    <div
      className={`flex flex-col gap-2 text-[#63646B] ${
        name === "unit" ? "w-1/5" : "w-full md:w-4/5"
      }`}
    >
      <label className="font-semibold text-lg">{label}</label>
      <select
        name={name}
        className="border border-[rgb(183,196,202)] rounded-lg p-2 text-sm bg-white"
        value={value}
        onChange={onChange}
        required={required}
      >
        {
          // @ts-ignore
          options.map((option, index) => {
            return (
              <option key={option} value={index === 0 ? "" : option}>
                {option}
              </option>
            );
          })
        }
      </select>
    </div>
  );
};

export default AddinputSelect;
