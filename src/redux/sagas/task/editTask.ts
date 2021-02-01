import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {taskApi} from '../../../api';
import {
  editTaskFail,
  tasksIsLoad,
  tasksIsUpdated,
} from '../../actions/taskActions';
import {IEditTaskAction} from '../../actions/taskActions/types';
import {EDIT_TASK} from '../../constants/taskConstants';

function* editTaskWorker(action: IEditTaskAction) {
  try {
    yield put(tasksIsLoad(true));
    yield call(taskApi.editTask, action.payload);
    yield put(tasksIsUpdated(false));
    yield put(tasksIsLoad(false));
  } catch (error) {
    yield put(tasksIsLoad(false));
    yield put(editTaskFail(error.message));
    yield delay(3000);
    yield put(editTaskFail(null));
  }
}

export function* watchEditTask() {
  yield takeEvery(EDIT_TASK, editTaskWorker);
}
