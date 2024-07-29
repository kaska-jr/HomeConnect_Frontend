import Image from "../../public/sectiontwonav.svg";

const Section2 = () => {
  return (
    <div className="bg-[#0B2749] flex flex-row text-white justify-evenly items-center mt-10 md:mt-28">
      <div className=""></div>
      <p className="text-center px-4 text-sm md:text-[35px] text-[16px] font-bold">
        Navigating the Real Estate Journey
      </p>
      <img
        src={Image}
        alt="Lady"
        width={142}
        height={119}
        className="w-[71px] h-[59.5px] md:w-[142px] md:h-[119px]"
      />
    </div>
  );
};

export default Section2;
