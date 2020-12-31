import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {authApi} from '../../../api';
import {createUserInformation} from '../../../helpers/auth';
import {signInFail, signInSuccess} from '../../actions/authActions';
import {ISignInAction} from '../../actions/authActions/types';
import {SIGNIN} from '../../constants/authContstants';

const mockAuth = {
  uid: '5fe1e70f6f5baca10e0d912d',
  token: '5fe1e70f6f5baca10e0d912d5fe1e70f6f5baca10e0d912d',
  error: null,
};

function* signInWorker(action: ISignInAction) {
  try {
    // const auth = yield call(authApi.signIn, action.payload);
    const auth = mockAuth;
    console.log(auth);
    yield put(signInSuccess(auth));
    yield call(createUserInformation, auth);
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

export function* watchSignIn() {
  yield takeEvery(SIGNIN, signInWorker);
}
