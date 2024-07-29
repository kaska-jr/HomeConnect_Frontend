import React, { useState } from "react";

const SearchDropDown = ({
  title,
  SelectText,
  borderBtn,
  icon,
  dropDownText,
  dropDownoptions,
}: {
  title: string;
  SelectText: string;
  borderBtn: boolean;
  icon: React.ReactNode;
  dropDownText: string;
  dropDownoptions: React.ReactNode[];
}) => {
  const [isDropdown, setIsDropdown] = useState(false);

  const handleClick = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <div
      className={`flex flex-col md:w-[28%] cursor-pointer w-[90%] lg:pl-12 xl:pl-12 md:pl-3 pr-4 pl-4 md:pb-0 pb-3 justify-center relative ${
        borderBtn && "border-b-2 md:border-r-2"
      }  md:border-b-0 border-[#fff] my-3`}
      onClick={handleClick}
    >
      <p className="text-[#C6C9E4] text-[16px] font-bold">{title}</p>
      <div className="flex flex-row justify-between">
        <p
          className="dropdown-toggle text-sm font-semibold text-white"
          aria-controls="dropdown-content"
          aria-expanded={isDropdown}
        >
          {SelectText}
        </p>
        {icon}
      </div>
      {/* Dropdown menu for location start */}
      <div
        className="dropdown bg-white text-sm absolute flex justify-around z-10 items-center font-semibold text-[#0B2749] shadow-xl
   md:top-[75px] top-6 md:right-2 md:w-[220px]"
      >
        <div
          className="dropdown-menu"
          aria-labelledby="dropdown-toggle"
          style={{
            display: isDropdown ? "block" : "none",
            zIndex: 1,
            width: "220px",
          }}
        >
          <p className="p-3 text-[14px] lg:text-sm font-semibold border-b border-gray-300 text-[#6b6363]">
            {dropDownText}
          </p>
          {dropDownoptions.map((item, index) => (
            <div
              key={index}
              className="dropdown-item flex justify-start items-center h-[32px] pl-3 hover:bg-[#4959EE] text-[#262626] text-xs hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchDropDown;
