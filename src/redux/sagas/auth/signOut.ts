import {call, put, takeEvery} from 'redux-saga/effects';
import {
  authIsLoad,
  signOutFail,
  signOutSuccess,
} from '../../actions/authActions/index';
import {SIGNOUT} from '../../constants/authContstants';
import {deleteUserInformation} from '../../../helpers/auth';

function* SignOutWorker() {
  try {
    yield put(authIsLoad(true));
    yield put(signOutSuccess());
    yield call(deleteUserInformation);
    yield put(authIsLoad(false));
  } catch (error) {
    yield put(authIsLoad(false));
    yield put(signOutFail(error.message));
  }
}

export function* watchSignOut() {
  yield takeEvery(SIGNOUT, SignOutWorker);
}
