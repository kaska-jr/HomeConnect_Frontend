import { useState, useEffect } from "react";
import AgentProperty from "./AgentProperty";
import houseprop from "../../../public/houseprop.svg";
import dummyData from "../../dummydata";

import SearchForm from "../../Search/SearchForm";
import Property from "../../Property";

interface DummyData {
  address?: string;
  bedrooms?: number;
  toilets?: number;
  parkinglots?: number;
  price?: string;
  propertytype?: string;
  propertyImg: string;
  Propertycode: string;
}
[];

type Property = {
  address?: string;
  bedrooms?: string;
  toilets?: string;
  parkinglots?: string;
  price?: string;
  propertytype?: string;
  propertyImg: string;
};

const AgentProperties = (): JSX.Element => {
  const [properties, setProperties] = useState<any>(dummyData.slice(0, 6));
  const [showAllProperties, setShowAllProperties] = useState<boolean>(false);

  const handleSeeMoreClick = () => {
    console.log("clicked");
    // Simulate loading delay for demonstration purposes
    setTimeout(() => {
      if (!showAllProperties) {
        console.log("first");
        const remainingProperties = dummyData.slice(8);
        setProperties(properties.concat(remainingProperties));
        setShowAllProperties(true);
      } else {
        console.log("second");
        setProperties(dummyData.slice(0, 6));
        setShowAllProperties(false);
      }
    }, 100);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-[90%] mx-auto">
      <div className="w-full lg:w-[65%] xl:w-[74%]">
        <div className="flex flex-col items-center justify-center">
          <ul className="properties grid  xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 my-8">
            {properties.map((item: any, index: any) => (
              <Property
                key={index}
                apartment={item.apartment}
                location={item.location}
                rooms={item.rooms}
                meter={item.meter}
                price={item.price}
                propertyImage={item.propertyImage}
              />
            ))}
          </ul>
          {
            <button
              className="see-more-button bg-transparent w-[150px] h-[40px] md:flex items-center justify-center hidden text-[#0B2749] border-[#0B2749] border-2 text-sm font-semibold rounded-md"
              onClick={handleSeeMoreClick}
            >
              {showAllProperties ? "See Less" : "See More"}
            </button>
          }
        </div>
      </div>
      <div className="w-full lg:w-[35%] xl:w-[26%] border border-gray h-fit bg-white p-4 xl:p-9">
        <SearchForm />
      </div>
    </div>
  );
};

export default AgentProperties;
