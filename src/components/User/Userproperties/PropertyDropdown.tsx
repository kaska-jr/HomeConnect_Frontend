import SearchIcon from "@mui/icons-material/Search";
import rectangle from "../../../public/rectangle.svg";
import triangle from "../../../public/triangle.svg";

type PropertyDropdownProps = {
  Propertyfn: () => void;
  btnTitle: string;
  title: string;
};
function PropertyDropdown({
  Propertyfn,
  btnTitle,
  title,
}: PropertyDropdownProps) {
  return (
    <div className="text-gray h-full">
      <h1 className="text-black font-bold text-base  px-6 pt-4">{title}</h1>

      <div className="relative  p-6">
        <SearchIcon className="text-homeGray absolute left-0 text-2xl top-1/2 -translate-y-1/2 translate-x-10" />
        <input
          type="text"
          name="propertyname"
          id="propertyname"
          placeholder="Enter Property Name or Tag"
          className="w-full px-4 text-homeGray py-5 outline-0 border border-gray rounded-xl text-center font-bold"
        />
      </div>

      <div className="border-t-2 border-gray my-3 p-6 flex flex-col item-between">
        <p className="text-black font-bold mb-4">Filter</p>
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-2 w-[50%]">
            <div className="flex flex-row gap-2 items-center justify-start">
              <label
                className="text-sm font-bold text-homeGray"
                htmlFor="propertytype"
              >
                Property Type
              </label>
              <img src={rectangle} alt="rectangle" />
            </div>

            <div className="w-full relative my-2">
              <img
                src={triangle}
                alt="triangle"
                className="absolute right-2 top-1/2 -translate-y-1/2"
              />
              <select
                name="propertytype"
                id="propertytype"
                className="border border-[rgb(183,196,202)] rounded-lg  text-[#9DA1A8] outline-none h-10 appearance-none w-full text-sm px-4 text-center"
              >
                <option value="" className="hover:bg-green-600">
                  choose a property type
                </option>
                <option value="duplex">duplex</option>
                <option value="bungalow">bungalow</option>
                <option value="2 Story">Airbnb</option>
                <option value="2 Story">Apartment</option>
                <option value="2 Story">Condominium</option>
                <option value="2 Story">Villa</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[15%]">
            <div className="flex flex-row gap-2 items-center justify-start">
              <label
                className="font-semibold text-sm text-homeGray"
                htmlFor="units"
              >
                units
              </label>
              <img src={rectangle} alt="rectangle" />
            </div>

            <div className="w-full relative my-2">
              <img
                src={triangle}
                alt="triangle"
                className="absolute right-1 top-1/2 -translate-y-1/2"
              />
              <select
                name="units"
                id="units"
                className="border border-[rgb(183,196,202)]  text-[#9DA1A8] outline-none h-10 appearance-none w-full text-sm px-4 text-center"
              >
                <option value="0" className="hover:bg-green-600">
                  0
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-[50%]">
          <div className="flex flex-row gap-2 items-center justify-start">
            <label
              className="text-sm font-semibold text-homeGray"
              htmlFor="location"
            >
              Location
            </label>
            <img src={rectangle} alt="rectangle" />
          </div>

          <div className="w-full relative my-2">
            <img
              src={triangle}
              alt="triangle"
              className="absolute right-2 top-1/2 -translate-y-1/2"
            />
            <select
              name="location"
              id="location"
              className="border border-[rgb(183,196,202)] rounded-lg  text-[#9DA1A8] outline-none h-10 appearance-none w-full text-sm px-4 text-center"
            >
              <option value="" className="hover:bg-green-600">
                set Location
              </option>
              <option value="abia">Abia</option>
              <option value="lagos">lagos</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-[50%]">
          <div className="flex flex-row gap-2 items-center justify-start">
            <label
              className="text-sm font-semibold text-homeGray"
              htmlFor="price"
            >
              Price
            </label>
            <img src={rectangle} alt="rectangle" />
          </div>

          <div className="w-full relative my-2">
            <input
              id="price"
              name="price"
              placeholder="set price"
              type="text"
              className="w-full h-10 border-homeGray outline-none border rounded-lg text-center"
            />
            <p className="text-homeOrange text-[7px]">
              Check Our Recommendations For Your Property Type
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-[50%]">
          <div className="flex flex-row gap-2 items-center justify-start">
            <label
              className="text-sm font-semibold text-homeGray"
              htmlFor="propertytype"
            >
              Date
            </label>
            <img src={rectangle} alt="rectangle" />
          </div>

          <div className="w-full relative my-2">
            <input
              type="text"
              placeholder="Enter the date you added the property"
              className="w-full h-10 border-homeGray outline-none border rounded-lg text-[10px] p-2 text-center"
            />
            <p className="text-homeOrange text-[7px] leading-3">
              Ensure to tag your property appropriately to avoid misinforming
              your audience
            </p>
          </div>
        </div>

        <button
          className="bg-[#4959EE] w-full h-12 text-center rounded-lg font-bold text-sm text-white"
          onClick={Propertyfn}
        >
          {btnTitle}
        </button>
      </div>
    </div>
  );
}

export default PropertyDropdown;
