import seven1 from "../../public/seven1.svg";
import seven2 from "../../public/seven2.svg";
import seven3 from "../../public/seven3.svg";
import Vector from "../../public/vector.svg";
import arc from "../../public/arc.svg";
import { Link } from "react-router-dom";

const dummyNews = [
  {
    housetype: "Residential",
    houseinfo:
      "We provide a complete service for the sale, purchase or rental of real estate.",
    houseimg: `${seven1}`,
  },
  {
    housetype: "Urban",
    houseinfo:
      "We provide a complete service for the sale, purchase or rental of real estate.",
    houseimg: `${seven2}`,
  },
  {
    housetype: "Workplace",
    houseinfo:
      "We provide a complete service for the sale, purchase or rental of real estate.",
    houseimg: `${seven3}`,
  },
];

const Section7 = () => {
  return (
    <section className="bg-[#0B2749] md:min-h-screen p-2 xl:px-24 xl:py-12 md:py-0 py-10 flex flex-col gap-3 w-full items-center justify-center">
      <div className="xl:w-[95%] md:w-[95%] w-[95%] flex items-center justify-start">
        <Link
          className="md:mb-12 mb-4 underline text-[18px] font-medium text-[#FFF] "
          to=""
        >
          - Our Solution For
        </Link>
      </div>
      <div className="flex flex-col gap-6 xl:w-[95%] md:w-[95%] w-[95%]">
        <div className="flex md:flex-row flex-col">
          <p className="md:w-1/2 w-[80%] justify-center text-white font-semibold lg:text-[25px] md:text-[20px] pb-2 md:pb-0 text-[25px]">
            Your Most <span className="font-[400]"> ideal Solutions</span>{" "}
          </p>
          <p className="md:w-[563px] flex flex-row gap-2 lg:text-[15px] md:text-sm text-sm font-normal text-white">
            <img className="hidden md:block pr-2 pb-5" src={arc} alt="" />
            We provide a complete service for the sale, purchase or rental of
            real estate. We provide a complete service for the sale, purchase or
            rental of real estate.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-12 gap-7">
          {dummyNews.map((item, index) => (
            <div
              className="h-96 rounded-3xl flex justify-between items-center flex-col"
              key={index}
              style={{
                backgroundImage: `url(${item.houseimg})`,
                backgroundSize: "cover",
                // backgroundPosition: "center",
              }}
            >
              <div className="w-full h-24 p-3 text-black bg-white rounded-t-3xl">
                <p className="text-[16px] xl:font-semibold font-bold xl:pl-3 pb-2">
                  {item.housetype}
                </p>
                <p className="xl:pl-3 xl:text-[15px] xl:font-normal lg:text-sm md:text-xs text-black text-base font-medium">
                  {item.houseinfo}
                </p>
              </div>
              <div className=" flex h-[16] w-full items-end justify-end">
                <div className="bg-[#0B2749] w-[60px] h-[60px] flex items-center justify-center rounded-[50%] -mr-[5px]">
                  <img src={Vector} className="w-[30px]" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
