import { SigninCredentials, SignupCredentials } from '../@types/auth'
import request from './request'

const authService = {
    signup: (data: SignupCredentials) => request.post('/auth/register', data),
    signin: (data: SigninCredentials) => request.post('/auth/login', data),
}

export default authService