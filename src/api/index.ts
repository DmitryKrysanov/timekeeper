import axios from 'axios';
import Cookies from 'js-cookie';
import {ISignInForm} from '../components/SignIn/types';
import {IUser} from '../components/SignUp/types';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const authApi = {
  signIn(userData: ISignInForm) {
    return instance
      .post('/auth/signin', userData)
      .then((response) => response.data);
  },

  signUp(userData: IUser) {
    return instance
      .post('/auth/signup', userData)
      .then((response) => response.data);
  },

  forgotPassword(email: string) {
    return instance
      .post('/auth/forgot-password', email)
      .then((response) => response.data);
  },
};
