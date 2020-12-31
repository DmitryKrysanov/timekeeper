import {ISignInForm} from '../../../components/SignIn/types';
import {IUser} from '../../../components/SignUp/types';
import {
  AUTH_SUCCESS,
  AUTH_IS_LOAD,
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN,
  SIGNUP,
  SIGNOUT_SUCCESS,
  SIGNOUT,
  SIGNIN_FAIL,
  SIGNUP_FAIL,
  SIGNOUT_FAIL,
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
  ISignUpFailAction,
  ISignOutFailAction,
  IAuthIsLoadAction,
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

export const signUpFail = (payload: string | null): ISignUpFailAction => {
  return {
    type: SIGNUP_FAIL,
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

export const signInFail = (payload: string | null): ISignInFailAction => {
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

export const signOutFail = (payload: string | null): ISignOutFailAction => {
  return {
    type: SIGNOUT_FAIL,
    payload,
  };
};

export const saveUserAuthData = (userData: IAuth): ISaveUserAuthDataAction => {
  return {
    type: AUTH_SUCCESS,
    payload: userData,
  };
};

export const authIsLoad = (payload: boolean): IAuthIsLoadAction => {
  return {
    type: AUTH_IS_LOAD,
    payload,
  };
};
