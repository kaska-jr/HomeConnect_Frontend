


const ConfirmEmail = () => {
  return (
    <div className="signup_container flex flex-col justify-center items-center w-screen gap-3 text-white">
      <img
        src="register.svg"
        alt="Lady"
        className="bg-white bg-opacity-50 p-3 rounded-lg"
      />
      <div className="rounded-lg border-4 border-solid border-gray-300 bg-opacity-90 bg-[#0B2749] flex flex-col w-[85%] h-[80%] gap-6 pt-20 backdrop-blur-md">
        <h3 className="text-xl font-bold px-12">Congratulations!</h3>
        <p className="px-12">
          You're just one step away from unlocking the full potential of
          HomeConnect.
        </p>
        <div className=" bg-white text-[#4959EE]  w-[55%] h-28">
          <p className="px-12 py-3 text-lg">
            To complete your registration and activate your account, please
            check your email inbox for a message from us and click the
            confirmation link inside.
          </p>
        </div>
        <div className="flex flex-col gap-6 px-12">
          <p className="italic  w-[55%]">
            Once you've clicked the link, you'll gain immediate access to all
            the exciting features and opportunities waiting for you on
          </p>
          <p className="italic w-[55%]">
            If you don't see the email in your inbox, kindly check your spam or
            junk folder, just in case.
          </p>
          <p className="italic w-[55%]">
            Thank you for choosing HomeConnect. We're looking forward to having
            you as part of our community!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
