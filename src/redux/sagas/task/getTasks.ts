import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {IGetTasksAction} from '../../actions/taskActions/types';
import {taskApi} from '../../../api';
import {
  getTasksFail,
  getTasksSuccess,
  tasksIsLoad,
  tasksIsUpdated,
} from '../../actions/taskActions';
import {GET_TASKS} from '../../constants/taskConstants';

function* getTasksWorker(action: IGetTasksAction) {
  try {
    yield put(tasksIsLoad(true));
    const tasks = yield call(taskApi.getTasks, action.payload, action.search);
    yield put(getTasksSuccess(tasks));
    yield put(tasksIsUpdated(true));
    yield put(tasksIsLoad(false));
  } catch (error) {
    yield put(tasksIsLoad(false));
    yield put(getTasksFail(error.message));
    yield delay(3000);
    yield put(getTasksFail(null));
  }
}

export function* watchGetTasks() {
  yield takeEvery(GET_TASKS, getTasksWorker);
}
