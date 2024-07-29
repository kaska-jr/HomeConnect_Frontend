import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../components/button/button";
import CheckBox from "../components/checkbox/checkbox";
import Input from "../components/input/input";
import {
  EmailIcon,
  FacebookIcon,
  GoogleIcon,
  PasswordIcon,
  PhoneIcon,
} from "../components/svgs";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/input/passwordInput";
import authService from "../services/auth";
import HttpException from "../utils/httpException";
import toast from "react-hot-toast";
import { GoogleSignInProps } from "../@types/auth";
import { useGoogleLogin } from "@react-oauth/google";

export default function Signup() {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      });

      const userInfo = await res.json();
      // Google Auth
      await submit({
        email: userInfo.email,
        auth_type: "google",
      });
    },
    onError: (errorResponse: unknown) => {
      console.log(errorResponse);
      toast.error("Google auth failed!");
    },
  });

  const submit = async (body: GoogleSignInProps) => {
    console.log(body);
  };

  const handleGoogleLogin = () => googleLogin();

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
              Create an Acccount
            </h1>
            <Form />
            <div className="pb-[20px] gap-5">
              <div className="flex gap-2 items-center -mt-2">
                <div className="bg-primary h-[1px] bg-primary flex-1"></div>
                <p className="text-primary text-[13px] font-medium">
                  Or Sign Up with
                </p>
                <div className="bg-primary h-[1px] bg-primary flex-1"></div>
              </div>
              <div className="flex flex-col gap-2 pt-4 grid place-items-center">
                <div
                  onClick={handleGoogleLogin}
                  className="w-[204px] h-[30px] border-[1px] rounded-[5px] border-[#797A81] flex items-center pl-[46px]"
                >
                  <GoogleIcon />
                  <span className="font-medium ml-3">Google</span>
                </div>
                <div className="w-[204px] h-[30px] border-[1px] rounded-[5px] border-[#797A81] flex items-center pl-[46px]">
                  <FacebookIcon />
                  <span className="font-medium ml-3">Facebook</span>
                </div>
              </div>
            </div>
            <div className="border-t-[1px] border-t-[#9DA1A8] pt-[22px] pb-[44px] px-[48px] grid place-items-center gap-5">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-[#0D99FF] font-medium">
                  Sign In
                </Link>
              </p>
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
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [checked, setChecked] = useState(false);

  const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const checkboxHandler = () => {
    setChecked((prev) => !prev);
  };

  const isDisabled = !(
    formData.email &&
    formData.password &&
    formData.phone &&
    formData.confirmPassword &&
    checked
  );

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Password does not match");
    }

    const payload = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      phoneNumber: formData.phone,
    };

    setLoading(true);
    try {
      const response = await authService.signup(payload);
      toast.success(response.data.message);
      console.log(response);
      navigate("/login");
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
          placeholder="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={formDataHandler}
        />
      </fieldset>
      <fieldset>
        <Input
          leading={<EmailIcon />}
          placeholder="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={formDataHandler}
        />
      </fieldset>
      <fieldset>
        <Input
          leading={<PhoneIcon />}
          placeholder="Phone Number"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={formDataHandler}
          min={0}
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
      <fieldset>
        <PasswordInput
          leading={<PasswordIcon />}
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={formDataHandler}
        />
      </fieldset>
      <fieldset>
        <div className="flex gap-2 items-center">
          <CheckBox
            checked={checked}
            setChecked={checkboxHandler}
            className="border-primary"
            checkedStyle="bg-primary"
          />
          <p className="font-medium">
            I agree to the{" "}
            <Link to="/terms-conditions" className="text-[#0D99FF]">
              Terms and Conditions
            </Link>{" "}
            &{" "}
            <Link to="/privacy-policy" className="text-[#0D99FF]">
              Privacy Policy
            </Link>
          </p>
        </div>
      </fieldset>
      <fieldset>
        <Button loading={loading} disabled={isDisabled}>
          Sign up
        </Button>
      </fieldset>
    </form>
  );
};
