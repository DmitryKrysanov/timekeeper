import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {IEditProjectAction} from '../../actions/projectActions/types';
import {EDIT_PROJECT} from '../../constants/projectConstants';
import {
  editProjectFail,
  // editProjectSuccess,
  projectsIsLoad,
  projectsIsUpdated,
} from '../../actions/projectActions';
import {projectApi} from '../../../api';

function* editProjectWorker(action: IEditProjectAction) {
  try {
    yield put(projectsIsLoad(true));
    yield call(projectApi.editProject, action.payload);
    yield put(projectsIsUpdated(false));
    // yield put(getProjectsSuccess(projects));
    yield put(projectsIsLoad(false));
  } catch (error) {
    yield put(projectsIsLoad(false));
    yield put(editProjectFail(error.message));
    yield delay(3000);
    yield put(editProjectFail(null));
  }
}

export function* watchEditProject() {
  yield takeEvery(EDIT_PROJECT, editProjectWorker);
}
