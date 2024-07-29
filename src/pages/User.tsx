import { Link } from "react-router-dom";
import profiledp from "../public/profiledp.svg";
import payment from "../public/Payment.svg";
import marketTrends from "../public/market_trends.svg";

import Love_letter from "../public/love_letter.svg";
import Calender from "../public/calender.svg";
import ChatIcon from "../public/chat_icon.svg";
import Chat from "../public/char_icon_2.svg";
import Overview from "../public/overview.svg";
import salesIcon from "../public/property_sales_icon.svg";
import CalenderImg from "../public/calender_num.svg";
import listingImg from "../public/Listing_Icons.svg";
import AgentButton from "../components/Agent/AgentButton";
import houseprop from "../public/houseprop.svg";
import bedroom from "../public/listing_bedroom.svg";
import toilet from "../public/Listing_toilet.svg";
import parkinglots from "../public/Listing_parking.svg";
import eyeIcon from "../public/eye.svg";
import ellipse from "../public/Ellipse 26.svg";
import Chart from "../public/Chart.svg";
import Doughnut from "../public/doughnut.svg";
import { FaRegBell } from "react-icons/fa";
import { useState, useEffect } from "react";
import SavedProperties from "../components/User/Userproperties/SavedProperties";

function User() {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!token) {
          // Handle the case where there is no token
          return;
        }

        // Make a request to your backend endpoint with the token
        const response = await fetch("http://localhost:5005/api/user/:id", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          // Handle error
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, [token]);

  console.log(userData);

  return (
    <div className="grid grid-cols-12 grid-rows- gap-5 w-[90vw] mx-auto mb-6 items-start xl:items-stretch">
      {/* column 1 */}
      <div className="border-homeGray border col-start-1 col-span-3 row-start-1 row-span-2 bg-white rounded-b-lg relative">
        <div className="md:absolute md:-translate-y-[150px] xl:-translate-y-[200px] md:-translate-x-1/2 md:left-1/2 w-full">
          <div className="flex flex-col">
            <Link
              to="/agent"
              className="text-white text-center justify-self-center text-xs truncate"
            >
              You have not completed your{" "}
              <span className="text-homeOrange">registration</span>{" "}
            </Link>

            <div className="flex flex-col bg-white rounded-xl mt-3 lg:mt-4 overflow-hidden">
              <img src={profiledp} alt="profiledp" className="w-full" />
              <div className="p-3">
                <p className="text-xl font-extrabold">Agbani Darego</p>
                <p className="text-[0.7rem] text-[#276490]">Ajah, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-homeGray border col-start-1 col-span-3 row-start-3 row-span-1 bg-white rounded-lg p-3">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center">
            <div className="bg-gradient-to-l  from-[#4959EE] to-[#0B2749] h-10 w-10 rounded-full flex items-center justify-center">
              <img src={payment} alt="request" />
            </div>
            <p className="font-bold text-base ml-2">Requests</p>
          </div>
          <div className="flex items-center justify-center w-full">
            <img src={Love_letter} alt="love_letter" />
          </div>
        </div>
      </div>
      <div className="border-homeGray border col-start-1 col-span-3 row-start-4 row-span-1 bg-white rounded-lg p-3">
        <div className="flex flex-col bg-white rounded-xl h-full">
          <div className="flex flex-row gap-3 items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <img src={Calender} alt="Schedule" />
              <p className="font-bold text-base">Schedule</p>
            </div>

            <AgentButton
              name="Expand"
              underline={true}
              iconUrl={eyeIcon}
              gradient="bg-gradient-to-l  from-[#4959EE] to-[#0B2749] text-white"
            />
          </div>
          <div className="h-[90%] flex flex-col items-center justify-center gap-3">
            <div>
              <img src={CalenderImg} alt="" />
            </div>
            <div className="flex items-center justify-center gap-3">
              <p className="bg-homeBlue p-2 text-white rounded-full">
                <FaRegBell />
              </p>
              <p className="bg-homeBlue p-2 text-white rounded-full">
                <FaRegBell />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-homeGray border col-start-1 col-span-3 row-start-5 row-span-1 bg-white rounded-lg p-3">
        <div className="flex flex-row gap-3 item-center">
          <img src={ChatIcon} alt="Like" />
          <p className="font-bold text-base">Chat Support</p>
        </div>
        <div className="flex flex-col items-center justify-center h-[90%]">
          <img className="w-10" src={Chat} alt="Like" />
        </div>
      </div>

      {/* column 2 */}
      <div className="border-homeGray border col-start-4 col-span-6 row-start-1 row-span-3 bg-white rounded-b-lg">
        <div className="flex flex-col  w-full bg-white rounded-b-xl p-3">
          <div className="flex flex-row gap-3 item-center">
            <div className="bg-gradient-to-l  from-[#4959EE] to-[#0B2749] h-10 w-10 rounded-full flex items-center justify-center">
              <img src={marketTrends} alt="marketTrends_icon" />
            </div>
            <p className="font-bold text-base">Market Trends</p>
          </div>

          <div className="h-[70%] w-[90%] m-auto">
            <img src={Chart} alt="" className="h-[100%] w-[90%]" />
          </div>

          <div className="border-t-2 border-zinc-300 px-6 py-4">
            <div className="text-zinc-500 w-full flex  items-center justify-end">
              <p className="w-[50%] text-[0.65rem]">People Reached</p>
              <p className="w-[50%] h-1 bg-homeGray"></p>
            </div>

            <div className="text-zinc-500 w-full flex  items-center">
              <p className="w-[50%] text-[0.65rem]">People Engage</p>
              <p className="w-[50%] h-1 bg-homeGray"></p>
            </div>

            <div className="text-zinc-500 w-full flex items-center">
              <p className="w-[50%] text-[0.65rem]">Properties Sold/Rented</p>
              <p className="w-[50%] h-1 bg-homeGray"></p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-homeGray border col-start-4 col-span-6 row-start-4 row-span-1 bg-white rounded-lg p-3">
        <div className="flex flex-col w-full bg-white rounded-xl">
          <div className="flex flex-row gap-3 mb-3 items-center">
            <div className="bg-gradient-to-l  from-[#4959EE] to-[#0B2749] h-10 w-10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M13.3334 1.66602H6.66675C5.25008 1.66602 4.16675 2.74935 4.16675 4.16602V17.4993C4.16675 17.666 4.16675 17.7493 4.25008 17.916C4.50008 18.3327 5.00008 18.416 5.41675 18.2493L10.0001 15.5827L14.5834 18.2493C14.7501 18.3327 14.8334 18.3327 15.0001 18.3327C15.5001 18.3327 15.8334 17.9993 15.8334 17.4993V4.16602C15.8334 2.74935 14.7501 1.66602 13.3334 1.66602Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="font-bold text-base">Saved Properties</p>
          </div>

          <div className="flex items-center justify-start">
            <SavedProperties />
          </div>
        </div>
      </div>

      <div className="border-homeGray border col-start-4 col-span-6 row-start-5 row-span-1 bg-white rounded-lg p-3">
        <div className="flex  w-full bg-white rounded-xl">
          <div className="">
            <img src={Overview} alt="Notification" />
          </div>
          <div className="ml-5">
            <p className="font-bold text-base">New Notifications</p>
            <p className="mb-4 text-zinc-500 text-[0.7rem]">
              Someone just checked one of the properties you listed. Someone
              just checked one of the properties you listed.
            </p>
            <div className="flex gap-4">
              <AgentButton
                name="Read now"
                gradient="bg-gradient-to-l  from-[#4959EE] to-[#0B2749] text-white"
              />
              <AgentButton name="Later" gradient="bg-zinc-400 text-[#0B2749]" />
            </div>
          </div>
        </div>
      </div>
      {/* column 3 */}
      <div className="border-homeGray border col-start-10 col-span-6 row-start-1 row-span-2 bg-white rounded-b-lg p-3">
        <div className="flex flex-col w-full bg-white rounded-b-xl">
          <div className="flex flex-row gap-3">
            <img src={salesIcon} alt="sales image" />
            <p className="font-bold text-base">Property Sale & Rent</p>
          </div>

          <div className="flex gap-8 justify-center items-center h-[90%]">
            <div className="flex items-center justify-center mt-3 relative">
              <img src={Doughnut} alt="" className="w-[80%]" />
              <div className="absolute text-center">
                <p className="text-[0.65rem]">Total</p>
                <p className="font-bold text-lg">22,000</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center justify-center mt-3 text-center">
                <p className="text-[0.95rem] font-bold truncate">Total Sales</p>
                <p className=" ">1.9K</p>
              </div>
              <div className="flex flex-col items-center justify-center mt-3 text-center">
                <p className="text-[0.95rem] font-bold truncate">Total Rent</p>
                <p className=" ">1.8k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-homeGray border col-start-10 col-span-6 row-start-3 row-span-3 bg-white rounded-lg p-3 px-4 relative">
        <div className="grid self-center w-full h-full">
          <div className="flex flex-col item-center justify-center bg-white rounded-xl  w-full">
            <div className="absolute top-1/2 left-3">
              <img src={ellipse} alt="" />
            </div>

            <div className="flex items-center justify-between px-4">
              <div className="item-center flex gap-2">
                <img src={listingImg} alt="" />
                <h1 className="font-bold text-base">Latest Deal</h1>
              </div>

              <AgentButton
                name="see all"
                iconUrl={eyeIcon}
                underline={true}
                gradient="bg-gradient-to-l from-[#4959EE] to-[#0B2749] text-white"
              />
            </div>

            <div className=" flex items-center justify-center">
              <div className="border border-homeGray p-4 my-5 rounded-xl shadow-xl ">
                <div>
                  <img src={houseprop} alt="home" className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between my-2">
                    <p className="font-bold text-[0.65rem]">
                      19 Ajao Street, Lagos
                    </p>
                    <div className="text-[0.65rem] flex items-center gap-1">
                      <img src={ellipse} alt="" />
                      <p>Realty Extra</p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2 mb-3">
                    <div className="flex justify-start items-center gap-1">
                      <img src={bedroom} alt="" />
                      <p className="text-[0.7rem]">3</p>
                    </div>
                    <div className="flex justify-start items-center gap-1">
                      <img src={toilet} alt="" />
                      <p className="text-[0.7rem]">3</p>
                    </div>
                    <div className="flex justify-start items-center gap-1">
                      <img src={parkinglots} alt="" />
                      <p className="text-[0.7rem]">3</p>
                    </div>
                  </div>
                  <p className="font-bold text-base mb-3">250,000,000</p>
                  <p className="text-[0.7rem] italic text-homeGray ">
                    Auction 1:00 pm Sunday 23 April, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
