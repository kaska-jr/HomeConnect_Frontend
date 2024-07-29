import picture from "../../public/profiledp.svg";
const Notification = [
  {
    sender: "James Bonds",
    senderImg: picture,
    message:
      "Carted Mayfare’s Apartment, Comfy Estate, Lagos. Lorem Ipsum Lorem",
    message_status: "urgent",
  },
  {
    sender: "Micheal perie",
    senderImg: picture,
    message:
      "Carted Mayfare’s Apartment, Comfy Estate, Lagos. Lorem Ipsum Lorem",
    message_status: "regular",
  },
  {
    sender: "John Mascot",
    senderImg: picture,
    message:
      "Carted Mayfare’s Apartment, Comfy Estate, Lagos. Lorem Ipsum Lorem",
    message_status: "urgent",
  },
  {
    sender: "John Mascot",
    senderImg: picture,
    message:
      "Carted Mayfare’s Apartment, Comfy Estate, Lagos. Lorem Ipsum Lorem",
    message_status: "urgent",
  },
  {
    sender: "John Mascot",
    senderImg: picture,
    message:
      "Carted Mayfare’s Apartment, Comfy Estate, Lagos. Lorem Ipsum Lorem",
    message_status: "urgent",
  },
  {
    sender: "John Mascot",
    senderImg: picture,
    message:
      "Carted Mayfare’s Apartment, Comfy Estate, Lagos. Lorem Ipsum Lorem",
    message_status: "urgent",
  },
];

function NotificationMsg() {
  return (
    <div className="flex flex-col items-center bg-white">
      {Notification.map(
        ({ sender, senderImg, message, message_status }, index) => (
          <div
            className="flex items-start gap-3 border-t border-b border-gray-400 p-4 bg-white z-[9999999999]"
            key={index}
          >
            <img
              src={senderImg}
              alt=""
              height={40}
              width={40}
              className="rounded-full"
            />
            <div className="w-[80%] ">
              <h1 className="text-black text-sm font-semibold">{sender}</h1>
              <p className="text-xs">
                {message}
                <span className="text-green-500">{message_status}</span>
                {/* status */}
              </p>

              <div className="flex gap-4 mt-3">
                <button className="p-1 text-[#6B6363] border border-[#6B6363] text-xs rounded-md font-semibold">
                  Review
                </button>
                <button className="p-1 bg-[#4959EE] border border-[#4959EE] text-white text-xs rounded-md font-semibold">
                  Approve
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default NotificationMsg;
