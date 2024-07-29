import Accordion from "./LandingPage/Accordion";
const Section10Faq = () => {
  const data = [
    {
      title: "How do I sign up for an account on the platform?",
      content:
        "Signing up is easy! Just click on the \"Sign Up\" button at the top of the page and follow the prompts to create your account. You'll need to provide some basic information, and you'll be up and running in no time.",
    },
    {
      title:
        "Can I use this platform for both residential and commercial properties?",
      content:
        "Signing up is easy! Just click on the \"Sign Up\" button at the top of the page and follow the prompts to create your account. You'll need to provide some basic information, and you'll be up and running in no time.",
    },
    {
      title: "How can I communicate with my tenants through the platform?",
      content:
        "Signing up is easy! Just click on the \"Sign Up\" button at the top of the page and follow the prompts to create your account. You'll need to provide some basic information, and you'll be up and running in no time.",
    },
    {
      title: "Does the platform offer financial reporting and tracking tools?",
      content:
        "Signing up is easy! Just click on the \"Sign Up\" button at the top of the page and follow the prompts to create your account. You'll need to provide some basic information, and you'll be up and running in no time.",
    },
    {
      title: "Is there a mobile app available for the platform?",
      content:
        "Signing up is easy! Just click on the \"Sign Up\" button at the top of the page and follow the prompts to create your account. You'll need to provide some basic information, and you'll be up and running in no time.",
    },
  ];
  return (
    <div className="container mx-auto border-0">
      {data.map((item) => (
        <Accordion title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Section10Faq;
