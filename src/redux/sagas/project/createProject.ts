import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {ICreateProjectAction} from '../../actions/projectActions/types';
import {CREATE_PROJECT} from '../../constants/projectConstants';
import {IProject} from '../../../components/Projects/types';
import {
  getProjectsFail,
  getProjectsSuccess,
  projectsIsLoad,
  projectsIsUpdated,
} from '../../actions/projectActions';
import {projectApi} from '../../../api';

function* createProjectWorker(action: ICreateProjectAction) {
  try {
    yield put(projectsIsLoad(true));
    yield call(projectApi.createProject, action.payload);
    yield put(projectsIsUpdated(false));
    // yield put(getProjectsSuccess(projects));
    yield put(projectsIsLoad(false));
  } catch (error) {
    yield put(projectsIsLoad(false));
    yield put(getProjectsFail(error.message));
    yield delay(3000);
    yield put(getProjectsFail(null));
  }
}

export function* watchCreateProject() {
  yield takeEvery(CREATE_PROJECT, createProjectWorker);
}
