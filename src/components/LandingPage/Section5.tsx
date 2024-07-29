import image from "../../public/snap.svg";
import { Link } from "react-router-dom";
import virtualTour from "../../public/virtual-tour.svg";

const Section5 = () => {
  return (
    <section className="flex w-full items-center justify-center md:mt-0 py-10">
      <div className="md:w-[95%] xl:w-[85%] w-[95%] flex-col flex items-center">
        <div className="flex flex-col w-[95%] text-center items-center justify-center">
          <p className="md:text-[30px] text-[20px] text-black font-bold">
            Your ideal Choice:
          </p>
          <p className="lg:text-[30px] md:text-[20px] text-black text-[14px] font-semibold">
            Unveiling the Benefits of Our Services
          </p>
        </div>

        <div className="md:mx-24 md:pl-12 md:-ml-0 mt-3 lg:mb-2 xl:mb-0 w-full flex items-center justify-start">
          <Link
            to=""
            className="lg:text-[18px] md:text-[16px] text-[#0D99FF] font-medium underline text-[14px] xl:pb-2"
          >
            - Why You Choose Us
          </Link>
        </div>

        <div className="flex items-center justify-center w-full relative h-fit my-8">
          <img
            src={image}
            alt="Lady"
            className="w-full h-auto block shrink-0 "
          />
          <img
            src={virtualTour}
            alt="virtual tour"
            className="shrink-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          />
        </div>

        <div className="flex md:flex-row flex-col w-full justify-between items-center mt-10">
          <div className="md:w-1/2">
            <p className="text-black xl:text-[30px] md:text-[25px] text-[20px] font-bold lg:w-[537px] md:w-[400px] md:pb-3 leading-[30px]">
              We are fully Prepared to turn your Dream into reality.
            </p>
            <p className="xl:text-[20px] lg:text-[18px] text-black text-sm font-medium xl:w-[568px] lg:w-[480px] md:w-[350px] md:h-[48px]">
              We provide a complete service for the sale, purchase or rental of
              real estate.
            </p>
          </div>

          <div className="md:w-[50%] flex xl:ml-44 md:ml-14 lg:ml-28 mt-2 md:mt-0 flex-row justify-between items-center">
            <div className="xl:p-8 lg:p-5 md:p-4 gap-3 pr-3 md:pr-0 flex flex-col border-r-2 border-[#0D99FF]">
              <p className="font-bold xl:text-[30px] md:text-[25px] text-[#0D99FF]">
                8.5k
              </p>
              <p className="text-sm font-medium text-[#0B2749]">
                Properties Sold
              </p>
            </div>
            <div className="xl:p-8 lg:p-5 md:p-4 gap-3 pr-3 md:pr-0 flex flex-col ml-3 border-r-2 border-[#0D99FF]">
              <p className="font-bold xl:text-[30px] md:text-[25px] text-[#0D99FF]">
                10k
              </p>
              <p className="text-sm font-medium text-[#0B2749]">
                Happy Customers
              </p>
            </div>
            <div className="flex flex-col gap-3 xl:p-8 lg:p-5 md:p-4 pl-3 md:pr-0">
              <p className="font-bold xl:text-[30px] md:text-[25px] text-[#0D99FF]">
                4.9
              </p>
              <p className="text-sm font-medium text-[#0B2749]">
                Review Ratings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
