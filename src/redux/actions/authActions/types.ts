import {ISignInForm} from '../../../components/SignIn/types';
import {IUser} from '../../../components/SignUp/types';
import {
  AUTH_SUCCESS,
  SIGNIN,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNOUT,
  SIGNOUT_SUCCESS,
  SIGNUP,
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
  payload: string;
}

export interface ISignOutAction {
  type: typeof SIGNOUT;
}

export interface ISignOutSuccessAction {
  type: typeof SIGNOUT_SUCCESS;
}

export interface ISaveUserAuthDataAction {
  type: typeof AUTH_SUCCESS;
  payload: IAuth;
}

export type AuthActionsTypes =
  | ISignUpAction
  | ISignUpSuccessAction
  | ISignInAction
  | ISignInSuccessAction
  | ISignInFailAction
  | ISignOutAction
  | ISignOutSuccessAction
  | ISaveUserAuthDataAction;
