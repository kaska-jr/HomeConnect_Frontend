import PartnersImg from "../public/partners.svg";
import circleImg from "../public/circle2.svg";
import circleImg2 from "../public/circle1.svg";
import circleImg3 from "../public/circle3.svg";
import Video from "../public/Video.svg";

const About = () => {
  return (
    <section className="flex flex-col gap-4 bg-[#F4F5F5] w-full h-full items-center justify-center">
      <h1 className="text-white aboutus w-full text-center h-48 md:h-96 justify-center flex items-center text-6xl font-bold top-0 mt-0">
        About Us
      </h1>

      <div className="flex flex-col bg-white items-center justify-center w-[90%] h-full -mt-4 pt-10">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex flex-col p-4 gap-4">
            <div className="text-base mb-3 font-medium text-[#292D32]">
              <span className="font-bold text-[20px]">HomeConnect</span> is a
              dynamic real estate platform for Nigeria. HomeConnect is not just
              an app; <br /> it's a trusted space where property dreams are
              realized, and where every Nigerian can find a place to call home.
              HomeConnect lets users list or explore properties and goods,
              facilitating direct connections between buyers, renters, agents
              and homeGoods vendors. Enhanced with user reviews and ratings, it
              simplifies property transactions and insights.
            </div>
            <div className="text-base mb-3 font-medium text-[#292D32]">
              <span className="font-bold text-[16px]">What we do </span> <br />{" "}
              Behind HomeConnect is a team fueled by a singular passion:
              revolutionizing the real estate landscape of Nigeria. We are a
              collective of dedicated professionals committed to simplifying
              property transactions and making dreams of home ownership, rental
              and homeGoods selling more attainable and seamless for everyone.
              We are more than a team; we're a community, and every home we
              connect is a testament to our shared dedication.
            </div>
            <div className="text-base mb-3 font-medium text-[#292D32]">
              <span className="font-bold text-[16px]">What we do</span> <br />
              it's a trusted space where property dreams are realized, and where
              every Nigerian can find a place to call home. HomeConnect lets
              users list or explore properties and goods, facilitating direct
              connections between buyers, renters, agents and homeGoods vendors.
              Enhanced with user reviews and ratings, it simplifies property
              transactions and insights.
            </div>
            <div className="text-base mb-3 font-medium text-[#292D32]">
              <span className="font-bold text-[16px]">Our Partners</span> <br />
              it's a trusted space where property dreams are realized, and where
              every Nigerian can find a place to call home. HomeConnect lets
              users list or explore properties and goods, facilitating direct
              connections between buyers, renters, agents and homeGoods vendors.
              Enhanced with user reviews and ratings, it simplifies property
              transactions and insights.
            </div>
          </div>
          <div className="flex flex-col justify-end items-end pr-5 gap-8 w-[50%]">
            <div>
              <img src={Video} alt="" />
              <h2 className="font-bold text-xl p-3 pl-4 text-[#292D32]">
                Website Demo
              </h2>
            </div>
            <div>
              <img src={Video} alt="" />
              <h2 className="font-bold text-xl p-3 pl-4 text-[#292D32]">
                Our Reviews
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-center p-12 mt-5 gap-4">
          <div className="w-full">
            <h2 className="font-bold text-[25px] text-[#292D32]">
              Our Partners
            </h2>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-evenly mt-8">
            {[...Array(5)].map((_, i) => (
              <div className="flex flex-col gap-2" key={i}>
                <img src={PartnersImg} alt="otherprojects1" />
                <h2 className="text-center text-[#292D32] text-[20px] py-5 font-semibold">
                  Real Realtors
                </h2>
              </div>
            ))}
          </div>
        </div>{" "}
        <div className="flex flex-col p-12 gap-4 w-full">
          <h2 className="text-left font-bold text-[25px] text-[#292D32]">
            Other Projects
          </h2>
          <div className="flex flex-row gap-2 w-full justify-evenly mt-8">
            <div className="flex flex-col gap-2">
              <img src={circleImg2} alt="otherprojects1" />
              <h2 className="text-center text-[#292D32] pt-3 text-[16px] font-semibold">
                Other Projects
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              <img src={circleImg} alt="otherprojects2" />
              <h2 className="text-center text-[#292D32] pt-3 text-[16px] font-semibold">
                Other Projects
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <img src={circleImg3} alt="otherprojects3" />
              <h2 className="text-center text-[#292D32] pt-3 text-[16px] font-semibold">
                Other Projects
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
