export interface SignupCredentials {
    email: string;
    username: string;
    phoneNumber?: string;
    password: string;
}

export interface SigninCredentials {
    email: string;
    password: string;
}

export interface GoogleSignInProps {
    email: string;
    auth_type: string;
}