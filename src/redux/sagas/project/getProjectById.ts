import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {
  projectsIsLoad,
  getProjectByIdFail,
  getProjectByIdSuccess,
} from '../../actions/projectActions';
import {IGetProjectByIdAction} from '../../actions/projectActions/types';
import {GET_PROJECT_BY_ID} from '../../constants/projectConstants';
import {projectApi} from '../../../api';

function* getProjectByIdWatcher(action: IGetProjectByIdAction) {
  try {
    yield put(projectsIsLoad(true));
    const project = yield call(projectApi.getProjectById, action.payload);
    yield put(getProjectByIdSuccess(project));
    yield put(projectsIsLoad(false));
  } catch (error) {
    yield put(projectsIsLoad(false));
    yield put(getProjectByIdFail(error.message));
    yield delay(3000);
    yield put(getProjectByIdFail(null));
  }
}

export function* watchGetProjectById() {
  yield takeEvery(GET_PROJECT_BY_ID, getProjectByIdWatcher);
}
