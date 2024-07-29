// import sectiontwo from "../../public/sectiontwo.svg";
import { nanoid } from "nanoid";
import virtualTour from "../../public/virtual-tour.svg";
import { Link } from "react-router-dom";
const Section3 = () => {
  const howToUseItems = [
    {
      id: nanoid(),
      name: "discover a property",
      description:
        "We provide a complete service for the sale, purchase or rental of real estate. We provide a complete service for the sale.",
    },
    {
      id: nanoid(),
      name: "Shedule a visit",
      description:
        "We provide a complete service for the sal e purchase or rental of real estate. We provide a complete service for the sale.",
    },
    {
      id: nanoid(),
      name: "virtual tour and in person visit",
      description:
        "We provide a complete service for the sale, purchase or rental of real estate. We provide a complete service for the sale.",
    },
    {
      id: nanoid(),
      name: "finalize the deal",
      description:
        "We provide a complete service for the sale, purchase or rental of real estate. We provide a complete service for the sale.",
    },
  ];
  return (
    <section className="bg-[#F4F5F5] md:p-12 flex items-center justify-center flex-col w-full  md:min-h-[100vh] mt-10">
      <div className="flex items-start justify-start md:w-[90%] w-[98%] md:h-[10vh] h-[7vh]">
        <Link
          className="text-[#0D99FF] font-bold text-[18px] underline md:pl-5"
          to=""
        >
          - How to Use
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center md:w-full lg:w-[90%] w-[95%]">
        <div className="flex flex-col md:flex-row  items-center md:items-start  justify-between gap-4 w-full">
          <div className="xl:w-[448px] h-[200px] md:min-h-[700px] md:h-[80vh] md:w-[448px] lg:w-[448px] w-full md:pl-0 pl-2 flex flex-col justify-center sec-lady items-center">
            <img src={virtualTour} alt="video" />
          </div>

          <div className="w-full md:min-h-[700px] md:h-[80vh] flex flex-col gap-4 items-center justify-between">
            {howToUseItems.map((item) => (
              <div
                key={item.id}
                className="xl:w-[620px] md:h-[18vh] lg:[20vh] md:w-[300px] lg:w-[400px] xl:h-[141px] w-full h-[15vh] bg-[#0B2749] rounded-xl shadow-lg lg:p-6 p-3"
              >
                <p className="font-[900] md:pb-2 lg:pb-3 xl:pb-3 pb-1 uppercase xl:text-[16px] lg:text-[15px] md:text-[13px] text-[12px] text-white">
                  {item.name}
                </p>
                <p className="xl:text-[16px] lg:text-[15px] md:text-[14px] text-[12px] font-medium text-white">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
