import {all} from 'redux-saga/effects';
import {watchSignIn} from './auth/signIn';

export default function* rootSaga() {
  yield all([watchSignIn()]);
}
