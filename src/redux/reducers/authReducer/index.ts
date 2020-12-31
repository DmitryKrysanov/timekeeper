import Cookies from 'js-cookie';
import {AuthActionsTypes} from '../../actions/authActions/types';
import {
  AUTH_SUCCESS,
  AUTH_IS_LOAD,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNOUT_FAIL,
  SIGNOUT_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from '../../constants/authContstants';
import {IAuth} from './types';

const token = Cookies.get('token');
const id = Cookies.get('uid');

export const initialState: IAuth = {
  uid: id || null,
  token: token || null,
  error: null,
  isLoad: false,
};

export const authReducer = (state = initialState, action: AuthActionsTypes) => {
  switch (action.type) {
    case AUTH_IS_LOAD:
      return {
        ...state,
        isLoad: action.payload,
      };
    // break omitted
    /* falls through */
    case AUTH_SUCCESS:
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        uid: action.payload.uid,
      };
    // break omitted
    case SIGNIN_FAIL:
    case SIGNUP_FAIL:
    // case FORGOT_PASSWORD_FAIL:
    case SIGNOUT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    // break omitted
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        token: null,
        uid: null,
        error: null,
      };
    // break omitted
    default:
      return state;
  }
};
