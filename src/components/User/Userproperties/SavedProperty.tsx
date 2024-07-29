import React from "react";
import toiletIcon from "../../../public/Listing_toilet.svg";
import bedroomIcon from "../../../public/listing_bedroom.svg";
import parkinglotIcon from "../../../public/Listing_parking.svg";
import { IoLocation } from "react-icons/io5";

function SavedProperty({
  propertyType,
  propertyPictures,
  toilet,
  bedroom,
  parkingLots,
  address,
  price,
}) {
  return (
    <div className="flex items-center justify-center w-1/3 text-black border-2 rounded-md p-2">
      <div className="">
        <img src={propertyPictures} alt="" />
        <div className="text-[0.6rem] font-semibold flex items-center justify-between py-2">
          <span>{propertyType}</span>
          <div className="flex justify-center items-center gap-2">
            <div className="flex items-center gap-1">
              <img src={bedroomIcon} alt="" className="h-3 w-3" />
              <span>{bedroom}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={toiletIcon} alt="" className="h-3 w-3" />
              <span>{toilet}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={parkinglotIcon} alt="" className="h-3 w-3" />
              <span>{parkingLots}</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px]  bg-slate-400"></div>
        <div className="text-[0.55rem] font-medium flex items-center justify-between mt-2">
          <div className="flex items-center text-black">
            <IoLocation /> <p>{address}</p>
          </div>
          <div className="bg-[#F6F1F1] text-[#0D99FF] px-2 py-1  w-fit rounded-md">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedProperty;
