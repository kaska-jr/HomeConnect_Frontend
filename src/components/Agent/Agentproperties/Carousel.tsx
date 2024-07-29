import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState, useEffect, ReactNode } from "react";
function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 1000,
}: {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}) {
  const [current, setCurrent] = useState<number>(0);
  const slidesLength = slides ? slides?.length : 0;
  const prev = () => setCurrent(current === 0 ? slidesLength - 1 : current - 1);
  const next = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </div>

      <div className="absolute right-1 bottom-2 flex item-center gap-3 items-center">
        <div className="bg-homeLightBlue text-white py-2 px-3 font-semibold text-xs">
          <span>{current + 1}</span> / <span>{slides.length}</span>
        </div>

        <button className=" bg-homeLightBlue h-4 w-4 text-white rounded-full shadow ">
          <MdKeyboardArrowLeft onClick={prev} />
        </button>
        <button className="bg-homeLightBlue h-4 w-4 text-white rounded-full shadow  ">
          <MdKeyboardArrowRight onClick={next} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
