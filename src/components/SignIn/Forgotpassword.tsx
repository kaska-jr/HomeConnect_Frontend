import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import playImg from "../../public/play.svg";

const Forgotpassword = () => {
  // const router = useRouter();
  const [user, setUser] = useState({
    email: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const ResetPassword = async () => {
    if (user.email.length === 0) {
      setMessage("Provide a registered email address.");
      // Make sure it is a string
      //Validator Package
    } else {
      try {
        setLoading(true);
        const response = await axios.post("/api/users/forgotpassword", user);
        console.log("forgotpassword success", response.data);
        setMessage(
          "An email has been sent to the email you provided. Please open the link to reset your password."
        );
        setUser({ ...user, email: "" });
      } catch (error: any) {
        console.log("forgotpassword failed", error.message);
        setMessage("Sorry, the email you provided isn't registered.");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (user.email.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-row  p-12 pb-3 w-full">
      <div className="flex flex-col w-1/2 text-[#0B2749]">
        <div className="flex flex-row gap-20 h-60 justify-center items-center">
          <div className="w-[75px] h-[80px]">
            <img className="h-[80%] w-[90%] ml-12" src={playImg} alt="Icon" />
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-light text-4xl pl-[47px]">
              Recover Your Password
            </p>
            <h2 className="font-extrabold text-6xl">Dream Property</h2>
          </div>
        </div>
        <p className="font-medium text-xl p-6 tracking-widest ml-12">
          We provide a complete service for the sale, purchase or rental of real
          estate and sale of home goods. We provide a complete service for the
          sale, purchase or rental of real estate. We provide a complete service
          for the sale, purchase or rental of real estate.
        </p>
      </div>
      <div
        className="flex flex-col w-1/2 text-[#797A81] mx-24 rounded-2xl border-2 border-[#9DA1A8]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.70) 33.8%, rgba(255, 255, 255, 0.00) 100%)",
          boxShadow: "6px 7px 8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="flex flex-col gap-4 items-center justify-center h-full w-full ">
          <input
            type="email"
            name="email"
            className="w-3/6 h-24 border-2 p-4 border-[#797A81] rounded-md focus:outline-none whitespace-normal"
            placeholder="Enter your registered email address here &#10; to receive password code"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <div
            className="w-3/6 h-12 flex items-center justify-center text-white bg-[#4959EE] rounded-xl"
            onClick={ResetPassword}
          >
            Send Code
          </div>
          {message && <div className="text-[#0B2749] p-4">{message}</div>}

          <div className="w-full h-24 flex flex-col justify-center items-center gap-4">
            <hr />
            <Link
              className="text-white bg-[#0B2749] w-2/6 h-12 flex items-center justify-center rounded-xl"
              to="/register"
            >
              Create an Account
            </Link>
            <div className="flex flex-row items-center justify-between text-[#0B2749] ">
              <Link
                className="w-1/6 flex items-center justify-center rounded-xl"
                to="#"
              >
                User
              </Link>
              <p>|</p>
              <Link
                className="w-1/6 flex items-center justify-center rounded-xl"
                to="#"
              >
                Agent
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
