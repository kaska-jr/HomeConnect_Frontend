import { ChangeEvent, FormEvent, useState } from "react"
import { EmailIcon } from "../svgs"
import Input from "../input/input"
import Button from "../button/button"

type RecoverPasswordView = "EMAIL" | "SUCCESS" | "ERROR"

export default function RecoverPasswordView() {

    const [view, setView] = useState<RecoverPasswordView>("EMAIL")

    const changeView = (view: RecoverPasswordView) => setView(view)

    switch (view) {
        case "EMAIL": {
            return (
                <FormView
                    changeView={changeView}
                />
            )
        }
        case "SUCCESS": {
            return (
                <SuccessView />
            )
        }
        case "ERROR": {
            return (
                <ErrorView />
            )
        }
        default: {
            return (
                <FormView
                    changeView={changeView}
                />
            )
        }
    }
}

type FormProps = {
    changeView: (view: RecoverPasswordView) => void
}

const FormView = ({ changeView }: FormProps) => {

    const [formData, setFormData] = useState({
        email: "",
    })

    const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const isDisabled = !(formData.email)

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        changeView("ERROR")
    }

    return (
        <form className="py-[25px] px-[48px] flex flex-col gap-[15px]" onSubmit={submit}>
            <fieldset>
                <Input
                    leading={<EmailIcon />}
                    placeholder="Enter your registered email address here to receive password code"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={formDataHandler}
                />
            </fieldset>
            <fieldset>
                <Button disabled={isDisabled}>
                    Send Code
                </Button>
            </fieldset>
        </form>
    )
}


const SuccessView = () => {

    return (
        <div className="flex items-center gap-3 max-w-[400px] mx-auto px-2 pt-5 pb-[106px]">
            <EmailIcon className="shrink-0" />
            An email has been sent to the email you provided. Please open the link to reset your password.
        </div>
    )
}

const ErrorView = () => {

    return (
        <div className="flex items-center gap-3 max-w-[400px] mx-auto px-2 pt-5 pb-[106px]">
            <EmailIcon className="shrink-0" />
            Sorry, the email you provided isn&rsquo;t registerd.
        </div>
    )
}