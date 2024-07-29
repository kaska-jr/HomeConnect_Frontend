import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationMsg from "./NotificationMsg";
// DROPDOWN
function AgentNotification() {
  return (
    <div className=" w-96 text-black flex flex-col bg-white">
      <div className="p-4">
        <div className="flex item-center justify-between text-sm pb-3">
          <h1 className="font-semibold">Notifications</h1>
          <h4 className="text-xs text-[#6B6363] font-semibold">
            Mark all as read
          </h4>
        </div>
        <div className="flex items-center gap-3 text-sm p-3 border border-[#6B6363] rounded-lg">
          <NotificationsIcon className="text-[#6B6363]" />
          <div className="flex justify-center flex-col">
            <h1 className="font-semibold text-black text-sm">
              Push Notifications
            </h1>
            <p className="text-[#6B6363] text-xs">
              Automatically send new notifications
            </p>
          </div>
        </div>
      </div>

      <NotificationMsg />

      <button className="w-[90%] p-3 bg-[#4959EE] text-white mx-auto rounded-lg my-4">
        see all Notifications
      </button>
    </div>
  );
}

export default AgentNotification;
