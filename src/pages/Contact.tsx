import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import mapImg from "../public/map.svg";
import LocationOnRounded from "@mui/icons-material/LocationOnRounded";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

interface UserInfo {
  name: string;
  email: string;
  phonenumber: string;
  description: string;
}

const Contact: React.FC = () => {
  const [userinfo, setUserinfo] = useState<UserInfo>({
    name: "",
    email: "",
    phonenumber: "",
    description: "",
  });

  // const [buttonDisabled, setButtonDisabled] = useState(false);
  const [, setLoading] = useState(false);

  const submitContact = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/info", userinfo);
      console.log("success", response.data);
      toast.success("successfully sent contact info");
      // Assuming you have a route with the path "/"
      // Replace with the actual path you want to navigate to
      // router.push("/");
    } catch (error: any) {
      console.log("failed", error.message);
      toast.error("Failed to send contact info");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#f4f5f5]">
      <h1 className="text-white contact_app w-full text-center h-48 md:h-96 justify-center flex items-center text-6xl font-bold top-0 mt-0">
        Contact us
      </h1>
      <div className="w-full md:w-[80%] flex items-center justify-center flex-col bg-white mt-4">
        <p className="text-[#FF7E00] text-center text-[32px] font-semibold">
          We are eager to hear your thoughts!
        </p>
        <div className="flex flex-col md:flex-row w-full p-8 md:mt-12 gap-4">
          <div className="flex flex-col gap-4 items-start justify-center h-full sm:w-full md:w-1/2">
            <div className="w-[80%] flex items-center justify-start">
              <LocationOnRounded
                style={{
                  fontSize: "25",
                  color: "black",
                }}
              />
              <p className="text-black text-base font-normal pl-4">
                123 Main Street, Suite 456, <br /> Home Connect Miami, Florida.
              </p>
            </div>
            <div className="w-full flex items-center justify-start">
              <EmailIcon
                style={{
                  fontSize: "25",
                  color: "black",
                }}
              />
              <p className="text-black text-base font-normal pl-4">
                enquires@homeconnect.com
              </p>
            </div>
            <div className="hidden md:block">
              <img src={mapImg} alt="map" />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center h-full sm:w-full md:w-1/2 max-w-md">
            <div className="w-full flex items-center relative justify-start">
              <PersonIcon
                style={{
                  fontSize: "20",
                  color: "black",
                  marginLeft: 5,
                  position: "absolute",
                }}
              />
              <input
                type="text"
                name="name"
                className="w-full h-12 rounded-[10px] px-2 focus:outline-none bg-transparent border-2 border-[#797A81] placeholder:text-black placeholder:font-[400]  text-black pl-6"
                placeholder="Name"
              />
            </div>
            <div className="w-full flex items-center relative justify-start">
              <EmailIcon
                style={{
                  fontSize: "20",
                  color: "black",
                  marginLeft: 5,
                  position: "absolute",
                }}
              />
              <input
                type="email"
                name="email"
                className="w-full h-12 rounded-[10px] px-2 focus:outline-none bg-transparent border-2 border-[#797A81] placeholder:text-black placeholder:font-[400]  text-black pl-6"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="w-full flex items-center relative justify-start">
              <LocalPhoneIcon
                style={{
                  fontSize: "20",
                  color: "black",
                  marginLeft: 5,
                  position: "absolute",
                }}
              />
              <input
                type="text"
                name="phonenumber"
                className="w-full h-12 rounded-[10px] px-2 focus:outline-none bg-transparent border-2 border-[#797A81] placeholder:text-black placeholder:font-[400]  text-black pl-6"
                placeholder="Phone number"
              />
            </div>
            <textarea
              name="description"
              className="w-full h-60 rounded-[10px] p-4 focus:outline-none bg-transparent border-2 border-[#797A81] placeholder:text-black placeholder:font-[400] text-black"
              id="description"
              value={userinfo.description}
              onChange={(e) =>
                setUserinfo({ ...userinfo, description: e.target.value })
              }
              placeholder="Description"
            ></textarea>
            <div className="w-full h-12 rounded-[15px] m-4 flex flex-col px-2 text-white bg-[#4959EE] items-center justify-center">
              <button
                className="h-[37px] w-[125px] text-base font-normal"
                type="submit"
                onClick={submitContact}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
