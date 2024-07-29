import { NavLink, Outlet } from "react-router-dom";
import WindowIcon from "@mui/icons-material/Window";
import AddHomeIcon from "@mui/icons-material/AddHome";
import searchicon from "../../public/searchicon.svg";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useLocation } from "react-router-dom";
import SquareIcon from "@mui/icons-material/Square";
import logo from "../../public/logo.svg";
import profiledp from "../../public/profiledp.svg";
import PropertyDropdown from "../User/Userproperties/PropertyDropdown";
import { useEffect, useState } from "react";
import { IoTriangleSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import Footer from "../Footer";
import { FaRegCompass } from "react-icons/fa";

const UserNavbar = () => {
  let location = useLocation();

  let [removeActiveBtn, setRemoveActiveBtn] = useState(false);

  let [editActiveBtn, setEditActiveBtn] = useState(false);

  let [navHeight, setNavHeight] = useState<string>("h-[400px]");

  const SearchProperty = () => {
    console.log("search btn clicked");
  };

  const editProperty = () => {
    console.log("edit btn clicked");
  };

  useEffect(() => {
    if (!(location.pathname === "/user")) {
      setNavHeight("h-[250px]");
    } else {
      setNavHeight("h-[400px]");
    }
  });

  return (
    <>
      <div className="">
        <div className="w-full bg-[#0B2749] max-w-[1500px] mx-auto">
          <div className="flex justify-center items-center border-b border-gray-400 h-[93px]  w-full">
            <div className="flex justify-between lg:justify-center items-center bg-[#0B2749] text-white w-[95%] lg:w-[90%] mx-auto">
              <div className="w-[5%]">
                <img src={logo} alt="" className="w-[4rem]" />
              </div>

              <div className="md:w-[60%] xl:w-[70%]  hidden lg:flex gap-1 lg:gap-4 xl:gap-12 justify-end">
                <div className="text-base font-semibold cursor-pointer">
                  <NavLink to="/">Home</NavLink>
                </div>

                <div className="sm:text-sm md:text-base cursor-pointer">
                  <NavLink to="/about_us">About</NavLink>
                </div>

                <div className="sm:text-sm md:text-base cursor-pointer">
                  <NavLink to="/properties">Properties</NavLink>
                </div>

                <div className="sm:text-sm md:text-base cursor-pointer">
                  <NavLink to="/agents">Agents</NavLink>
                </div>
                <div className="sm:text-sm md:text-base cursor-pointer">
                  <NavLink to="/blog">Blog</NavLink>
                </div>
                <div className="sm:text-sm md:text-base cursor-pointer">
                  <NavLink to="/contact">Contact Us</NavLink>
                </div>
              </div>

              <div className="w-[60%] lg:w-[35%] flex  items-center justify-end gap-3 lg:gap-2 xl:gap-4">
                <TiThMenu className="text-gray-500 w-[25px] h-[25px] lg:hidden" />
                <SettingsIcon className="text-gray-500" />
                <NotificationsIcon className="text-gray-500" />
                <WindowIcon />
                <img
                  src={profiledp}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-xs">
                  <h1>Agbani Darego</h1>
                  <p>User/Property Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`h-[400px] bg-[#0B2749] text-white w-[95%] lg:w-[90%] mx-auto transition-all`}
          >
            <div className="w-full  flex flex-col gap-10 lg:gap-0 h-[100%] pt-10 lg:pt-0 lg:justify-around">
              <div className="flex flex-row w-full">
                <div className="w-11/12 lg:w-4/5 flex flex-row gap-6 lg:gap-12">
                  <NavLink
                    className={`px-8 py-4 rounded-lg w-48 border-2 border-white transition-colors duration-300 ${
                      location.pathname === "/user" && "bg-[#4959EE]"
                    } hover:bg-[#4959EE] text-center justify-center`}
                    to=""
                  >
                    <div className="flex flex-col items-center justify-center">
                      <WindowIcon />
                      <p>Dashboard</p>
                    </div>
                  </NavLink>

                  <NavLink
                    className={`px-8 py-4 rounded-lg w-48 border-2 border-white transition-colors duration-300 ${
                      (location.pathname === "/user/properties" ||
                        location.pathname === "/user/add-property") &&
                      "bg-[#4959EE]"
                    } hover:bg-[#4959EE] text-center justify-center`}
                    to="/user/properties"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <FaRegCompass />
                      <p>Find property</p>
                    </div>
                  </NavLink>

                  <NavLink
                    className={`px-8 py-4 rounded-lg w-48 border-2 border-white transition-colors duration-300 ${
                      location.pathname === "/user/transactions" &&
                      "bg-[#4959EE]"
                    } hover:bg-[#4959EE] text-center justify-center`}
                    to="/user/transactions"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <CurrencyExchangeIcon />
                      <p>Transactions</p>
                    </div>
                  </NavLink>

                  <NavLink
                    className={`px-8 py-4 rounded-lg w-48 border-2 border-white transition-colors duration-300 ${
                      location.pathname === "/user/transactions" &&
                      "bg-[#4959EE]"
                    } hover:bg-[#4959EE] text-center justify-center`}
                    to="/user/transactions"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <AddHomeIcon />
                      <p>Companies</p>
                    </div>
                  </NavLink>
                </div>
              </div>

              {location.pathname === "/user" ? (
                <div className="flex flex-row gap-5 justify-end items-center w-full">
                  <div className="bg-[#276490] p-4 rounded-xl flex flex-col gap-2 w-1/3 lg:w-[23%] h-full">
                    <p className="font-medium lg:font-bold">Total Properties</p>
                    <p className="font-medium lg:font-bold text-sm lg:text-lg">
                      22,000
                    </p>
                    <p className="text-xs">
                      400 more to break last month record
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl flex flex-col gap-2 text w-1/3 lg:w-[23%]">
                    <p className="text-[#0B2749] font-medium lg:font-bold">
                      Properties for Sale
                    </p>
                    <p className="font-medium lg:font-bold text-sm lg:text-lg text-[#0B2749]">
                      22,000
                    </p>
                    <p className="text-xs text-[#8F8888]">
                      400 more to break last month record
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl flex flex-col gap-2 w-1/3 lg:w-[23%]">
                    <p className="text-[#0B2749] font-medium lg:font-bold">
                      Properties for Rent
                    </p>
                    <p className="font-medium lg:font-bold text-sm lg:text-lg text-[#0B2749]">
                      22,000
                    </p>
                    <p className="text-xs text-[#8F8888]">
                      400 more to break last month record
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row justify-between  items-center">
                  <div className="flex flex-row gap-2 lg:gap-3 justify-start items-center cursor-pointer">
                    <NavLink
                      to="/user/add-property"
                      className={`${
                        location.pathname === "/user/add-property" &&
                        "text-[#4959EE]"
                      } lg:p-4 pl-0 rounded-xl flex flex-row items-center gap-1 lg:gap-2`}
                    >
                      <SquareIcon
                        className={`${
                          location.pathname === "/user/add-property" &&
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
                          removeActiveBtn ? "text-[#4959EE]" : ""
                        }`}
                        onClick={() => {
                          setRemoveActiveBtn(!removeActiveBtn);
                          setEditActiveBtn(false);
                        }}
                      >
                        <SquareIcon className="text-[12px]" />
                        <p className="text-[12px] truncate font-bold lg:text-base">
                          {" "}
                          Edit a Property
                        </p>
                        <IoTriangleSharp
                          className={`${
                            removeActiveBtn &&
                            "rotate-180 transition-[ease-in-out] duration-700"
                          }`}
                        />
                      </div>

                      {removeActiveBtn && (
                        <div className="w-[450px] z-[1] bg-white shadow-2xl rounded-xl p-0 absolute top-20 left-1/2 -translate-x-1/2">
                          <PropertyDropdown
                            Propertyfn={SearchProperty}
                            btnTitle="search property"
                            title="Remove a property"
                          />
                        </div>
                      )}
                    </div>

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
                          Remove a Property
                        </p>
                        <IoTriangleSharp
                          className={`${
                            editActiveBtn &&
                            "rotate-180 transition-[ease-in-out] duration-700"
                          }`}
                        />
                      </div>

                      {editActiveBtn && (
                        <div className="w-[450px] z-[1] bg-white shadow-2xl rounded-xl p-0 absolute top-20 left-1/2 -translate-x-1/2 ">
                          <PropertyDropdown
                            Propertyfn={editProperty}
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
      </div>
    </>
  );
};

export default UserNavbar;
