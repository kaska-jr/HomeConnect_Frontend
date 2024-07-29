import { NavLink, Outlet } from "react-router-dom";
import AddHomeIcon from "@mui/icons-material/AddHome";
import searchicon from "../../public/searchicon.svg";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useLocation } from "react-router-dom";
import SquareIcon from "@mui/icons-material/Square";
import logo from "../../public/logo.svg";
import profiledp from "../../public/profiledp.svg";
import PropertyDropdown from "../Agent/Agentproperties/PropertyDropdown";
import { useState } from "react";
import { IoTriangleSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import {
  HiSquaresPlus,
  HiOutlineSquaresPlus,
  HiSquares2X2,
} from "react-icons/hi2";
import Footer from "../Footer";
import AgentNotification from "./AgentNotification";

const AgentNavbar = () => {
  let location = useLocation();
  let [IsPopOver, setIsPopOver] = useState(false);
  let [IsActive, setIsActive] = useState("");
  let [IsNotification, setIsNotification] = useState(false);
  let [removeActiveBtn, setRemoveActiveBtn] = useState(false);
  let [editActiveBtn, setEditActiveBtn] = useState(false);

  const handleDropDown = (type: string) => {
    console.log(type);
    if (type === "notification") {
      setIsNotification(!IsNotification);
      setIsPopOver(false);
    } else if (type === "profile") {
      setIsPopOver(!IsPopOver);
      setIsNotification(false);
    }
  };

  console.log(IsActive);
  const SearchProperty = () => {
    console.log("search btn clicked");
  };

  const editProperty = () => {
    console.log("edit btn clicked");
    setIsActive("edit");
  };

  const LABELS = [
    {
      title: "Total Properties",
      number_of_properties: "22,000",
      remark: "400 more to break last month record",
    },
    {
      title: "Properties for Sale",
      number_of_properties: " 22,000",
      remark: "400 more to break last month record",
    },
    {
      title: "Properties for Rent",
      number_of_properties: "22,000",
      remark: "400 more to break last month record",
    },
  ];

  return (
    <>
      <div className="w-full bg-[#0B2749]">
        <div
          className={`flex justify-center items-center border-b border-gray-400 h-[90px] lg:h-[93px]  w-full`}
        >
          <div className="flex justify-between lg:justify-center items-center bg-[#0B2749] text-white w-[95%] lg:w-[90%] mx-auto">
            <div className=" flex items-center gap-2">
              <img src={logo} alt="" className=" w-[3rem] md:w-[4rem]" />
              <h1 className="text-lg md:text-4xl font-bold text-white hidden md:block">
                Realtor Dashboard
              </h1>
            </div>

            <div className="flex-1 lg:w-[35%] flex  items-center justify-end gap-3 lg:gap-2 xl:gap-4">
              <SettingsIcon
                style={{ display: "none" }}
                className="text-gray-500 hidden lg:block"
              />

              <div className="relative">
                <NotificationsIcon
                  className={`${
                    IsActive === "notification" ? "text-gray-500" : "text-white"
                  } `}
                  onClick={() => handleDropDown("notification")}
                />
                <div
                  className={`${
                    IsNotification ? "h-fit" : "h-0"
                  } transition-all duration-500 ease-in-out top-10 left-1/2 -translate-x-1/2 absolute rounded-lg overflow-hidden bg-white shadow-xl shadow-slate-500 z-50`}
                >
                  <AgentNotification />
                </div>
              </div>

              <div className="relative">
                <HiSquaresPlus
                  className={`${
                    IsActive === "profile" ? "text-gray-500" : "text-white"
                  } `}
                  fontSize={25}
                  onClick={() => handleDropDown("profile")}
                />
                {IsPopOver && (
                  <div className="bg-white text-homeBlue py-2 absolute top-9 left-1/2 -translate-x-1/2 rounded-xl transition-all duration-150">
                    <div className="flex items-center gap-2 hover:bg-[#4959EE] p-1 px-4 rounded-tl-xl  rounded-br-xl hover:text-white cursor-pointer">
                      <HiOutlineSquaresPlus />
                      <p>Dasboard</p>
                    </div>
                    <div className="flex items-center gap-2 p-1 px-4 cursor-pointer hover:bg-[#4959EE] hover:text-white rounded-tl-xl  rounded-br-xl">
                      <IoMdLogOut />
                      <p>Logout</p>
                    </div>
                  </div>
                )}
              </div>

              <img
                src={profiledp}
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs hidden md:block">
                <h1>Agbani Darego</h1>
                <p>Agent/Property Manager</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={` ${
            location.pathname === "/agent" ? "h-[400px]" : "md:h-[400px] pb-6"
          } bg-[#0B2749] w-[95%] lg:w-[90%] mx-auto transition-all`}
        >
          <div className="w-full  flex flex-col gap-10 lg:gap-0 h-[100%] pt-10 lg:pt-0 lg:justify-around">
            <div className="flex flex-row w-full">
              <div className="w-3/4 lg:w-3/5 flex  flex-row gap-2 md:gap-6 lg:gap-12">
                <NavLink
                  className={`px-2 py-1 md:px-8 md:py-4 flex items-center justify-center rounded-lg w-48 border-2 border-white transition-colors duration-300  ${
                    location.pathname === "/agent" && "bg-[#4959EE]"
                  } hover:bg-[#4959EE] text-center justify-center`}
                  to=""
                >
                  <div className="flex flex-col items-center justify-center">
                    <HiSquares2X2 fontSize={28} />
                    <p className="text-[0.7rem] md:text-base font-bold">
                      Dashboard
                    </p>
                  </div>
                </NavLink>

                <NavLink
                  className={`px-2 py-1 md:px-8 md:py-4 flex items-center rounded-lg w-48 border-2 border-white transition-colors duration-300 ${
                    (location.pathname === "/agent/properties" ||
                      location.pathname === "/agent/add-property") &&
                    "bg-[#4959EE]"
                  } hover:bg-[#4959EE] text-center justify-center`}
                  to="/agent/properties"
                >
                  <div className="flex flex-col items-center justify-center">
                    <AddHomeIcon />
                    <p className="text-[0.7rem] md:text-base font-bold">
                      Properties
                    </p>
                  </div>
                </NavLink>

                <NavLink
                  className={`px-2 py-1 md:px-8 md:py-4 flex items-center rounded-lg w-48 border-2 border-white transition-colors duration-300 ${
                    location.pathname === "/agent/transactions" &&
                    "bg-[#4959EE]"
                  } hover:bg-[#4959EE] text-center justify-center`}
                  to="/agent/transactions"
                >
                  <div className="flex flex-col items-center justify-center">
                    <CurrencyExchangeIcon />
                    <p className="text-[0.7rem] md:text-base font-bold">
                      Transactions
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>

            {location.pathname === "/agent" ? (
              <div className="flex flex-row gap-2 md:gap-5 justify-end items-center w-full">
                {LABELS.map(
                  ({ title, number_of_properties, remark }, index) => (
                    <div
                      className="bg-[#276490] p-4 rounded-xl flex flex-col gap-2 w-1/3 lg:w-[23%] h-full"
                      key={index}
                    >
                      <p className="font-medium lg:font-bold text-xs md:text-bold">
                        {title}
                      </p>
                      <p className="font-medium lg:font-semibold text-xs lg:text-lg md:text-bold">
                        {number_of_properties}
                      </p>
                      <p className="text-xs">{remark}</p>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="flex flex-row justify-between  items-center">
                <div className="flex flex-col md:flex-row gap-2 lg:gap-3 justify-start md:items-center cursor-pointer">
                  <NavLink
                    to="/agent/add-property"
                    className={`${
                      location.pathname === "/agent/add-property" &&
                      "text-[#4959EE]"
                    } lg:p-4 pl-0 rounded-xl flex flex-row items-center gap-1 lg:gap-2`}
                  >
                    <SquareIcon
                      className={`${
                        location.pathname === "/agent/add-property" &&
                        "text-[#4959EE]"
                      }`}
                    />
                    <p className="text-[12px] truncate font-bold lg:text-base">
                      Add a Property
                    </p>
                  </NavLink>
                  <div className="text cursor-pointer relative">
                    <div
                      className={`m-1 flex items-center gap-1 lg:gap-2 lg:p-6 ${
                        editActiveBtn ? "text-[#4959EE]" : ""
                      }`}
                      onClick={() => {
                        setEditActiveBtn(!editActiveBtn);
                        setRemoveActiveBtn(false);
                      }}
                    >
                      <SquareIcon />
                      <p className="text-[12px] truncate font-bold lg:text-base">
                        {" "}
                        Edit a Property
                      </p>
                      <IoTriangleSharp
                        className={`${
                          editActiveBtn &&
                          "rotate-180 transition-[ease-in-out] duration-700"
                        }`}
                      />
                    </div>

                    {editActiveBtn && (
                      <div className="w-[450px] z-[1] bg-white shadow-xl shadow-slate-500 rounded-xl p-0 absolute top-20 left-1/2 -translate-x-1/2 ">
                        <PropertyDropdown
                          Propertyfn={editProperty}
                          btnTitle="search property"
                          title="Edit a property"
                        />
                      </div>
                    )}
                  </div>

                  <div className="text cursor-pointer relative">
                    <div
                      className={`m-1 flex items-center gap-1 lg:gap-2 lg:p-6 ${
                        removeActiveBtn ? "text-[#4959EE]" : ""
                      }`}
                      onClick={() => {
                        setRemoveActiveBtn(!removeActiveBtn);
                        setEditActiveBtn(false);
                      }}
                    >
                      <SquareIcon className="text-[12px]" />
                      <p className="text-[12px] truncate font-bold lg:text-base">
                        Remove a Property
                      </p>
                      <IoTriangleSharp
                        className={`${
                          removeActiveBtn &&
                          "rotate-180 transition-[ease-in-out] duration-700"
                        }`}
                      />
                    </div>

                    {removeActiveBtn && (
                      <div className="w-[450px] z-[1] bg-white shadow-xl shadow-slate-500 rounded-xl p-0 absolute top-20 left-1/2 -translate-x-1/2">
                        <PropertyDropdown
                          Propertyfn={SearchProperty}
                          btnTitle="search property"
                          title="Remove a property"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-row justify-end items-center">
                  <div className="h-18 border border-white bg-[#0B2749] rounded-2xl flex flex-row p-2 gap-4">
                    <img
                      src={searchicon}
                      alt="searchicon"
                      width={20}
                      height={20}
                    />
                    <input
                      className="bg-[#0B2749] outline-none focus:outline-none hidden lg:block"
                      type="search"
                      placeholder="Search properties"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-homeAgentBg pb-5">{<Outlet />}</div>
      <Footer />
    </>
  );
};

export default AgentNavbar;
