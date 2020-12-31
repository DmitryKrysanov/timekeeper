import {ISignInForm} from '../../../components/SignIn/types';
import {IUser} from '../../../components/SignUp/types';
import {
  AUTH_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN,
  SIGNUP,
  SIGNOUT_SUCCESS,
  SIGNOUT,
  SIGNIN_FAIL,
} from '../../constants/authContstants';
import {IAuth} from '../../reducers/authReducer/types';
import {
  ISignUpAction,
  ISignInSuccessAction,
  ISignOutSuccessAction,
  ISignUpSuccessAction,
  ISignInAction,
  ISignOutAction,
  ISaveUserAuthDataAction,
  ISignInFailAction,
} from './types';

export const signUp = (userData: IUser): ISignUpAction => {
  return {
    type: SIGNUP,
    payload: userData,
  };
};

export const signUpSuccess = (payload: IAuth): ISignUpSuccessAction => {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
};

export const signIn = (userData: ISignInForm): ISignInAction => {
  return {
    type: SIGNIN,
    payload: userData,
  };
};

export const signInSuccess = (payload: IAuth): ISignInSuccessAction => {
  return {
    type: SIGNIN_SUCCESS,
    payload,
  };
};

export const signInFail = (payload: string): ISignInFailAction => {
  return {
    type: SIGNIN_FAIL,
    payload,
  };
};

export const signOut = (): ISignOutAction => {
  return {
    type: SIGNOUT,
  };
};

export const signOutSuccess = (): ISignOutSuccessAction => {
  return {
    type: SIGNOUT_SUCCESS,
  };
};

export const saveUserAuthData = (userData: IAuth): ISaveUserAuthDataAction => {
  return {
    type: AUTH_SUCCESS,
    payload: userData,
  };
};
