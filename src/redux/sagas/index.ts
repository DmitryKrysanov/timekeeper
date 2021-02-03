import {all} from 'redux-saga/effects';
import {watchSignIn} from './auth/signIn';
import {watchSignOut} from './auth/signOut';
import {watchSignUp} from './auth/signUp';
import {watchCreateProject} from './project/createProject';
import {watchDeleteProject} from './project/deleteProject';
import {watchEditProject} from './project/editProject';
import {watchGetProjectById} from './project/getProjectById';
import {watchGetProjects} from './project/getProjects';
import {watchCreateTask} from './task/createTask';
import {watchDeleteTask} from './task/deleteTask';
import {watchEditTask} from './task/editTask';
import {watchGetTasks} from './task/getTasks';

export default function* rootSaga() {
  yield all([
    watchSignIn(),
    watchSignUp(),
    watchSignOut(),
    watchGetProjects(),
    watchCreateProject(),
    watchGetProjectById(),
    watchEditProject(),
    watchDeleteProject(),
    watchGetTasks(),
    watchCreateTask(),
    watchEditTask(),
    watchDeleteTask(),
  ]);
}
