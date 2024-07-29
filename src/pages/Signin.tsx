import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../components/button/button";
import CheckBox from "../components/checkbox/checkbox";
import Input from "../components/input/input";
import { EmailIcon, PasswordIcon } from "../components/svgs";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/input/passwordInput";
import authService from "../services/auth";
import HttpException from "../utils/httpException";
import toast from "react-hot-toast";

export default function Signin() {
  return (
    <main className="w-full max-w-[1305px] mx-auto signin-bg-gradient">
      <div className="grid grid-cols-2 gap-[90px] px-[40px] bg-[#ffffffe6] backdrop-blur-[2.5px]">
        <section className="py-[121px]">
          <header className="flex gap-4 items-center">
            <img src="/images/play.svg" />
            <h1 className="text-[60px] font-bold">HomeConnect</h1>
          </header>
          <p className="text-[20px]">
            We provide a complete service for the sale, purchase or rental of
            real estate and sale of home goods. We provide a complete service
            for the sale, purchase or rental of real estate. We provide a
            complete service for the sale, purchase or rental of real estate.
          </p>
        </section>
        <section className="py-5">
          <div className="sigin-box pt-2">
            <header className="grid place-items-center relative">
              <div className="h-[98px] w-[98px] bg-primary rounded-full grid place-items-center">
                <img src="/images/person.svg" alt="user" />
              </div>
              <div className="h-[1px] bg-primary w-full top-[50%] absolute translate-y-[-50%]"></div>
            </header>
            <h1 className="text-primary text-center pt-4 pb-5 text-[20px]">
              Welcome Back!
            </h1>
            <Form />
            <div className="border-t-[1px] border-t-[#9DA1A8] pt-[22px] pb-[44px] px-[48px] grid place-items-center gap-5">
              <div>
                <Link to="/register">
                  <Button className="max-w-max px-4 !bg-[#0D99FF]">
                    Create an Acccount
                  </Button>
                </Link>
              </div>
              <div className="flex gap-3 items-center">
                <Link to="/agents" className="text-[#4959EE] font-bold">
                  Agent
                </Link>
                <div className="h-[20px] w-[1px] bg-black"></div>
                <Link to="/agents" className="text-[#0B2749] font-bold">
                  User
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const Form = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [checked, setChecked] = useState(false);

  const checkboxHandler = () => {
    setChecked((prev) => !prev);
  };

  const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isDisabled = !(formData.email && formData.password);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await authService.signin(formData);
      console.log(response);
      toast.success(response.data.message ?? response.data.status);
      navigate("/agent");
    } catch (err) {
      console.log(err);
      new HttpException(err).trigger();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="py-[25px] px-[48px] flex flex-col gap-[15px]"
      onSubmit={submit}
    >
      <fieldset>
        <Input
          leading={<EmailIcon />}
          placeholder="Email Address or Phone Number"
          type="email"
          name="email"
          value={formData.email}
          onChange={formDataHandler}
        />
      </fieldset>
      <fieldset>
        <PasswordInput
          leading={<PasswordIcon />}
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={formDataHandler}
        />
      </fieldset>
      <fieldset className="flex items-center justify-between py-2">
        <div className="flex gap-2 items-center">
          <CheckBox checked={checked} setChecked={checkboxHandler} />
          <p className="font-medium text-[#4959EE]">Remember me</p>
        </div>
        <div>
          <Link to="/recover-password" className="italic text-[#FF7E00]">
            Forgotten Password?
          </Link>
        </div>
      </fieldset>
      <fieldset>
        <Button loading={loading} disabled={isDisabled}>
          Sign in
        </Button>
      </fieldset>
    </form>
  );
};
