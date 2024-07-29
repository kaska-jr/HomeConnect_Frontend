import propertyImg from "../../../public/SinglePropertyimg.png";
import mapImg from "../../../public/map.svg";
import rainbow from "../../../public/rainbow.svg";
import facebook from "../../../public/Facebook.svg";
import whatsapp from "../../../public/Whatsapp.svg";
import instagram from "../../../public/instagram.svg";
import twitter from "../../../public/twitter.svg";
import { FaLocationDot, FaLink, FaCirclePlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoShieldCheckmark } from "react-icons/io5";
import { TiWarning } from "react-icons/ti";
import { useState } from "react";
import SearchForm from "../../Search/SearchForm";

const Data = {
  propertyImg: propertyImg, //input file
  address: "123 Main Street, Lagos",
  price: "250,000,000",
  tag: "Auction 1:00 pm Sunday 23 April, 2023",
  bedrooms: "3",
  location: "Ibadan",
  bathrooms: "2",
  toilets: "2",
  parkinglots: "1",
  propertytype: "duplex",
  propertydescription:
    "EXQUISITE 2 BEDROOM, APARTMENTS & MAISONETTE IN LEKKI PHASE 1Discover the perfect blend of luxury and convenience with our exclusive list of 2 bedroom studio, apartments & maisonette in Lekki Phase 1.Each property is carefully curated to provide the best in modern design, spacious living areas, and the best of amenities. Our commitment to excellence extends beyond the properties themselves, with prime locations that put the best restaurants, shops, and attractions right at your fingertips.As your preferred partner in Lekki Phase 1 real estate, we are dedicated to providing you with only the best options. Book a viewing today and experience the ultimate in urban living.",
  leisureandshopping:
    "EXQUISITE 2 BEDROOM, APARTMENTS & MAISONETTE IN LEKKI PHASE 1Discover the perfect blend of luxury and convenience with our exclusive list of 2 bedroom studio, apartments & maisonette in Lekki Phase 1.Each property is carefully curated to provide the best in modern design, spacious",
  nightlife:
    "EXQUISITE 2 BEDROOM, APARTMENTS & MAISONETTE IN LEKKI PHASE 1Discover the perfect blend of luxury and convenience with our exclusive list of 2 bedroom studio, apartments & maisonette in Lekki Phase 1.Each property is carefully curated to provide the best in modern design, spacious",
  interestingfacts:
    "EXQUISITE 2 BEDROOM, APARTMENTS & MAISONETTE IN LEKKI PHASE 1Discover the perfect blend of luxury and convenience with our exclusive list of 2 bedroom studio, apartments & maisonette in Lekki Phase 1.Each property is carefully curated to provide the best in modern design, spacious living",
};

