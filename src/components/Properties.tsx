import { useState, useEffect } from "react";
import Property from "../components/Property";

import dummyData from "./dummydata";

const Properties = () => {
  type Property = {
    apartment: string;
    location: string;
    rooms: number;
    meter: number;
    price: number;
    propertyImage: string;
  };

  const [loading, setLoading] = useState<boolean>(true);
  const [properties, setProperties] = useState<Property[]>([]);
  const [showAllProperties, setShowAllProperties] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
    // console.log(dummyData);

    // Simulate loading delay for demonstration purposes
    setTimeout(() => {
      setLoading(false);
      setProperties(dummyData.slice(0, 6)); // Display the first 8 properties initially
    }, 1000);
  }, []);

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

  const fetchData = () => {
    fetch("http://localhost:5005/api/property", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(
            `Network response was not ok:${res.status} ${res.statusText}`
          );
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return loading ? (
    <h1 className="notfound">Loading...</h1>
  ) : properties.length === 0 ? (
    <h1 className="notfound">No Property is available for Display</h1>
  ) : (
    <div className="flex flex-col w-full  items-center justify-around">
      <ul className="properties md:w-[95%] w-[95%] justify-items-center grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  md:gap-12 md:my-8 gap-8">
        {properties.map((item, index) => (
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
  );
};

export default Properties;
