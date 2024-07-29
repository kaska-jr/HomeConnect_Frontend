import listingImg from "../../../public/houseprop.svg";
import SavedProperty from "./SavedProperty";

const savedProperties = [
  {
    propertyType: "duplex",
    propertyPictures: listingImg,
    toilet: 2,
    bedroom: 3,
    parkingLots: 3,
    address: "Ajah, Lagos",
    price: "150M",
  },
  {
    propertyType: "duplex",
    propertyPictures: listingImg,
    toilet: 2,
    bedroom: 3,
    parkingLots: 3,
    address: "Ajah, Lagos",
    price: "150M",
  },
  {
    propertyType: "duplex",
    propertyPictures: listingImg,
    toilet: 2,
    bedroom: 3,
    parkingLots: 3,
    address: "Ajah, Lagos",
    price: "150M",
  },
  {
    propertyType: "duplex",
    propertyPictures: listingImg,
    toilet: 2,
    bedroom: 3,
    parkingLots: 3,
    address: "Ajah, Lagos",
    price: "150M",
  },
];

function SavedProperties() {
  return (
    <div className="flex items-center gap-2 w-full">
      {savedProperties.map((property, index) => (
        <SavedProperty
          key={index}
          propertyType={property.propertyType}
          propertyPictures={property.propertyPictures}
          toilet={property.toilet}
          bedroom={property.bedroom}
          parkingLots={property.parkingLots}
          address={property.address}
          price={property.price}
        />
      ))}
    </div>
  );
}

export default SavedProperties;
