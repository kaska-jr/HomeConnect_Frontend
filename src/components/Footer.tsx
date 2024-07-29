import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../public/logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col mt-10 text-custom-white bottom-0 w-full items-center justify-center">
      <div className="newsletter flex flex-col md:mx-12 w-[95%] md:w-[90%]  items-center text-center justify-center gap-3 p-10 -mb-3">
        <h3 className="text-lg md:text-[30px] font-bold pb-2 text-white">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-sm md:text-[15px] font-normal text-white">
          Subscribe Now for Exclusive Estate Management{" "}
          <br className="hidden lg:block" /> Insights and Latest Updates!
        </p>
        <div className="flex items-center justify-center">
          <div className="bg-[#D9D9D9] h-[45px] md:h-[55px] rounded-md flex items-center justify-center md:w-[300px] sm:w-[250px] relative">
            <EmailIcon
              fontSize={"small"}
              className="text-[#0B2749] absolute left-1 top-1/2 -translate-y-1/2"
            />
            <input
              className="pl-7 outline-0 w-full h-[40px] placeholder:text-sm placeholder:font-semibold placeholder:text-[#0B2749] text-input-white bg-transparent  text-[#0B2749] rounded-lg focus:border-0 "
              type="text"
              placeholder="Enter Email Address"
            />
          </div>
          <button className="md:p-4 ml-4 rounded-md flex items-center justify-center h-[45px] md:h-[55px] md:text-base text-sm bg-[#FF7E00] font-semibold md:w-[150px] w-[100px]">
            Subscribe
          </button>
        </div>
      </div>

      <div className="foot flex flex-col bg-[#0B2749] w-full justify-start items-start pt-4 h-[60%]">
        <div className="footerlinks flex md:flex-row flex-col-reverse pt-6">
          <div className="flex flex-col md:w-2/6 w-full lg:px-10 px-4">
            <img src={logo} className="w-[80px] pb-4 md:pl-3" alt="logo" />
            <p className="w-[99%] md:text-sm text-xs md:pl-3 font-medium text-white">
              Signing up is easy! Just click on the "Sign Up" button at the top
              of the page and follow the prompts to create your account.
            </p>
            <div className="flex flex-row items-center justify-start mt-4 gap-3 ml-3">
              <div className="bg-[#4959EE] items-center justify-center flex rounded-[50%] h-[35px] w-[35px]">
                <FacebookRoundedIcon
                  style={{ fontSize: "25px" }}
                  className="text-[#FEE5C7]"
                />
              </div>
              <div className="bg-[#4959EE] items-center justify-center flex rounded-[50%] h-[35px] w-[35px]">
                <TwitterIcon
                  style={{ fontSize: "25px" }}
                  className="text-[#FEE5C7]"
                />
              </div>
              <div className="bg-[#4959EE] items-center justify-center flex rounded-[50%] h-[35px] w-[35px]">
                <InstagramIcon
                  style={{ fontSize: "25px" }}
                  className="text-[#FEE5C7]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-1/6 w-full gap-3 lg:ml-16 md:ml-24 p-4 lg:pl-0 md:mb-0 mb-4 border-b-[0.1px] border-white md:border-none">
            <p className="font-bold text-white text-[20px] md:text-[15px]">
              Our Company
            </p>
            <Link className="text-[15px] font-normal text-white" to="/">
              Home
            </Link>
            <Link className="text-[15px] font-normal text-white" to="about">
              About us
            </Link>
            <Link className="text-[15px] font-normal text-white" to="">
              Testimonials
            </Link>
            <Link className="text-[15px] font-normal text-white" to="">
              Blogs
            </Link>
            <Link className="text-[15px] font-normal text-white" to="">
              Agents
            </Link>
          </div>
          <div className="flex flex-col md:w-1/6 w-full gap-3 p-4 lg:pl-0 md:my-0 my-5 border-b-[0.1px] border-white md:border-none">
            <p className="font-bold text-white text-[20px] md:text-[15px]">
              Support
            </p>
            <Link className="text-[15px] font-normal text-white" to="">
              My Account
            </Link>
            <Link className="text-[15px] font-normal text-white" to="">
              Payment
            </Link>
            <Link className="text-[15px] font-normal text-white" to="">
              Offers
            </Link>
            <Link className="text-[15px] font-normal text-white" to="">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col md:w-1/6 w-full gap-3 p-4 lg:pl-0 border-b-[0.1px] border-white md:border-none">
            <p className="font-bold text-white text-[20px] md:text-[15px]">
              Take a tour
            </p>
            <Link className="text-[15px] font-normal text-white" to="">
              Products
            </Link>
            <Link className="text-[15px] font-normal text-white" to="">
              Features
            </Link>
            <Link className="text-[15px] font-normal text-white" to="">
              Pricing
            </Link>
          </div>
        </div>
        <div className="border-[0.1px] border-[#d9d9d9] mt-8"></div>
        <div className="flex flex-row justify-between items-start md:p-12 p-4 md:w-[98%]">
          <p className="md:text-[15px] text-xs md:font-normal font-semibold text-white">
            © 2023 HomeConnect. All rights reserved
          </p>
          <div className="flex ml-8 md:ml-0">
            <Link
              className="md:font-normal font-semibold md:text-[15px] text-xs text-white"
              to=""
            >
              User Terms & Condition
            </Link>
            <div className="border-r-[0.1px] border-white md:pr-2"></div>
            <Link
              className="pl-2 md:text-[15px] text-xs md:font-normal font-semibold text-white"
              to=""
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
