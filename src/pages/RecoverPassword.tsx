import Button from "../components/button/button"
import { Link } from "react-router-dom"
import RecoverPasswordView from "../components/recover-password/recoverPasswordView"

export default function RecoverPassword() {

  return (
    <main className="w-full max-w-[1305px] mx-auto signin-bg-gradient">
      <div className="grid grid-cols-2 gap-[90px] px-[40px] bg-[#ffffffe6] backdrop-blur-[2.5px]">
        <section className="py-[121px]">
          <header className="flex gap-4 items-center">
            <img src="/images/play.svg" />
            <h1 className="text-[60px] font-bold">HomeConnect</h1>
          </header>
          <p className="text-[20px]">
            We provide  a complete service for the sale, purchase or rental of real estate and sale of home goods.  We provide  a complete service for the sale, purchase or rental of real estate. We provide  a complete service for the sale, purchase or rental of real estate.
          </p>
        </section>
        <section className="py-5">
          <div className="sigin-box pt-5">
            <h1 className="text-primary text-center pt-4 pb-5 text-[20px]">Recover your account</h1>
            <RecoverPasswordView />
            <div className="border-t-[1px] border-t-[#9DA1A8] pt-[22px] pb-[44px] px-[48px] grid place-items-center gap-5">
              <div>
                <Button className="max-w-max px-4 bg-[#797A81]">Create an Acccount</Button>
              </div>
              <div className="flex gap-3 items-center">
                <Link to='/agents' className="text-[#4959EE] font-bold">
                  Agent
                </Link>
                <div className="h-[20px] w-[1px] bg-black"></div>
                <Link to='/agents' className="text-[#0B2749] font-bold">
                  User
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

