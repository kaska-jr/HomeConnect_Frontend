import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";

const SearchForm = () => {
  return (
    <div className="w-full bg-white">
      <div className="bg-homeBlue font-bold text-white px-4 py-2 w-full flex items-center justify-center">
        Search for Property
      </div>

      <div className="my-4 w-full">
        <label htmlFor="location" className="text-black font-semibold bg-white">
          Location
        </label>
        <div className="relative my-2">
          <input
            type="text"
            name="location"
            id="location"
            className="outline-none border border-[lightBlue] bg-transparent w-full h-9 p-3 font-semibold text-sm placeholder:text-[#797A81]"
            placeholder="Enter Location"
          />

          <FaLocationDot className="absolute text-gray top-0 right-3 translate-y-1/2 text-[#797A81]" />
        </div>
      </div>

      <div className="mb-4 w-full bg-white">
        <label htmlFor="category" className="text-black font-semibold">
          Category
        </label>
        <div className="relative my-2">
          <input
            type="text"
            name="category"
            id="category"
            className="outline-none border border-[lightBlue] w-full h-9 p-3 font-semibold text-sm bg-transparent placeholder:text-[#797A81]"
            placeholder="Sales"
          />

          <IoIosArrowDropdown className="absolute text-gray top-0 right-3 translate-y-1/2 text-[#797A81]" />
        </div>
      </div>

      <div className="mb-4 w-full flex gap-5 bg-white">
        <div className="w-[60%]">
          <label htmlFor="duplex" className="text-black font-semibold">
            Types
          </label>
          <div className="relative my-2">
            <input
              type="text"
              name="duplex"
              id="duplex"
              className="outline-none border border-[lightBlue] w-full h-9 p-3 font-semibold text-sm bg-transparent placeholder:text-[#797A81]"
              placeholder="Duplex"
            />
          </div>
        </div>
        <div className="w-[40%] bg-white">
          <label
            htmlFor="bedrooms"
            className="text-black font-semibold bg-transparent"
          >
            Bedrooms
          </label>
          <div className="relative my-2">
            <input
              type="text"
              name="bedrooms"
              id="bedrooms"
              className="outline-none border border-[lightBlue] w-full h-9 p-3 font-semibold text-sm bg-transparent placeholder:text-[#797A81]"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 w-full flex gap-5 bg-white">
        <div className="w-[60%]">
          <label
            htmlFor="Enter Location"
            className="text-black font-semibold bg-white"
          >
            Location
          </label>
          <div className="relative my-2">
            <input
              type="text"
              name="location"
              id="location"
              className="outline-none border border-[lightBlue] w-full h-9 p-3 font-semibold text-sm bg-transparent placeholder:text-[#797A81]"
              placeholder="Enter Location"
            />
          </div>
        </div>
        <div className="w-[40%] bg-white">
          <label
            htmlFor="bedrooms"
            className="text-black font-semibold appearance-none"
          >
            Bedrooms
          </label>
          <div className="relative my-2">
            <input
              type="text"
              name="bedrooms"
              id="bedrooms"
              className="outline-none border border-[lightBlue] w-full h-9 p-3 font-semibold text-sm bg-transparent placeholder:text-[#797A81]"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 w-full flex gap-5 bg-white">
        <div className="w-[60%]">
          <label
            htmlFor="Enter Location"
            className="text-black font-semibold bg-white"
          >
            Location
          </label>
          <div className="relative my-2">
            <input
              type="text"
              name="location"
              id="location"
              className="outline-none border border-[lightBlue] w-full h-9 p-3 font-semibold text-sm bg-transparent placeholder:text-[#797A81]"
              placeholder="Enter Location"
            />
          </div>
        </div>
        <div className="w-[40%]">
          <label
            htmlFor="bedrooms"
            className="text-black font-semibold appearance-none bg-white"
          >
            Bedrooms
          </label>
          <div className="relative my-2 bg-white">
            <input
              type="text"
              name="bedrooms"
              id="bedrooms"
              className="outline-none border border-[lightBlue] w-full h-9 p-3 font-semibold text-sm bg-transparent placeholder:text-[#797A81]"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 w-full flex gap-5 bg-white">
        <div className="w-[60%]">
          <label
            htmlFor="Enter Location"
            className="text-black font-semibold bg-white"
          >
            Location
          </label>
          <div className="relative my-2">
            <input
              type="text"
              name="location"
              id="location"
              className="outline-none border border-[lightBlue] w-full h-9 p-3 font-semibold text-sm bg-transparent placeholder:text-[#797A81]"
              placeholder="Enter Location"
            />
          </div>
        </div>
        <div className="w-[40%] bg-white">
          <label
            htmlFor="bedrooms"
            className="text-black font-semibold appearance-none bg-white"
          >
            Bedrooms
          </label>
          <div className="relative my-2">
            <input
              type="text"
              name="bedrooms"
              id="bedrooms"
              className="outline-none border border-[lightBlue] w-full h-9 p-3 font-semibold text-sm bg-transparent placeholder:text-[#797A81]"
              placeholder="Max"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="bg-[#0D99FF] font-bold text-white px-4 py-2 w-[75%]">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
