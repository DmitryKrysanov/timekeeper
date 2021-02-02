import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {taskApi} from '../../../api';
import {
  deleteTaskFail,
  tasksIsLoad,
  tasksIsUpdated,
} from '../../actions/taskActions';
import {IDeleteTaskAction} from '../../actions/taskActions/types';
import {DELETE_TASK} from '../../constants/taskConstants';

function* deleteTaskWorker(action: IDeleteTaskAction) {
  try {
    yield put(tasksIsLoad(true));
    yield call(taskApi.deleteTask, action.payload);
    yield put(tasksIsUpdated(false));
    yield put(tasksIsLoad(false));
  } catch (error) {
    yield put(tasksIsLoad(false));
    yield put(deleteTaskFail(error.message));
    yield delay(3000);
    yield put(deleteTaskFail(null));
  }
}

export function* watchDeleteTask() {
  yield takeEvery(DELETE_TASK, deleteTaskWorker);
}
