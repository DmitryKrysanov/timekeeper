import {takeEvery, put, call, delay} from 'redux-saga/effects';
import {CREATE_TASK} from '../../constants/taskConstants';
import {ICreateTaskAction} from '../../actions/taskActions/types';
import {
  createTaskFail,
  tasksIsLoad,
  tasksIsUpdated,
} from '../../actions/taskActions';
import {taskApi} from '../../../api';

function* createTaskWatcher(action: ICreateTaskAction) {
  try {
    yield put(tasksIsLoad(true));
    yield call(taskApi.createTask, action.payload);
    yield put(tasksIsUpdated(false));
    yield put(tasksIsLoad(false));
  } catch (error) {
    yield put(tasksIsLoad(false));
    yield put(createTaskFail(error.message));
    yield delay(3000);
    yield put(createTaskFail(null));
  }
}

export function* watchCreateTask() {
  yield takeEvery(CREATE_TASK, createTaskWatcher);
}
