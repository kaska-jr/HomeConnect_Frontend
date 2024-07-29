import { useState, useRef } from "react";
import ChevronClosed from "../../public/ChevronClosed.svg";
import ChevronOpen from "../../public/ChevronOpen.svg";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState("0px");

  const contentElement = useRef<HTMLDivElement>(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current!.scrollHeight}px` : "0px");
  };

  return (
    <div
      onClick={HandleOpening}
      className=" border-b-2 border-b-gray-200 outline-none"
    >
      <div className={"bg-[#f4f5f5] p-4 flex justify-between"}>
        <h4 className="font-semibold text-sm lg:text-lg text-black">{title}</h4>
        {isOpened ? (
          <img className="w-4" src={ChevronClosed} alt="ChevronClosed" />
        ) : (
          <img className="w-4" src={ChevronOpen} alt="ChevronOpen" />
        )}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="bg-[#f4f5f5] overflow-hidden transition-all duration-200"
      >
        <p className="p-4 text-[13px] font-medium text-black">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
