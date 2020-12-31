import Cookies from 'js-cookie';
import {AuthActionsTypes} from '../../actions/authActions/types';
import {
  AUTH_SUCCESS,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
} from '../../constants/authContstants';
import {IAuth} from './types';

const token = Cookies.get('token');
const id = Cookies.get('uid');

export const initialState: IAuth = {
  uid: id || null,
  token: token || null,
  error: null,
};

export const authReducer = (state = initialState, action: AuthActionsTypes) => {
  switch (action.type) {
    case AUTH_SUCCESS:
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        uid: action.payload.uid,
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        token: null,
        uid: null,
        error: null,
      };
    default:
      return state;
  }
};
