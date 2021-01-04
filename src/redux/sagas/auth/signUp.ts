import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {authApi} from '../../../api';
import {createUserInformation} from '../../../helpers/auth';
import {signUpSuccess, signUpFail, authIsLoad} from '../../actions/authActions';
import {ISignUpAction} from '../../actions/authActions/types';
import {SIGNUP} from '../../constants/authContstants';

function* signUpWorker(action: ISignUpAction) {
  try {
    yield put(authIsLoad(true));
    const auth = yield call(authApi.signUp, action.payload);
    yield put(signUpSuccess(auth));
    yield call(createUserInformation, auth);
    yield put(authIsLoad(false));
  } catch (error) {
    yield put(authIsLoad(false));
    yield put(signUpFail(error.message));
    yield delay(3000);
    yield put(signUpFail(null));
  }
}

export function* watchSignUp() {
  yield takeEvery(SIGNUP, signUpWorker);
}
