import { Link } from "react-router-dom";
const Section6 = () => {
  return (
    <section className="section-6 md:h-[330px] h-[250px] flex w-full items-center justify-center">
      <div className="xl:w-[85%] md:w-[95%] h-[95%] w-[95%] flex flex-col gap-3 justify-center">
        <p className="md:w-[500px] md:text-[40px] text-white text-[20px] font-bold">
          Find Your Best <br /> Real Estate
        </p>
        <p className="text-base md:text-lg font-medium text-white md:w-[500px] w-[350px]">
          We provide a complete service for the sale, <br /> purchase or rental
          of real estate.
        </p>

        <Link
          to="/contact"
          className="text-white uppercase bg-[#0D99FF] rounded-[26px] w-fit py-1 px-3 text-sm font-semibold flex place-content-center"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
};

export default Section6;
