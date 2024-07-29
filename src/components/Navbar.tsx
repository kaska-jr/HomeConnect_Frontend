import { NavLink } from "react-router-dom";
import logo from "../public/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { nanoid } from "nanoid";

const Navbar = () => {
  type NavLinkProps = {
    isActive: boolean;
  };

  const NavLinkStyles = ({ isActive }: NavLinkProps) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "white" : "white",
    };
  };

  const NAVLINKS = [
    {
      url: "/",
      text: "home",
      id: nanoid(),
    },
    {
      url: "/about-us",
      text: "about us",
      id: nanoid(),
    },
    {
      url: "/properties",
      text: "properties",
      id: nanoid(),
    },
    {
      url: "/agents",
      text: "agents",
      id: nanoid(),
    },
    {
      url: "/blog",
      text: "blog",
      id: nanoid(),
    },
    {
      url: "/contact",
      text: "contact",
      id: nanoid(),
    },
  ];

  return (
    <div className="sticky top-0 z-50 flex flex-row justify-center items-center bg-[#0B2749] text-white md:h-[100px] h-[90px] w-full align-center">
      <div className="lg:w-[90%] md:w-[95%] w-[95%] h-full flex items-center justify-between">
        <NavLink to="/">
          <img
            src={logo}
            alt=""
            className="w-[60px] md:w-[70px] h-auto block object-fit shrink-0"
          />
        </NavLink>

        <div className="w-4/6 md:flex hidden gap-8 items-center justify-center ">
          <div className="flex gap-8">
            {NAVLINKS.map((link) => (
              <NavLink
                key={link.id}
                style={NavLinkStyles}
                to={link.url}
                className="capitalize sm:text-sm md:text-[16px] text-white font-medium cursor-pointer"
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="md:w-1/6 flex gap-5 justify-end mr-2 md:mr-0">
          <div className="bg-[#0D99FF] md:rounded-[10px] rounded-2xl md:h-[43px] h-[41px] md:w-[135px] w-[100px] flex items-center justify-center md:text-[16px] text-sm font-bold">
            <NavLink to="/login">Sign In</NavLink>
          </div>

          {/* menu icon start */}
          <div className="flex md:hidden justify-start items-center w-[20%] h-[41px] cursor-pointer">
            <MenuIcon style={{ fontSize: "40px" }} className="text-white" />
          </div>
          {/* menu icon end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
