import AgentButton from "../AgentButton";
import eyeIcon from "../../../public/eye.svg";
import ellipse from "../../../public/Ellipse 26.svg";
import bedroomImg from "../../../public/listing_bedroom.svg";
import toiletImg from "../../../public/Listing_toilet.svg";
import parkingImg from "../../../public/Listing_parking.svg";

interface AgentPropertyProps {
  address?: string;
  bedrooms?: string;
  toilets?: string;
  parkinglots?: string;
  price?: string;
  propertytype?: string;
  propertyImg: string;
}

const AgentProperty: React.FC<AgentPropertyProps> = ({
  address,
  bedrooms,
  toilets,
  parkinglots,
  price,
  propertytype,
  propertyImg,
}) => {
  return (
    <div className="bg-white px-3 rounded-2xl border-2 border-zinc-300">
      <div className="p-3">
        <div className="flex justify-between gap-3 h-fit my-3">
          <div className="flex">
            <p className=" font-bold text-base text-black">AD595A</p>
          </div>
          <div className="justify-self-end">
            <AgentButton
              name="Track all"
              gradient="bg-gradient-to-l  from-[#4959EE] to-[#0B2749] text-white text-sm"
              underline={true}
              iconUrl={eyeIcon}
            />
          </div>
        </div>

        <div className="card w-full bg-white">
          <div className="border border-[#B7C4CA] rounded-xl p-3">
            <figure>
              <img src={propertyImg} alt="Home image" className="rounded-xl" />
            </figure>
            <div className="card-body p-0">
              <div className="flex items-center justify-between w-[full] px-1">
                <h2 className="card-title text-[0.7rem] font-bold text-black">
                  {address}
                </h2>
                <div className="flex">
                  <img src={ellipse} alt="" className="pr-2" />
                  <h2 className="card-title font-bold text-black text-[0.7rem]">
                    {propertytype}
                  </h2>
                </div>
              </div>

              <div className="flex items-center justify-start gap-3">
                <div className="flex items-center">
                  <img
                    src={bedroomImg}
                    alt="bedrooms"
                    className="pr-2 h-[30px] w-[30px]"
                  />
                  <p>{bedrooms}</p>
                </div>

                <div className="flex items-center">
                  <img
                    src={toiletImg}
                    alt="toilets"
                    className="pr-2 h-[30px] w-[30px]"
                  />
                  <p>{toilets}</p>
                </div>

                <div className="flex items-center">
                  <img
                    src={parkingImg}
                    alt="parking lots"
                    className="pr-2 h-[30px] w-[30px]"
                  />
                  <p>{parkinglots}</p>
                </div>
              </div>

              <h1 className="text-[0.97rem] font-bold text-black">{price}</h1>
              <p className="text-[0.7rem] italic text-gray">
                Auction 1:00 pm Sunday 23 April, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProperty;
