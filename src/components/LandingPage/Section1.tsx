import React from "react";
import { useState } from "react";
import searchicon from "../../public/searchicon.svg";
import playIcon from "../../public/play.svg";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Link } from "react-router-dom";
import SearchDropDown from "./SearchDropDown";

type ActiveButton = "rent" | "buy" | "sell";

const Section1: React.FC = () => {
  const [activeButton, setActiveButton] = useState<ActiveButton>("rent");

  const handleButtonClick = (buttonName: ActiveButton) => {
    setActiveButton(buttonName);
  };

  const searchClickAray = ["rent", "buy", "sell"];
  const locationOptions = ["Ahmedabad", "Banglore", "Chennai", "Delhi"];
  const propertyOptions = ["House", "Apartment", "Villa", "Plot"];
  const priceRangeOptions = [
    "$500,000-$1,000,000",
    "$50,000-$100,000",
    " $200,000-$500,000",
  ];

  return (
    <div className="w-[100%]">
      <div className="w-full h-[70vh] min-h-[500px] items-center justify-center flex section-one">
        <div className="w-[90%] md:w-[85%] h-full flex flex-col items-center justify-start">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-10 md:flex items-start justify-center">
              <img src={playIcon} alt="play" className="w-6 md:w-10 pt-4" />
            </div>
            <div className="md:w-[90%] w-full xl-[190px] xl:w-[1187px] md:ml-4 flex flex-col items-start justify-start">
              <div className="">
                <p className="text-[#276490] text-[20px] md:text-[32px] lg:text-[40px] xl:text-[60px] font-semibold">
                  We make Your{" "}
                  <span className="text-[#0B2749] md:text-[32px] xl:text-[60px] lg:text-[40px] text-[20px] font-bold uppercase">
                    Dream Property
                  </span>
                </p>
              </div>
              <div className="w-full md:w-full lg:w-[94%] xl:w-[1070px] md:mt-4 p-3 pl-0 md:p-0">
                <p className="text-[#0B2749] md:text-[15.7px] lg:text-[17.7px] xl:text-[19.5px] xl:pl-3 text-sm font-medium">
                  We provide a complete service for the sale, purchase or rental
                  of real estate. We provide a complete service for the sale,
                  purchase or rental of real estate. We provide a complete
                  service for the sale, purchase or rental of real estate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full items-center justify-center flex bg-[#F4F5F5]">
        <div className="xl:w-[85%] lg:w-[85%] md:w-[90%] h-full flex items-center justify-center">
          <div className="xl:w-[85%] lg:w-full md:w-full h-full p-4">
            <div className="w-full h-[30%] xl:-mt-24 lg:-mt-24 md:-mt-24 -mt-36">
              <div className="flex md:flex-row gap-4">
                {searchClickAray.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(item as ActiveButton)}
                    className={`${
                      activeButton === item
                        ? "bg-[#276490] text-white"
                        : "bg-transparent text-[#276490]"
                    } hover:bg-[#0D99FF] hover:text-white focus:outline-none font-semibold px-4 py-2 rounded-t-3xl md:h-20 h-12 w-28 capitalize`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex md:flex-row flex-col  md:h-[100px] h-[268px] md:-mt-0 items-center justify-between bg-[#0B2749] text-white rounded-b-xl rounded-r-xl">
                <SearchDropDown
                  title="Location"
                  borderBtn={true}
                  SelectText="Select your city"
                  icon={<LocationOnRoundedIcon style={{ fill: "#fff" }} />}
                  dropDownText="Choose Location"
                  dropDownoptions={locationOptions}
                />

                <SearchDropDown
                  title="Property"
                  SelectText="Property"
                  borderBtn={true}
                  icon={
                    <KeyboardArrowDownRoundedIcon style={{ fill: "#fff" }} />
                  }
                  dropDownText="Choose Property Type"
                  dropDownoptions={propertyOptions}
                />

                <SearchDropDown
                  title="Price Range"
                  SelectText="Price Range"
                  borderBtn={false}
                  icon={
                    <KeyboardArrowDownRoundedIcon style={{ fill: "#fff" }} />
                  }
                  dropDownText="Choose Price Range"
                  dropDownoptions={priceRangeOptions}
                />
              </div>
            </div>

            {/* More options start */}

            {/* MD Search Bar start */}
            <div className="h-[80px] w-full flex items-center justify-start md:my-5">
              <div className="w-80 h-[69px] flex bg-[#F4F5F5] relative mt-10">
                <input
                  type="text"
                  className=" h-full w-full bg-transparent text-[#0B2749] pl-4 text-base font-medium outline-[#0B2749] placeholder:text-sm placeholder:text-[#0B2749] placeholder:font-bold placeholder:pl-2 rounded-[40px] border border-[#0B2749]"
                  placeholder="Click here for more options"
                />
                <div className="w-[69px] h-[69px] shrink-0 bg-[#0B2749] rounded-full flex justify-center items-center cursor-pointer absolute right-0 -top-1/2 translate-y-1/2">
                  <img
                    src={searchicon}
                    alt="searchicon"
                    className="shrink-0 w-[20px] h-[20px]"
                  />
                </div>
              </div>
            </div>

            {/* More options end */}
            <div className="flex flex-row mt-10">
              <div className="p-2 gap-3 flex flex-col">
                <p className="text-[#0B2749] font-bold text-sm md:text-[16px] ">
                  Are you an Agent?
                </p>
                <Link
                  to="/register"
                  className="bg-[#0B2749] py-2 rounded-[26px] text-white flex items-center justify-center text-[15px] font-medium"
                >
                  Register here
                </Link>
              </div>
              <div className="border-r-[1px] border-[#0B2749] p-2 mt-2 gap-6 flex flex-col h-[10vh]"></div>
              <div className="p-2 gap-3 flex flex-col ml-4">
                <p className="text-[#000000] font-bold text-sm md:text-[16px]">
                  Become a Customer
                </p>
                <Link
                  to="/register"
                  className="bg-[#000000] py-2 rounded-[26px] text-white flex items-center justify-center text-[15px] font-medium"
                >
                  Register here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
