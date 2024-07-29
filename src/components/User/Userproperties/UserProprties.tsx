import { useState, useEffect } from "react";
import AgentProperty from "./UserProperty";
import houseprop from "../../../public/houseprop.svg";

import SearchForm from "../../Search/SearchForm";

interface dummyData {
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

const dummyData: dummyData[] = [
  {
    address: "Miami Beach, FL",
    bedrooms: 3,
    toilets: 150,
    parkinglots: 5,
    price: "750000",
    propertytype: "duplex",
    propertyImg: `${houseprop}`,
    Propertycode: "AD600",
  },
  {
    address: "Miami Beach, FL",
    bedrooms: 3,
    toilets: 150,
    parkinglots: 5,
    price: "750000",
    propertytype: "duplex",
    propertyImg: `${houseprop}`,
    Propertycode: "AD600",
  },
  {
    address: "Miami Beach, FL",
    bedrooms: 3,
    toilets: 150,
    parkinglots: 5,
    price: "750000",
    propertytype: "duplex",
    propertyImg: `${houseprop}`,
    Propertycode: "AD600",
  },
  {
    address: "Miami Beach, FL",
    bedrooms: 3,
    toilets: 150,
    parkinglots: 5,
    price: "750000",
    propertytype: "duplex",
    propertyImg: `${houseprop}`,
    Propertycode: "AD600",
  },
  {
    address: "Miami Beach, FL",
    bedrooms: 3,
    toilets: 150,
    parkinglots: 5,
    price: "750000",
    propertytype: "duplex",
    propertyImg: `${houseprop}`,
    Propertycode: "AD600",
  },
  {
    address: "Miami Beach, FL",
    bedrooms: 3,
    toilets: 150,
    parkinglots: 5,
    price: "750000",
    propertytype: "duplex",
    propertyImg: `${houseprop}`,
    Propertycode: "AD600",
  },
  {
    address: "Miami Beach, FL",
    bedrooms: 3,
    toilets: 150,
    parkinglots: 5,
    price: "750000",
    propertytype: "duplex",
    propertyImg: `${houseprop}`,
    Propertycode: "AD600",
  },
  {
    address: "Miami Beach, FL",
    bedrooms: 3,
    toilets: 150,
    parkinglots: 5,
    price: "750000",
    propertytype: "duplex",
    propertyImg: `${houseprop}`,
    Propertycode: "AD600",
  },
  {
    address: "Miami Beach, FL",
    bedrooms: 3,
    toilets: 150,
    parkinglots: 5,
    price: "750000",
    propertytype: "duplex",
    propertyImg: `${houseprop}`,
    Propertycode: "AD600",
  },
  {
    address: "Miami Beach, FL",
    bedrooms: 3,
    toilets: 150,
    parkinglots: 5,
    price: "750000",
    propertytype: "duplex",
    propertyImg: `${houseprop}`,
    Propertycode: "AD600",
  },
  {
    address: "Miami Beach, FL",
    bedrooms: 3,
    toilets: 150,
    parkinglots: 5,
    price: "750000",
    propertytype: "duplex",
    propertyImg: `${houseprop}`,
    Propertycode: "AD600",
  },
];

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
  const [loading, setLoading] = useState<boolean>(true);
  const [properties, setProperties] = useState<Property[]>([]);
  const [showAllProperties, setShowAllProperties] = useState<boolean>(false);

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    setTimeout(() => {
      setLoading(false);
      setProperties(dummyData.slice(0, 6)); // Display the first 6 properties initially
    }, 100);
  }, []);

  const handleSeeMoreClick = (): void => {
    console.log("clicked");
    // Simulate loading delay for demonstration purposes
    setTimeout(() => {
      if (!showAllProperties) {
        console.log("first");
        const remainingProperties = dummyData.slice(6);
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
        {loading ? (
          <h1 className="notfound h-[calc(85vh-400px)] flex items-center justify-center">
            Loading...
          </h1>
        ) : properties.length === 0 ? (
          <h1 className="notfound">No Property is available for Display</h1>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <ul className="properties grid  xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 my-8">
              {properties.map(
                (item: Property, index: number): JSX.Element => (
                  <AgentProperty
                    key={index}
                    address={item.address}
                    bedrooms={item.bedrooms}
                    toilets={item.toilets}
                    parkinglots={item.parkinglots}
                    price={item.price}
                    propertytype={item.propertytype}
                    propertyImg={item.propertyImg}
                  />
                )
              )}
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
        )}
      </div>
      <div className="w-full lg:w-[35%] xl:w-[26%] border border-gray h-fit bg-white p-4 xl:p-9">
        <SearchForm />
      </div>
    </div>
  );
};

export default AgentProperties;
