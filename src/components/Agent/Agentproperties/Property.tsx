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
  return (
    <li>
      <div className="property text-black bg-[#FEFEFE] w-80 h-80 p-4 flex flex-col rounded-xl gap-6 justify-center items-center">
        <img
          className="w-[70%] place-self-center"
          src={propertyImage}
          alt={apartment}
        />
        <div className="flex flex-col gap-3">
          <h2 className="property-title place-self-start font-bold text-base">
            {apartment}
          </h2>
          <p className="property-location place-self-start font-semibold text-base">
            {location}
          </p>
          <hr className="text-black" />
          <div className="flex flex-row justify-between items-stretch w-full gap-6 font-semibold text-base">
            <p className="property-info p-1">{rooms} rooms </p>
            <p className="property-meter p-1"> {meter} sqm </p>
            <p className="property-price bg-[#F6F1F1] text-[#0D99FF] p-1">
              N{price}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Property;
