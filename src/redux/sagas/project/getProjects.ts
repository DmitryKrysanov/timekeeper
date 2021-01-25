import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {GET_PROJECTS} from '../../constants/projectConstants';
import {
  getProjectsFail,
  getProjectsSuccess,
  projectsIsLoad,
  projectsIsUpdated,
} from '../../actions/projectActions';
import {projectApi} from '../../../api';

function* getProjectsWorker() {
  try {
    yield put(projectsIsLoad(true));
    const projects = yield call(projectApi.getProjects);
    yield put(getProjectsSuccess(projects));
    yield put(projectsIsUpdated(true));
    yield put(projectsIsLoad(false));
  } catch (error) {
    yield put(projectsIsLoad(false));
    yield put(getProjectsFail(error.message));
    yield delay(3000);
    yield put(getProjectsFail(null));
  }
}

export function* watchGetProjects() {
  yield takeEvery(GET_PROJECTS, getProjectsWorker);
}
