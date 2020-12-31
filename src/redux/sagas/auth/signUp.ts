import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {authApi} from '../../../api';
import {createUserInformation} from '../../../helpers/auth';
import {signUpSuccess, signUpFail, authIsLoad} from '../../actions/authActions';
import {ISignUpAction} from '../../actions/authActions/types';
import {SIGNUP} from '../../constants/authContstants';

const mockAuth = {
  uid: '5fe1e70f6f5baca10e0d912d',
  token: '5fe1e70f6f5baca10e0d912d5fe1e70f6f5baca10e0d912d',
  error: null,
  isLoad: false,
};

function* signUpWorker(action: ISignUpAction) {
  try {
    yield put(authIsLoad(true));
    // const auth = yield call(authApi.signUp, action.payload);
    const auth = mockAuth;
    yield put(signUpSuccess(auth));
    yield call(createUserInformation, auth);
    yield put(authIsLoad(false));
  } catch (error) {
    yield put(authIsLoad(false));
    yield put(signUpFail(error.message));
  }
}

export function* watchSignUp() {
  yield takeEvery(SIGNUP, signUpWorker);
}
