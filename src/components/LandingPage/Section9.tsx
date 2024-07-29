import arc from "../../public/arc.svg";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Section9 = () => {
  return (
    <section className="bg-[#0B2749] lg:min-h-[90vh] w-full items-center justify-center flex mt-4 gap-6 pb-10">
      <div className="md:w-[95%] h-[95%] w-[95%] flex flex-col items-center justify-center">
        <div className="flex md:flex-row w-full lg:items-center lg:justify-center flex-col pt-10 lg:mb-14">
          <p className="md:w-1/2 w-[80%] text-white justify-center font-bold pb-5 md:pb-0 lg:text-[30px] text-[28px]">
            Latest Blog & News
          </p>
          <p className="lg:w-[563px] md:w-[480px] text-white flex flex-row gap-2 lg:text-[15px] text-sm font-normal">
            <img
              className="hidden md:block lg:pr-2 md:pl-4 pb-5 font-medium"
              src={arc}
              alt="arc"
            />
            We provide a complete service for the sale, purchase or rental of
            real estate. We provide a complete service for the sale, purchase or
            rental of real estate.
          </p>
        </div>

        <div className="flex md:grid lg:flex lg:flex-row sm:flex-col flex-col xl:justify-around md:justify-between xl:px-12 pt-4 gap-6 w-full md:grid-cols-2">
          <div className="sectionNine2 lg:h-96 xl:w-96 lg:w-[60%] md:w-80 h-80 w-full rounded-b-2xl">
            <div className="bg-white rounded-b-2xl px-4 pt-3 font-[16px] h-[45%] gap-4 flex flex-col">
              <p className="text-[#fff] bg-[#4959EE] w-[60px] font-medium h-[21px] text-sm rounded-[26px] text-center">
                Offers
              </p>
              <h3 className="font-semibold text-[15px] text-[#000000]">
                Efficient Housing Hunting: <br />
                Tips for a Property Search
              </h3>
              <div
                className="flex flex-row items-start justify-between italic gap-12
             font-semibold"
              >
                <div className="flex flex-row">
                  <PersonIcon style={{ fontSize: "20px", color: "#4D4E54" }} />
                  <p className="xl:text-[13px] md:text-xs font-semibold pl-2 text-[#4D4E54]">
                    By Admin
                  </p>
                </div>
                <div className="flex xl:mr-6">
                  <CalendarMonthIcon
                    style={{ fontSize: "20px", color: "#4D4E54" }}
                  />
                  <p className="text-[13px] font-semibold pl-2 text-[#4D4E54]">
                    August 30, 2023.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sectionNine2 lg:h-96 xl:w-96 lg:w-[60%] md:w-80 h-80 w-full rounded-b-2xl">
            <div className="bg-white rounded-b-2xl px-4 pt-3 font-[16px] h-[45%] gap-4 flex flex-col">
              <p className="text-[#fff] bg-[#4959EE] w-[60px] font-medium h-[21px] text-sm rounded-[26px] text-center">
                Offers
              </p>
              <h3 className="font-semibold text-[15px] text-[#000000]">
                Efficient Housing Hunting: <br />
                Tips for a Property Search
              </h3>
              <div
                className="flex flex-row items-start justify-between italic gap-12
             font-semibold"
              >
                <div className="flex flex-row">
                  <PersonIcon style={{ fontSize: "20px", color: "#4D4E54" }} />
                  <p className="xl:text-[13px] md:text-xs font-semibold pl-2 text-[#4D4E54]">
                    By Admin
                  </p>
                </div>
                <div className="flex xl:mr-6">
                  <CalendarMonthIcon
                    style={{ fontSize: "20px", color: "#4D4E54" }}
                  />
                  <p className="text-[13px] font-semibold pl-2 text-[#4D4E54]">
                    August 30, 2023.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sectionNine3 lg:h-96 xl:w-96 lg:w-[60%] md:w-80 h-80 w-full rounded-b-2xl lg:mb-0 mb-4">
            <div className="bg-white rounded-b-2xl px-4 pt-3 font-[16px] h-[45%] gap-4 flex flex-col">
              <p className="text-[#fff] bg-[#4959EE] w-[60px] font-medium h-[21px] text-sm rounded-[26px] text-center">
                Urban
              </p>
              <h3 className="font-semibold text-[15px] text-[#000000]">
                Efficient Housing Hunting: <br /> Tips for a Property Search
              </h3>
              <div className="flex flex-row  items-start justify-between italic gap-12 font-sm font-semibold">
                <div className="flex flex-row">
                  <PersonIcon style={{ fontSize: "20px", color: "#4D4E54" }} />
                  <p className="xl:text-[13px] md:text-xs font-semibold pl-2 text-[#4D4E54]">
                    By Admin
                  </p>
                </div>
                <div className="flex xl:mr-6">
                  <CalendarMonthIcon
                    style={{ fontSize: "20px", color: "#4D4E54" }}
                  />
                  <p className="xl:text-[13px] md:text-xs font-semibold pl-2 text-[#4D4E54]">
                    August 30, 2023.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
