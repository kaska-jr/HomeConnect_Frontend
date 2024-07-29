import Properties from "../Properties";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <section
      id="properties"
      className="dark:bg-[#0B2749] text-white flex flex-col justify-center items-center text-center py-10 h-full w-full mt-10"
    >
      <div className="max-w-6xl w-full">
        <h1 className="md:text-[30px] text-[20px] text-white font-bold">
          Recently Added Properties
        </h1>
        <div className="flex justify-between items-center md:items-start w-[95%]">
          <Link
            className="pl-3 m-4 text-white w-full font-medium md:text-[18px] underline text-left"
            to=""
          >
            - Best Deals
          </Link>
        </div>
        <Properties />
      </div>
    </section>
  );
};

export default Section4;
