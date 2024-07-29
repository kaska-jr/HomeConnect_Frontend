import LocationOnIcon from "@mui/icons-material/LocationOn";
import toilet from "../../public/Group1.svg";
type PropertyProps = {
  propertyImage: string;
  apartment: string;
  location: string;
  rooms: number;
  meter: number;
  price: number;
};

const Property = ({
  propertyImage,
  apartment,
  location,
  rooms,
  meter,
  price,
}: PropertyProps): JSX.Element => {
  const Features = [
    {
      name: "Bedrooms",
      count: 2,
      icon: toilet,
    },
    {
      name: "Bathrooms",
      count: 2,
      icon: toilet,
    },
    {
      name: "Area",
      count: 2,
      icon: toilet,
    },
  ];
  return (
    <li className="property text-black bg-[#FEFEFE] p-4 flex flex-col rounded-xl gap-4 ">
      <img
        className="flex items-center justify-center w-full h-auto"
        src={propertyImage}
        alt={apartment}
      />
      <div className="flex flex-col justify-between items-start md:gap-3 gap-1">
        <h2 className="property-title font-bold">{apartment}</h2>

        <div className="flex justify-between items-center w-full py-2">
          <p className="property-location place-self-start font-semibold text-[14px]">
            <LocationOnIcon style={{ fontSize: 20, paddingRight: 5 }} />
            {location}
          </p>

          <div className=" items-center justify-between flex gap-2">
            {Features.map((feature) => (
              <div className="flex gap-1 items-center">
                <img
                  src={feature.icon}
                  alt=""
                  className="w-5 h-auto shrink-0"
                />
                <p className="text-[14px] text-[#797A81] font-semibold">
                  {feature.count}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row justify-between items-center w-full gap-6 font-semibold md:text-sm border-t-2 border-black py-2">
          <p className="property-info text-[16px] md:text-[14px] font-medium">
            {rooms} Bedroom
          </p>
          <p className="property-meter text-[16px] md:text-[14px] font-medium">
            {" "}
            {meter} M{" "}
          </p>
          <p className="property-price bg-[#F6F1F1] text-[#0D99FF] text-[16px] md:text-[14px] font-semibold p-1">
            &#8358;{price}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Property;
