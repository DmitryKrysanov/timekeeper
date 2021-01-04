import {all} from 'redux-saga/effects';
import {watchSignIn} from './auth/signIn';
import {watchSignOut} from './auth/signOut';
import {watchSignUp} from './auth/signUp';
import {watchCreateProject} from './project/createProject';
import {watchGetProjects} from './project/getProjects';

export default function* rootSaga() {
  yield all([
    watchSignIn(),
    watchSignUp(),
    watchSignOut(),
    watchGetProjects(),
    watchCreateProject(),
  ]);
}
