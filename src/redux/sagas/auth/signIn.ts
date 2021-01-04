import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {authApi} from '../../../api';
import {createUserInformation} from '../../../helpers/auth';
import {signInFail, signInSuccess, authIsLoad} from '../../actions/authActions';
import {ISignInAction} from '../../actions/authActions/types';
import {SIGNIN} from '../../constants/authContstants';

function* signInWorker(action: ISignInAction) {
  try {
    yield put(authIsLoad(true));
    const auth = yield call(authApi.signIn, action.payload);
    yield put(signInSuccess(auth));
    yield call(createUserInformation, auth);
    yield put(authIsLoad(false));
  } catch (error) {
    yield put(authIsLoad(false));
    yield put(signInFail(error.message));
    yield delay(3000);
    yield put(signInFail(null));
  }
}

export function* watchSignIn() {
  yield takeEvery(SIGNIN, signInWorker);
}
