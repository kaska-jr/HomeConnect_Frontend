import Section10Faq from "../Section10Faq";

const Section10 = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse justify-between items-center py-12 lg:pl-16 md:pl-10 gap-4 md:min-h-[80vh] w-full">
      <div className="xl:w-[40%] lg:w-[50%] md:pl-10">
        <Section10Faq />
      </div>
      <div className="xl:w-[45%] lg:w-[40%] flex flex-col gap-5 xl:mr-0 lg:mr-4">
        <div className="flex flex-col items-center">
          <h2 className="font-bold xl:text-[30px] md:text-[30px] text-[30px] text-black">
            FAQ{" "}
          </h2>
          <h2 className="font-semibold xl:text-[30px] lg:text-[25px] text-[25px] text-center lg:text-center text-black">
            Got questions? We've got answers!
          </h2>
        </div>
        <p className="text-[15px] font-medium xl:w-[549px] md:w-[400px] w-[380px] flex flex-col place-self-center text-center text-black">
          Check out our FAQ section for more information. Your satisfaction is
          our priority!
        </p>
      </div>
    </section>
  );
};

export default Section10;
