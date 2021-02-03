import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {DELETE_PROJECT} from '../../constants/projectConstants';
import {IDeleteProjectAction} from '../../actions/projectActions/types';
import {projectsIsLoad, deleteProjectFail} from '../../actions/projectActions';
import {projectApi} from '../../../api';

function* deleteProjectWatcher(action: IDeleteProjectAction) {
  try {
    yield put(projectsIsLoad(true));
    yield call(projectApi.deleteProject, action.payload);
    yield put(projectsIsLoad(false));
  } catch (error) {
    yield put(projectsIsLoad(false));
    yield put(deleteProjectFail(error.message));
    yield delay(3000);
    yield put(deleteProjectFail(null));
  }
}

export function* watchDeleteProject() {
  yield takeEvery(DELETE_PROJECT, deleteProjectWatcher);
}
