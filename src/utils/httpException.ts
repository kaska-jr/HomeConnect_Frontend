import toast from "react-hot-toast";

interface HttpExceptionType {
    error: unknown;
}

interface CustomError {
    response?: {
        data?: {
            error?: string;
            message?: string;
        };
    };
    code?: string;
    message?: string;
}

export default class HttpException implements HttpExceptionType {
    error: CustomError;

    constructor(error: unknown) {
        this.error = error as CustomError;
    }

    trigger() {
        console.log(this.error);

        if (this.error.response?.data?.error) {
            // toast.error(this.error.response.data.error);
            toast.error("An error occured")
            // toast.error(this.error.response.data.error);
        } else if (this.error.response?.data?.message) {
            // toast.error(this.error.response.data.message);
            toast.error("An error occured")
        } else if (this.error.code === "ERR_NETWORK") {
            toast.error("No internet connection");
        } else {
            toast.error("An error occurred!");
        }
    }
}
