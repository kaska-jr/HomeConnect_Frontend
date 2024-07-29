import { Link } from "react-router-dom";
import profiledp from "../public/profiledp.svg";
import LikeIcon from "../public/like.svg";
import Calender from "../public/calender.svg";
import ChatIcon from "../public/chat_icon.svg";
import Chat from "../public/char_icon_2.svg";
import Overview from "../public/overview.svg";
import latestdeal from "../public/latestdeal.svg";
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
import { FaStar, FaRegBell, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useState, useEffect } from "react";

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
    <div className="w-[90vw] mx-auto mb-6 gap-5 text-black flex flex-col md:flex-row justify-center">
      {/* column 1 */}
      <div className="flex flex-col gap-5 basis-[25%] -mt-20 lg:-mt-40">
        <div className="border-homeGray bg-transparent rounded-b-lg relative">
          <div className=" w-full">
            <div className="flex flex-col">
              <Link
                to="/agent"
                className="text-white text-center justify-self-center text-xs truncate"
              >
                You have not completed your{" "}
                <span className="text-homeOrange">registration</span>{" "}
              </Link>

              <div className="flex flex-col bg-white rounded-xl mt-3 lg:mt-4 overflow-hidden">
                <img
                  src={profiledp}
                  alt="profiledp"
                  className="w-full object-cover"
                />
                <div className="p-3">
                  <p className="text-xl font-extrabold">Agbani Darego</p>
                  <p className="text-[0.7rem] text-[#276490]">Ajah, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-homeGray border bg-white rounded-lg p-3">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center">
              <img src={LikeIcon} alt="Like" />
              <p className="font-bold text-base ml-2">User Review:</p>
            </div>
            <div className="flex">
              <p className="text-base text-homeOrange flex items-center justify-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>

              <p className="ml-8 text-base font-bold">5.0</p>
            </div>
            <div className="flex items-center gap-4 text-[0.7rem]">
              <div className="flex text-homeOrange items-center gap-2">
                <FaHeart />
                <p>12</p>
              </div>
              <div className="flex text-homeGray items-center gap-2">
                <CiHeart />
                <p>12</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-homeGray border bg-white rounded-lg p-3">
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
        <div className="border-homeGray border bg-white rounded-lg p-3">
          <div className="flex flex-row gap-3 item-center">
            <img src={ChatIcon} alt="Like" />
            <p className="font-bold text-base">Chat Support</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-10" src={Chat} alt="Like" />
          </div>
        </div>
      </div>

      <div className="basis-[75%] flex flex-col lg:flex-row justify-evenly gap-5">
        {/* column 2 */}
        <div className="flex flex-col gap-5 basis-[60%]">
          <div className="border-homeGray border bg-white rounded-b-lg">
            <div className="flex flex-col  w-full bg-white rounded-b-xl p-3">
              <div className="flex flex-row gap-3 item-center">
                <img src={Overview} alt="Overview" />
                <p className="font-bold text-base">Total Overview</p>
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
                  <p className="w-[50%] text-[0.65rem]">
                    Properties Sold/Rented
                  </p>
                  <p className="w-[50%] h-1 bg-homeGray"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-homeGray border bg-white rounded-lg p-3">
            <div className="flex flex-col w-full bg-white rounded-xl lg:gap-0">
              <div className="flex flex-row gap-3 mb-3 item-center">
                <img src={latestdeal} alt="latestdeal" />
                <p className="font-bold text-base">Latest Deal</p>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-y-3">
                <div>
                  <img
                    src={houseprop}
                    alt="latestImg"
                    className="w-full lg:w-[150px] h-[90%]"
                  />
                </div>

                <div className="flex items-center justify-between bg-zinc-200 rounded-lg h-[90%] lg:ml-5 p-4 w-full lg:w-[calc(100%-150px)]">
                  <div className="font-bold mr-4">
                    <p className="text-[0.65rem]">14 Ajao Street, Lagos</p>
                    <p className="text-[0.75rem]">250,000,000</p>
                  </div>

                  <div className="text-zinc-500 ">
                    <p className="text-[0.65rem]">
                      <span className="font-bold ">mp ID: </span>
                      <span>33437790</span>
                    </p>

                    <p className="text-[0.65rem]">
                      <span className="font-bold">Booking ID: </span>
                      <span>33437790</span>
                    </p>
                    <p className="text-[0.65rem]">
                      <span className="font-bold">Booking ID: </span>
                      <span>33437790</span>
                    </p>

                    <p className="text-[0.65rem]">
                      <span className="font-bold">Email Address: </span>
                      <span>weryuop@gmail.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-homeGray border bg-white rounded-lg p-3">
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
                  <AgentButton
                    name="Later"
                    gradient="bg-zinc-400 text-[#0B2749]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* column 3 */}
        <div className="flex flex-col gap-5 basis-[40%]">
          <div className="border-homeGray border bg-white rounded-b-lg p-3">
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
                    <p className="text-[0.95rem] font-bold truncate">
                      Total Sales
                    </p>
                    <p className=" ">1.9K</p>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-3 text-center">
                    <p className="text-[0.95rem] font-bold truncate">
                      Total Rent
                    </p>
                    <p className=" ">1.8k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-homeGray border bg-white rounded-lg p-3 px-4 relative">
            <div className="grid self-center w-full h-full">
              <div className="flex flex-col item-center justify-center bg-white rounded-xl  w-full">
                <div className="absolute top-1/2 left-3">
                  <img src={ellipse} alt="" />
                </div>

                <div className="flex items-center justify-between px-4">
                  <div className="item-center flex gap-2">
                    <img src={listingImg} alt="" />
                    <h1 className="font-bold text-base">Listings</h1>
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
                      <img
                        src={houseprop}
                        alt="home"
                        className="w-full h-full"
                      />
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
      </div>
    </div>
  );
}

export default User;
