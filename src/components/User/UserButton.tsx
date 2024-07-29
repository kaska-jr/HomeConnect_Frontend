function UserButton({
  name,
  iconUrl,
  underline,
  gradient,
}: {
  name: string;
  iconUrl?: string;
  underline?: boolean;
  gradient: string;
}): JSX.Element {
  return (
    <button
      className={` rounded-3xl ${
        underline ? "underline" : ""
      } text-[0.60rem] flex font-semibold justify-around px-[0.70em] py-[0.25em] items-center ${gradient}`}
    >
      <p>{name}</p>
      <div>
        {iconUrl ? <img src={iconUrl} alt="" className="ml-2 w-5 h-5" /> : ""}
      </div>
    </button>
  );
}

export default UserButton;