function SingleProperty() {
  const [view, setview] = useState("details");
  const [IsActive, setIsActive] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row gap-10 w-[90%] mx-auto ">
      <div className="w-full lg:w-[75%] xl:w-[70%]">
        <div className="p-4 border-homeGray border bg-white">
          <div className="border-homeGray border p-5 flex flex-col gap-4">
            <h1 className="text-base font-bold">AD595</h1>
            <div className="p-2 border border-homeGray rounded-md">
              <figure>
                <img
                  src={Data.propertyImg}
                  alt="property image"
                  className="w-full"
                />
              </figure>
              <figcaption className=" w-full pt-2">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <FaLocationDot className="text-homeGray" />
                    <p className="text-[0.95rem] font-semibold">
                      {Data.address}
                    </p>
                  </div>
                  <p className="text-[0.95rem] font-semibold">Realty Extra</p>
                </div>
                <p className="font-bold text-[0.95rem] py-2">{Data.price}</p>
                <div className="flex items-center justify-between">
                  <p className="italic text-[0.65rem] text-homeGray">
                    {Data.tag}
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="text-[0.65rem] text-homeGray">
                      {Data.bedrooms} bedrooms
                    </p>
                    <p className="text-[0.65rem] text-homeGray">
                      {Data.bathrooms} bathrooms
                    </p>
                    <p className="text-[0.65rem] text-homeGray">
                      {Data.toilets} toilets
                    </p>
                    <p className="text-[0.65rem] text-homeGray">
                      {Data.parkinglots} parkinglots
                    </p>
                  </div>
                </div>
              </figcaption>
            </div>

            <div className="flex gap-3 items-center">
              <button className="bg-homeBlue2 text-[0.70rem] text-white px-5 py-2 w-fit font-semibold">
                Buy
              </button>
              <button className="bg-homeBlue2 text-[0.70rem] text-white px-5 py-2 w-fit font-semibold">
                Request A Tour
              </button>
              <button className="bg-homeBlue2 text-[0.70rem] text-white px-5 py-2 w-fit font-semibold">
                Request to Apply
              </button>
              <button className="bg-homeBlue2 text-[0.70rem] text-white px-5 py-2 w-fit font-semibold">
                Take A virtual tour
              </button>
              <div className="flex flex-col items-center justify-center ml-6 relative top-5">
                <p className="text-homeOrange font-semibold text-[0.70rem]">
                  save property
                </p>

                <div className="relative">
                  <CiHeart className="text-5xl text-homeGray" />
                  <p className="text-red-600 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex text-[0.70rem]">
            <p
              className={`border ${
                view === "details" ? "border-homeBlue2" : "border-homeGray"
              }  px-3 py-1 cursor-pointer`}
              onClick={() => setview("details")}
            >
              Details
            </p>
            <p
              className={`border  ${
                view === "map" ? "border-homeBlue2" : "border-homeGray"
              }  px-3 py-1 cursor-pointer`}
              onClick={() => setview("map")}
            >
              Map
            </p>
            <p
              className={`border ${
                view === "guide" ? "border-homeBlue2" : "border-homeGray"
              }  px-3 py-1 cursor-pointer`}
              onClick={() => setview("guide")}
            >
              Area Guide
            </p>
          </div>

          {/* Details */}
          {view === "details" && (
            <div className="w-full pb-6 pt-3 text-[0.8rem]">
              <p className="mt-3 font-bold text-blue-500">
                Property Description
              </p>
              <p className="">{Data.propertydescription}</p>
              <p className="mt-3 font-bold text-blue-500">Property Features</p>
              <ul>
                <li>- Spacious Living Area</li>
                <li>- Balcony </li>
                <li>- Elevator</li>
                <li>- 24/7 Power Supply</li>
                <li>- General Cleaning Services</li>
                <li>- Industrial Clean Water Treatment</li>
                <li>- Drainage System</li>
                <li>- Fully Fitted Kitchen</li>
                <li>- Walk-in Closet</li>
                <li>- Ample Parking </li>
              </ul>
              <p className="mt-3 font-bold text-blue-500">Location</p>
              <ul>
                <li>- {Data.location} </li>
              </ul>
              <p className="mt-3 font-bold text-blue-500">Listing Price</p>
              <ul>
                <li> {Data.price} (in Naira)</li>
              </ul>

              <div className="border-2 border-homeGray text-[0.6rem] py-2 px-4 my-2 rounded-xl flex items-center justify-around">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-start">
                    <h1 className="font-bold text-black">property Refs:</h1>
                    <p className="text-black ml-1"> RR5678 </p>
                  </div>

                  <div className="flex items-center justify-start">
                    <h1 className="font-bold text-black">Market Status:</h1>
                    <p className="text-black ml-1"> Available </p>
                  </div>

                  <div className="flex items-center justify-start">
                    <h1 className="font-bold text-black">Toilet:</h1>
                    <p className="text-black ml-1"> {Data.toilets}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-start">
                    <h1 className="font-bold text-black">Last Updated:</h1>
                    <p className="text-black ml-1"> 20.6.2022 </p>
                  </div>

                  <div className="flex items-center justify-start">
                    <h1 className="font-bold text-black">Bathrooms:</h1>
                    <p className="text-black ml-1">{Data.bathrooms}</p>
                  </div>

                  <div className="flex items-center justify-start">
                    <h1 className="font-bold text-black">Date Added:</h1>
                    <p className="text-black ml-1"> </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-start">
                    <h1 className="font-bold text-black">Type:</h1>
                    <p className="text-black ml-1">{Data.propertytype}</p>
                  </div>

                  <div className="flex items-center justify-start">
                    <h1 className="font-bold text-black">Bedrooms:</h1>
                    <p className="text-black ml-1">{Data.bedrooms}</p>
                  </div>

                  <div className="flex items-center justify-start">
                    <h1 className="font-bold text-black">Parking Spaces:</h1>
                    <p className="text-black ml-1">{Data.parkinglots}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Map */}
          {view === "map" && (
            <div className="mt-3 mb-5">
              <img src={mapImg} alt="" className="w-full" />
            </div>
          )}

          {/* guide */}
          {view === "guide" && (
            <div className="w-full pb-6 pt-3 text-[0.8rem]">
              <p className=" font-bold text-blue-500">Interesting Facts</p>
              <p>{Data.interestingfacts}</p>
              <p className="mt-3 font-bold text-blue-500">
                Liesures and Shopping
              </p>

              <p>- {Data.leisureandshopping} </p>

              <p className="mt-3 font-bold text-blue-500">Night Life</p>
              <ul>
                <li> {Data.nightlife}</li>
              </ul>
            </div>
          )}
        </div>
        <div className="pb-16 bg-white">
          <div className="bg-homeBlue w-full px-4 py-8  text-white">
            <h3 className="text-base font-semibold">Disclaimer</h3>
            <p className="text-[0.8rem] pt-3">
              The information displayed about this property comprises a property
              advertisement. Nigeria Property Centre makes no warranty as to the
              accuracy or completeness of the advertisement or any linked or
              associated information, and Nigeria Property Centre has no control
              over the content. This property listing does not constitute
              property particulars.The information is provided and maintained by
              Beverly & Sam Properties.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[25%] xl:w-[30%] flex flex-col gap-6">
        <div className="border border-homeGray">
          <h1 className="w-full h-16 flex items-center justify-start px-2 bg-homeBlue text-white font-bold">
            Realtor
          </h1>
          <div className="bg-white">
            <div className="flex items-center justify-between py-5 px-10">
              <div className="flex flex-col justify-center gap-2">
                <div className="flex items-center">
                  <h2 className="text-base font-bold text-homeGray">
                    Realty Extra
                  </h2>
                  <IoShieldCheckmark className="text-[#00FF0A]" />
                </div>
                <p className="italic text-[0.8rem] text-homeGray font-normal">
                  Registered 3 years ago
                </p>
                <div className="flex items-center">
                  <FaLocationDot />
                  <p className="text-[0.9rem] font-normal">
                    19 Ajao Street, Lagos
                  </p>
                </div>
              </div>
              <div className="">
                <img src={rainbow} alt="" />
              </div>
            </div>
            <p className="text-[0.8rem] text-homeOrange underline font-semibold py-8 px-10">
              View all properties from this agent
            </p>
          </div>
        </div>
        <div className="bg-white p-8 border border-homeGray">
          <h1 className="font-semibold bg-homeBlue w-fit p-2 text-white text-base">
            Share this property
          </h1>
          <div className="flex items-center bg-gray-300 w-fit p-1 text-homeGray text-[0.65rem] font-bold mt-3">
            copy link
            <FaLink />
          </div>
          <div className="flex item-center justify-between gap-2 mt-3 px-3">
            <img src={facebook} alt="facebook" />
            <img src={whatsapp} alt="whatsapp" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className="bg-white p-8 flex flex-col gap-3 border border-homeGray">
          <div className="relative">
            <div
              className="flex items-center gap-3"
              onClick={() => setIsActive(true)}
            >
              <div className="text-red-600 text-[0.8rem] flex items-center border border-red-600 font-semibold p-2 w-fit cursor-pointer">
                <h1>Report this property</h1>
              </div>
              <TiWarning className="text-red-600 text-2xl" />
            </div>
            {IsActive && (
              <div className="absolute top-8 -translate-x-1/2 left-1/2 bg-white w-96 p-4 shadow-2xl border border-gray-300 rounded-2xl z-50">
                <div className="flex flex-col gap-4">
                  <div
                    className="h-4 w-4 bg-red-600 rounded-full text-white flex items-center justify-center text-sm cursor-pointer self-end"
                    onClick={() => setIsActive(false)}
                  >
                    <span>x</span>
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols={20}
                      rows={20}
                      className="border border-gray-400 w-full rounded-xl h-20 p-2"
                    ></textarea>
                  </div>
                  <div className="w-full flex justify-center item-center gap-4">
                    <button className="bg-[#50DA39] text-white p-2 rounded-md">
                      submit
                    </button>
                    <button className="bg-[#FB0312] text-white p-2 rounded-md">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-homeGray text-[0.8rem] flex items-center justify-start gap-2">
            <FaCirclePlus />
            <p>Add your complaints</p>
          </div>
        </div>

        <div className="bg-white p-8 border border-homeGray">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default SingleProperty;
