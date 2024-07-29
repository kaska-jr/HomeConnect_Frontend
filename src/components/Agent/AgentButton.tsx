function AgentButton({
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
      } text-[0.60rem] flex font-semibold justify-around px-[0.80em] py-[0.5em] items-center ${gradient}`}
    >
      <p>{name}</p>
      <div>
        {iconUrl ? <img src={iconUrl} alt="" className="ml-2 w-4 h-4" /> : ""}
      </div>
    </button>
  );
}

export default AgentButton;
