import StarIcon from "@mui/icons-material/Star";
import ReviewBg from "../../public/review-dp.svg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Section8 = () => {
  return (
    <div className="justify-around items-center flex flex-col w-full my-10">
      <div className="mb-10">
        <h1 className="text-[25px] text-[#000] font-bold text-center">
          Testimonials
        </h1>
        <h2 className="text-[#000] font-bold text-center">
          See What Our Lovely Customer Say About Us
        </h2>
      </div>
      <div className="flex items-center justify-center w-full ">
        <OwlCarousel
          className="owl-theme w-full flex items-center justify-between -mx-20"
          loop
          items={3}
          center={true}
          margin={10}
          autoplay={true}
          dots={false}
          responsive={{
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1024: {
              items: 3,
            },
          }}
        >
          <div className="flex items-center justify-center m-4">
            <div className="flex flex-col items-start p-12 justify-center rounded-[26px] bg-[#0B2749]">
              <p className="text-white text-sm font-semibold pb-5">
                <StarIcon className="text-[yellow] text-[6px]" />
                <StarIcon className="text-[yellow] text-[6px]" />
                <StarIcon className="text-[yellow] text-[6px]" />
                <StarIcon className="text-[yellow] text-[6px]" />
                <StarIcon className="text-[yellow] text-[6px]" />
                5.0
              </p>
              <p className="text-sm pb-5 text-white">
                I've been using different means for several months now, and I
                can't express how impressed I am with its capabilities. As a
                property owner managing multiple rental units, staying organized
                and efficient has always been a challenge – until I discovered
                EstateEase.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                  <div className="flex h-[40px] items-center justify-start">
                    <img
                      src={ReviewBg}
                      className="w-[40px] h-[40px]"
                      alt="Review-bg"
                    />
                  </div>
                </div>
                <div className="pl-2">
                  <p className="text-white text-xs font-semibold">
                    John, Adeniyi
                  </p>
                  <p className="text-white text-xs font-light">CEO, Aritech</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center m-4 ">
            <div className="flex flex-col items-start justify-center p-12 rounded-[26px] bg-[#0B2749]">
              <p className="text-white text-sm font-semibold pb-5">
                <StarIcon className="text-[yellow] text-[6px]" />
                <StarIcon className="text-[yellow] text-[6px]" />
                <StarIcon className="text-[yellow] text-[6px]" />
                <StarIcon className="text-[yellow] text-[6px]" />
                <StarIcon className="text-[yellow] text-[6px]" />
                5.0
              </p>
              <p className="text-sm pb-5 text-white">
                I've been using different means for several months now, and I
                can't express how impressed I am with its capabilities. As a
                property owner managing multiple rental units, staying organized
                and efficient has always been a challenge – until I discovered
                EstateEase.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex h-[40px] items-center justify-start">
                  <img
                    src={ReviewBg}
                    className="w-[40px] h-[40px]"
                    alt="Review-bg"
                  />
                </div>
                <div className="pl-2">
                  <p className="text-white text-xs font-semibold">
                    John, Adeniyi
                  </p>
                  <p className="text-white text-xs font-light">CEO, Aritech</p>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center justify-center flex m-4 ">
            <div className="flex flex-col items-start justify-center p-12 rounded-[26px] bg-[#0B2749]">
              <p className="text-white text-sm font-bold pb-3 pt-2">
                <StarIcon className="text-[yellow] text-[6px]" />
                <StarIcon className="text-[yellow] text-[6px]" />
                <StarIcon className="text-[yellow] text-[6px]" />
                <StarIcon className="text-[yellow] text-[6px]" />
                <StarIcon className="text-[yellow] text-[6px]" />
                5.0
              </p>
              <p className="text-sm pb-5 text-white">
                I've been using different means for several months now, and I
                can't express how impressed I am with its capabilities. As a
                property owner managing multiple rental units, staying organized
                and efficient has always been a challenge – until I discovered
                EstateEase.
              </p>
              <div className="flex items-center justify-between pb-3">
                <div className="flex h-[40px] items-center justify-start">
                  <img
                    src={ReviewBg}
                    className="w-[40px] h-[40px]"
                    alt="Review-bg"
                  />
                </div>
                <div className="pl-2">
                  <p className="text-white text-xs font-semibold">
                    John, Adeniyi
                  </p>
                  <p className="text-white text-xs font-light">CEO, Aritech</p>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Section8;
