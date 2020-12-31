import {AUTH_IS_LOAD} from './../../constants/authContstants';
import {ISignInForm} from '../../../components/SignIn/types';
import {IUser} from '../../../components/SignUp/types';
import {
  AUTH_SUCCESS,
  SIGNIN,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNOUT,
  SIGNOUT_FAIL,
  SIGNOUT_SUCCESS,
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from '../../constants/authContstants';
import {IAuth} from '../../reducers/authReducer/types';

export interface ISignUpAction {
  type: typeof SIGNUP;
  payload: IUser;
}

export interface ISignUpSuccessAction {
  type: typeof SIGNUP_SUCCESS;
  payload: IAuth;
}

export interface ISignUpFailAction {
  type: typeof SIGNUP_FAIL;
  payload: string | null;
}

export interface ISignInAction {
  type: typeof SIGNIN;
  payload: ISignInForm;
}

export interface ISignInSuccessAction {
  type: typeof SIGNIN_SUCCESS;
  payload: IAuth;
}

export interface ISignInFailAction {
  type: typeof SIGNIN_FAIL;
  payload: string | null;
}

export interface ISignOutAction {
  type: typeof SIGNOUT;
}

export interface ISignOutSuccessAction {
  type: typeof SIGNOUT_SUCCESS;
}

export interface ISignOutFailAction {
  type: typeof SIGNOUT_FAIL;
  payload: string | null;
}

export interface ISaveUserAuthDataAction {
  type: typeof AUTH_SUCCESS;
  payload: IAuth;
}

export interface IAuthIsLoadAction {
  type: typeof AUTH_IS_LOAD;
  payload: boolean;
}

export type AuthActionsTypes =
  | ISignUpAction
  | ISignUpSuccessAction
  | ISignUpFailAction
  | ISignInAction
  | ISignInSuccessAction
  | ISignInFailAction
  | ISignOutAction
  | ISignOutSuccessAction
  | ISignOutFailAction
  | ISaveUserAuthDataAction
  | IAuthIsLoadAction;
