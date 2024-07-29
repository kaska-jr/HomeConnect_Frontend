import { useState } from "react";
import ellipse from "../../../public/Ellipse 26.svg";
import bedroomImg from "../../../public/listing_bedroom.svg";
import toiletImg from "../../../public/Listing_toilet.svg";
import parkingImg from "../../../public/Listing_parking.svg";
import mapImg from "../../../public/map.svg";
import uploadIcon from "../../../public/upload_image_icon.svg";
import propertyPlus from "../../../public/property_plus.svg";
import Carousel from "../../Agent/Agentproperties/Carousel";

interface PropertyData {
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  title: string;
  description: string;
  type: string;
  propertyState: string;
  rentType: string;
  price: number | undefined;
  pictures: [string];
  pdf: string;
}

// unit: string;
//   bathrooms: string;
//   bedrooms: string;
//   toilets: string;
//   features: string[];
//   leisureandshopping: string;
//   nightlife: string;
//   interestingfacts: string;
//   parkinglots: string;

interface Preview {
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  title: string;
  description: string;
  type: string;
  propertyState: string;
  rentType: string;
  price: number | undefined;
  pictures: [string];
  pdf: string;
}

const AddProperty = () => {
  //propertyData state
  const [propertyData, setpropertyData] = useState<PropertyData>({
    location: {
      address: "",
      city: "",
      state: "",
      zip: "",
    },
    title: "",
    description: "",
    type: "",
    propertyState: "",
    rentType: "",
    price: undefined,
    pictures: [""],
    pdf: "",
  });

  // unit: "",
  // bathrooms: "",
  // bedrooms: "",
  // toilets: "",
  // features: [],
  // leisureandshopping: "",
  // nightlife: "",
  // interestingfacts: "",
  // parkinglots: "",

  const [preview, setPreview] = useState<Preview>({
    location: {
      address: "",
      city: "",
      state: "",
      zip: "",
    },
    title: "",
    description: "",
    type: "",
    propertyState: "",
    rentType: "",
    price: undefined,
    pictures: [""],
    pdf: "",
  });
  const [openPreview, setOpenPreview] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false); // Checkbox 1 state
  const [isChecked2, setIsChecked2] = useState(false); // Checkbox 2 state
  const [activeDrop, setActiveDrop] = useState("details");
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [files, setFiles] = useState([]);
  const [fileShowing, setFileShowing] = useState(false);
  const [fileNumber, setFileNumber] = useState(0);

  //handle input change(Except property features)
  const handleInputChange = (e: any) => {
    if (e.target.name === "pictures") {
      console.log(e.target.name);

      if (e.target.files && e.target.files.length > 0) {
        const fileList = e.target.files;
        const pictureArray: string[] = [];

        // Convert FileList to array of picture URLs
        for (let i = 0; i < fileList.length; i++) {
          const pictureUrl = URL.createObjectURL(fileList[i]);
          pictureArray.push(pictureUrl);
        }
        console.log(pictureArray);
        setFiles(e.target.files);
        setpropertyData({
          ...propertyData,
          [e.target.name]: pictureArray,
        });
        const fileNumber = e.target.files?.length;
        setFileShowing(true);
        setFileNumber(fileNumber);
      }
    } else if (e.target.name === "pdf") {
      console.log(e.target.files?.[0].name);
      setpropertyData({
        ...propertyData,
        [e.target.name]: e.target.files?.[0].name,
      });
    } else if (
      e.target.name === "address" ||
      e.target.name === "city" ||
      e.target.name === "state" ||
      e.target.name === "zip"
    ) {
      setpropertyData({
        ...propertyData,
        location: {
          ...propertyData.location,
          [e.target.name]: e.target.value,
        },
      });
    } else if (e.target.name === "price") {
      setpropertyData({
        ...propertyData,
        [e.target.name]: Number(e.target.value),
      });
    } else {
      setpropertyData({
        ...propertyData,
        [e.target.name]: e.target.value,
      });
    }
  };
  console.log(propertyData);

  //handle Product Feature Addition & Removal (Do not Delete)
  // const productFeatures = [
  //   "24/7 power supply",
  //   "24/7 water supply",
  //   "Elevator",
  //   "Area Balcony",
  //   "spacious living",
  //   "serene Environment",
  //   "General Cleaning Services",
  //   "Industrial Clean Water Treatment",
  //   "Drainage System",
  //   "Fully Fitted Kitchen",
  //   "Walk-in Closet",
  //   "Ample Parking",
  // ];

  // const handleFeatureClick = (e: any, feature: string) => {
  //   if (propertyData.features.includes(feature)) {
  //     return;
  //   } else {
  //     e.target.parentElement.style.backgroundColor = "#4959EE";
  //     setpropertyData({
  //       ...propertyData,
  //       features: [...propertyData.features, feature],
  //     });
  //   }
  // };
  // const handleFeatureRemoval = (e: any, feature: string) => {
  //   e.target.parentElement.style.backgroundColor = "";
  //   setpropertyData({
  //     ...propertyData,
  //     features: propertyData.features.filter((f) => f !== feature),
  //   });
  // };

  //Handle Submit
  const api = "http://localhost:5005/api/property";
  const handleSubmit = async () => {
    console.log(propertyData);
    if (isChecked1 && isChecked2) {
      // Assuming authToken is the authentication token obtained during login(should be passed dynamically)
      //const authToken = "user_actual_authentication_token";
      try {
        const response = await fetch(api, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            //Authorization: `Bearer ${authToken}`, // Include the authentication token
          },
          body: JSON.stringify(propertyData),
        });
        if (!response.ok) {
          throw new Error("Failed to send property data");
        }
        const data = await response.json();
        console.log("Property data sent successfully:", data);
      } catch (error) {
        console.error("Error sending property data:", error);
      }
    }
  };

  //handle PropertyData preview
  const handlePreview = () => {
    //image file reader
    const previewFiles: string[] = [];
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        previewFiles.push(reader.result as string);
        setImagePreview([...previewFiles]);
      };
      reader.readAsDataURL(file);
    }
    setPreview(propertyData);
    setOpenPreview(true);
  };

  return (
    <div className="flex flex-col gap-3 items-center w-[90vw] mx-auto bg-white p-8 max-w-[1500px]">
      <div className="flex flex-row items-center w-full justify-start mb-8">
        <div className="w-[33px] h-[33px] relative">
          <img src={ellipse} alt="propertyIcon" className="w-full h-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={propertyPlus} alt="propertyPlus" width={30} height={30} />
          </div>
        </div>
        <h2 className="text-[#0B2749] text-4xl font-bold ml-2">
          Add a Property
        </h2>
      </div>

      <div className="flex flex-row gap-10 items-start justify-center w-full">
        <div className="flex flex-col gap-3 w-[24%]">
          <div className="flex flex-row gap-2 w-full">
            <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
              <p className="font-semibold text-lg">Property Type</p>
              <select
                name="type"
                className="border border-[rgb(183,196,202)] rounded-lg p-2 text-sm bg-white"
                value={propertyData.type}
                onChange={handleInputChange}
              >
                <option value="">choose a property type</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Space">Space</option>
                <option value="Other">Other</option>
              </select>

              <p className="text-homeOrange text-[0.55rem] font-bold">
                Check Our Recommendations For Your Property Type
              </p>
            </label>

            {/* <label className="flex flex-col gap-2 text-[#63646B] w-1/5">
              <p className="font-semibold text-lg">Unit</p>
              <select
                name="unit"
                className="border border-[#B7C4CA] w-full rounded-lg p-2 text-sm text-[#9DA1A8]"
                // value={propertyData.unit}
                // onChange={handleInputChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </label> */}
          </div>

          <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
            <p className="font-semibold text-lg">State</p>
            <select
              name="state"
              className="border border-[#B7C4CA] rounded-lg p-2 text-sm text-[#9DA1A8] bg-white"
              value={propertyData.location.state}
              onChange={handleInputChange}
              placeholder="Set your state"
            >
              <option value="Enter yourState">Enter your State</option>
              <option value="abia">Abia</option>
              <option value="kano">Kano</option>
              <option value="kaduna">Kaduna</option>
              <option value="edo">Edo</option>
              <option value="lagos">Lagos</option>
              <option value="abakaliki"> Abakaliki</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
            <p className="font-semibold text-lg">Property State</p>
            <select
              name="propertyState"
              className="border border-[#B7C4CA] rounded-lg p-2 text-sm text-[#9DA1A8] bg-white"
              value={propertyData.propertyState}
              onChange={handleInputChange}
              placeholder="set property status"
            >
              <option value="">select property status</option>
              <option value="Renovated">Renovated</option>
              <option value="Old">Old</option>
              <option value="Public Compound">Public Compound</option>
              <option value="Private Compound">Private Compound</option>
              <option value="Estate">Estate</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
            <p className="font-semibold text-lg">rentType</p>
            <select
              name="rentType"
              className="border border-[#B7C4CA] rounded-lg p-2 text-sm text-[#9DA1A8] bg-white"
              value={propertyData.rentType}
              onChange={handleInputChange}
              placeholder="set Rent Type"
            >
              <option value="">select rent type</option>
              <option value="Yearly">Yearly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
            <p className="font-semibold text-lg">Address</p>
            <input
              type="text"
              name="address"
              placeholder="2 St. Micheals Street, Aba"
              className="border border-[#B7C4CA]  rounded-lg p-2 text-sm text-[#9DA1A8] bg-white"
              value={propertyData.location.address}
              onChange={handleInputChange}
            />
          </label>

          <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
            <p className="font-semibold text-lg">city</p>
            <input
              type="text"
              name="city"
              placeholder="Aba"
              className="border border-[#B7C4CA]  rounded-lg p-2 text-sm text-[#9DA1A8] bg-white"
              value={propertyData.location.city}
              onChange={handleInputChange}
            />
          </label>

          <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
            <p className="font-semibold text-lg">zip code</p>
            <input
              type="text"
              name="zip"
              placeholder="4500789"
              className="border border-[#B7C4CA]  rounded-lg p-2 text-sm text-[#9DA1A8] bg-white"
              value={propertyData.location.zip}
              onChange={handleInputChange}
            />
          </label>

          <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
            <p className="font-semibold text-lg">Price</p>
            <input
              type="text"
              name="price"
              placeholder="Set Price"
              className="border border-[#B7C4CA]  rounded-lg p-2 text-sm text-[#9DA1A8] bg-white"
              value={propertyData.price}
              onChange={handleInputChange}
            />
          </label>

          <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
            <p className="font-semibold text-lg">Title</p>
            <input
              type="text"
              name="title"
              placeholder="e.g. Bayoko 2 Bedroom Apartment"
              className="border border-[#B7C4CA] rounded-lg p-2 text-xs text-[#9DA1A8] bg-white"
              value={propertyData.title}
              onChange={handleInputChange}
            />
            <p className="text-homeOrange text-[0.55rem] font-bold">
              Ensure to tag your property appropriately to avoid
              <br />
              misinforming your audience
            </p>
          </label>

          {/* (Do not Delete) */}
          {/* <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
            <p className="font-semibold text-lg">Bathroom</p>
            <input
              type="text"
              name="bathrooms"
              placeholder="2"
              className="border border-[#B7C4CA]  rounded-lg p-2 text-xs text-[#9DA1A8]"
              value={propertyData.bathrooms}
              onChange={handleInputChange}
            />
          </label> */}

          {/* <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
            <p className="font-semibold text-lg">Toilet</p>
            <input
              type="text"
              name="toilets"
              placeholder="2"
              className="border border-[#B7C4CA] rounded-lg p-2 text-xs text-[#9DA1A8]"
              value={propertyData.toilets}
              onChange={handleInputChange}
            />
          </label> */}

          {/* <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
            <p className="font-semibold text-lg">Bed Rooms</p>
            <input
              type="text"
              name="bedrooms"
              placeholder="2"
              className="border border-[#B7C4CA] rounded-lg p-2 text-xs text-[#9DA1A8]"
              value={propertyData.bedrooms}
              onChange={handleInputChange}
            />
          </label> */}

          {/* <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
            <p className="font-semibold text-lg">Parking Lots</p>
            <input
              type="text"
              name="parkinglots"
              placeholder="1"
              className="border border-[#B7C4CA] rounded-lg p-2 text-xs text-[#9DA1A8]"
              value={propertyData.parkinglots}
              onChange={handleInputChange}
            />
          </label> */}

          {/* <label className="flex flex-col gap-2 text-[#63646B] w-4/5">
            <p className="font-semibold text-lg">Property Features</p>
            <div className="border border-[#B7C4CA] p-2 rounded-lg flex flex-wrap gap-2">
              {productFeatures.map((item, index) => (
                <div
                  className={`bg-[#F3F3F3] text-[#9DA1A8] rounded-lg p-2 text-xs flex items-center justify-center gap-2`}
                  key={index}
                >
                  <p
                    onClick={(e) => {
                      handleFeatureClick(e, item);
                    }}
                  >
                    {item}
                  </p>

                  <p
                    onClick={(e) => handleFeatureRemoval(e, item)}
                    className="border bg-[#B7C4CA] w-4 h-4 rounded-full text-white flex items-center justify-center cursor-pointer text-xs"
                  >
                    x
                  </p>
                </div>
              ))}
            </div>
          </label> */}
        </div>

        <div className="flex flex-col gap-2 w-[40%] ">
          <label className="flex flex-col gap-1 text-[#63646B] w-full bg-white">
            <div className="flex items-center gap-10">
              <p className="font-semibold text-lg">Upload Gallery</p>
              {fileShowing && (
                <p className="text-green-400 text-xs font-bold justify-self-center">
                  {fileNumber} image added successfully!
                </p>
              )}
            </div>
            <div className="relative h-24 border border-[#B7C4CA] rounded-md">
              <input
                type="file"
                multiple
                name="pictures"
                accept="image/jpg, image/jpeg, image/png"
                className="rounded-lg p-2 text-xs text-[#9DA1A8] opacity-0 h-0 w-0 bg-white"
                onChange={handleInputChange}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={uploadIcon}
                    alt="uploadIcon"
                    width={40}
                    height={40}
                  />
                  <p className="text-xs text-gray font-bold">
                    Drag the File here Or
                    <span className="text-homeOrange underline">
                      {" "}
                      Choose File
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="text-homeOrange text-[0.55rem] font-bold">
              Add to this Gallery
            </p>
          </label>

          <label className="flex flex-col gap-1 text-[#63646B] w-full bg-white">
            <div className="flex items-center gap-10">
              <p className="font-semibold text-lg">Include a pdf</p>
            </div>
            <div className="relative rounded-md">
              <input
                type="file"
                name="pdf"
                accept=".pdf"
                onChange={handleInputChange}
                className="p-2 bg-white border border-[#9DA1A8] rounded-md text-xs text-[#9DA1A8] outline-none w-full"
              />
            </div>
          </label>

          <label className="flex flex-col gap-1 text-[#63646B] w-full bg-white">
            <p className="font-semibold text-lg">Property Description</p>
            <textarea
              name="description"
              className="border border-[#B7C4CA] rounded-lg p-2 text-xs text-[#9DA1A8] h-32 bg-white"
              value={propertyData.description}
              onChange={handleInputChange}
              maxLength={300}
            ></textarea>
            <p className="text-homeOrange text-[0.55rem] font-bold">
              Maximum 300 Characters
            </p>
          </label>

          <div className="flex justify-between gap-3 my-1 items-center ">
            <button className="bg-gradient-to-b from-[#4959EE] to-[#0B2749] px-3 py-2 text-white text-xs w-32 font-bold">
              Area Guide
            </button>
            <p className="text-homeOrange text-[0.5rem] font-bold">
              Ensure to tag your property appropriately to avoid misinforming
              your audience
            </p>
          </div>
          {/* (Do not Delete) */}
          {/* <label className="flex flex-col gap-1 text-[#63646B] w-full">
            <p className="font-semibold text-lg text-[#7AB9E7]">
              Interesting Facts
            </p>
            <textarea
              name="interestingfacts"
              className="border border-[#B7C4CA] h-20 rounded-lg p-2 text-xs text-[#9DA1A8]"
              value={propertyData.interestingfacts}
              onChange={handleInputChange}
            ></textarea>
          </label>

          <label className="flex flex-col gap-1 text-[#63646B] w-full">
            <p className="font-semibold text-lg text-[#7AB9E7]">
              Leisure and Shopping
            </p>
            <textarea
              name="leisureandshopping"
              className="border border-[#B7C4CA] h-24 rounded-lg p-2 text-xs text-[#9DA1A8]"
              value={propertyData.leisureandshopping}
              onChange={handleInputChange}
            ></textarea>
          </label>

          <label className="flex flex-col gap-1 text-[#63646B] w-full">
            <p className="font-semibold text-lg text-[#7AB9E7]">Night Life</p>
            <textarea
              name="nightlife"
              className="border border-[#B7C4CA] h-24 rounded-lg p-2 text-xs text-[#9DA1A8]"
              value={propertyData.nightlife}
              onChange={handleInputChange}
            ></textarea>
          </label> */}

          <div className="flex flex-col gap-3 bg-[#0B2749] text-white w-full p-4 my-16 italic">
            <div className="flex flex-row gap-1 items-center justify-start">
              <div className="w-4 h-4 mr-2">
                <input
                  type="checkbox"
                  checked={isChecked1}
                  onChange={() => setIsChecked1(!isChecked1)}
                  className="h-full w-full"
                />
              </div>
              <p className="text-base">
                I am sure that all the information is valid and correct
              </p>
            </div>

            <div className="flex flex-row gap-1 items-center justify-start">
              <div className="w-6 h-6 mr-2">
                <input
                  className="h-full w-full"
                  type="checkbox"
                  checked={isChecked2}
                  onChange={() => setIsChecked2(!isChecked2)}
                />
              </div>

              <p>
                I am sure that all the information is in accordance with{" "}
                <a href="#" className="underline text-homeOrange">
                  HomeConnect Privecy and Policy
                </a>
              </p>
            </div>

            <div className="flex flex-row gap-x-6">
              <button
                className="w-24 h-12 bg-[#0D99FF] rounded-xl hover:text-[#0D99FF] hover:bg-white transition-all"
                // onClick={handleSaveData}
              >
                Save
              </button>

              <button
                className="w-24 h-12 bg-[#FF7E00] rounded-xl hover:text-[#FF7E00] hover:bg-white transition-all"
                onClick={handlePreview}
              >
                Preview
              </button>

              <button
                className={`w-24 h-12 bg-[#FFFFFF] rounded-xl hover: text-[#9DA1A8] ${
                  isChecked1 && isChecked2
                    ? "hover:bg-[#9DA1A8] hover:text-[#FFFFFF]"
                    : ""
                } transition-all`}
                onClick={handleSubmit}
                disabled={isChecked1 && isChecked2 ? false : true} // Disable based on checkbox states
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[36%]">
          <label className="flex flex-col gap-1 text-[#63646B] w-full">
            <p className="font-semibold text-lg">Preview</p>
            <div className="flex items-center justify-center border border-[#B7C4CA] w-full rounded-xl  pt-5">
              {openPreview ? (
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[90%] bg-base-100 border border-[#B7C4CA] rounded-md">
                    <h1 className="font-bold text-black m-5 mb-0">AD5959</h1>
                    <div className="border border-[#B7C4CA] m-5 p-5 rounded-xl">
                      <div className="w-full mb-3 rounded-xl overflow-hidden">
                        <Carousel autoSlideInterval={3000} autoSlide={true}>
                          {imagePreview.map((imageUrl, index) => (
                            <img
                              src={imageUrl}
                              alt={`preview-${index}`}
                              key={index}
                            />
                          ))}
                        </Carousel>
                      </div>

                      <div className="card-body p-0">
                        <div className="flex items-center justify-between w-[full] px-1">
                          <h2 className="card-tag text-[0.7rem] font-bold text-black">
                            {preview.location.address}
                          </h2>
                          <div className="flex">
                            <img src={ellipse} alt="" className="pr-2" />
                            <h2 className="card-tag font-bold text-black text-[0.7rem]">
                              Reality Extra
                            </h2>
                          </div>
                        </div>

                        <div className="flex items-center justify-start gap-3">
                          <div className="flex items-center">
                            <img
                              src={bedroomImg}
                              alt="bedrooms"
                              className="pr-2 h-[30px] w-[30px]"
                            />
                            <p>2</p>
                          </div>

                          <div className="flex items-center">
                            <img
                              src={toiletImg}
                              alt="toilets"
                              className="pr-2 h-[30px] w-[30px]"
                            />
                            <p>3</p>
                          </div>

                          <div className="flex items-center">
                            <img
                              src={parkingImg}
                              alt="parking lots"
                              className="pr-2 h-[30px] w-[30px]"
                            />
                            <p>1</p>
                          </div>
                        </div>

                        <h1 className="text-[0.97rem] font-bold text-black">
                          {preview.price}
                        </h1>
                        <p className="text-[0.9rem] italic">
                          Auction 1:00 pm Sunday 23 April, 2023
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[90%] mx-auto mt-3">
                    <div className="w-full flex ">
                      <p
                        className={`border ${
                          activeDrop === "details"
                            ? "border-homeLightBlue"
                            : "border-gray-500"
                        }  px-3 py-1 rounded-tl-lg`}
                        onClick={() => setActiveDrop("details")}
                      >
                        Details
                      </p>
                      <p
                        className={`border ${
                          activeDrop === "map"
                            ? "border-homeLightBlue"
                            : "border-gray-500"
                        }  px-3 py-1`}
                        onClick={() => setActiveDrop("map")}
                      >
                        Map
                      </p>
                      <p
                        className={`border ${
                          activeDrop === "guide"
                            ? "border-homeLightBlue"
                            : "border-gray-500"
                        }  px-3 py-1`}
                        onClick={() => setActiveDrop("guide")}
                      >
                        Area Guide
                      </p>
                    </div>

                    {activeDrop === "details" && (
                      <div className="w-full pb-6 pt-3 text-[0.8rem]">
                        <p className="">{preview.description}</p>
                        {/* <p className="mt-3 font-bold text-blue-500">
                          Property Features
                        </p>
                        <ul> (Do not Delete)
                          {propertyData.features.map((feature, index) => (
                            <li key={index}>-{feature}</li>
                          ))}
                        </ul> */}
                        <p className="mt-3 font-bold text-blue-500">state</p>
                        <ul>
                          <li>- {preview.location.state} </li>
                        </ul>
                        <p className="mt-3 font-bold text-blue-500">
                          Listing Price
                        </p>
                        <ul>
                          <li> {preview.price} (in Naira)</li>
                        </ul>

                        <div className="border-2 border-black text-[0.6rem] p-2 my-2 rounded-xl flex items-center justify-between">
                          <div className="flex flex-col">
                            <div className="flex items-center justify-start">
                              <h1 className="font-bold text-black">
                                property Refs:
                              </h1>
                              <p className="text-black ml-1"> RR5678 </p>
                            </div>

                            <div className="flex items-center justify-start">
                              <h1 className="font-bold text-black">
                                Market Status:
                              </h1>
                              <p className="text-black ml-1"> Available </p>
                            </div>

                            <div className="flex items-center justify-start">
                              <h1 className="font-bold text-black">Toilet:</h1>
                              <p className="text-black ml-1">
                                {" "}
                                2{/* {preview.toilets} */}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col">
                            <div className="flex items-center justify-start">
                              <h1 className="font-bold text-black">
                                Last Updated:
                              </h1>
                              <p className="text-black ml-1"> 20.6.2022 </p>
                            </div>

                            <div className="flex items-center justify-start">
                              <h1 className="font-bold text-black">
                                Bathrooms:
                              </h1>
                              <p className="text-black ml-1">
                                4{/* {preview.bathrooms} */}
                              </p>
                            </div>

                            <div className="flex items-center justify-start">
                              <h1 className="font-bold text-black">
                                Date Added:
                              </h1>
                              <p className="text-black ml-1"> </p>
                            </div>
                          </div>

                          <div className="flex flex-col">
                            <div className="flex items-center justify-start">
                              <h1 className="font-bold text-black">Type:</h1>
                              <p className="text-black ml-1">{preview.type}</p>
                            </div>

                            <div className="flex items-center justify-start">
                              <h1 className="font-bold text-black">
                                Bedrooms:
                              </h1>
                              <p className="text-black ml-1">
                                2{/* {preview.bedrooms} */}
                              </p>
                            </div>

                            <div className="flex items-center justify-start">
                              <h1 className="font-bold text-black">
                                Parking Spaces:
                              </h1>
                              <p className="text-black ml-1">
                                4{/* {preview.parkinglots} */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeDrop === "map" && (
                      <div className=" pb-6 pt-3 w-full">
                        <img src={mapImg} alt="map" className="w-full" />
                      </div>
                    )}

                    {activeDrop === "guide" && (
                      <div className="w-full pb-6 pt-3 text-[0.8rem]">
                        <p className=" font-bold text-blue-500">
                          Interesting Facts
                        </p>
                        {/* <p>{preview.interestingfacts}</p> */}
                        <p className="mt-3 font-bold text-blue-500">
                          Liesures and Shopping
                        </p>

                        {/* <p>- {preview.leisureandshopping} </p> */}

                        <p className="mt-3 font-bold text-blue-500">
                          Night Life
                        </p>
                        <ul>{/* <li> {preview.nightlife}</li> */}</ul>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="h-[40rem] flex text-homeOrange items-center justify-center">
                  Nothing to Preview yet
                </div>
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
