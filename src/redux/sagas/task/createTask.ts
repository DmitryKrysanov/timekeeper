import {takeEvery, put, call} from 'redux-saga/effects';
import {CREATE_TASK} from '../../constants/taskConstants';
import {ICreateTaskAction} from './../../actions/TaskActions/types';

//http://localhost:5000/api/projects/?uid=${uid}/projectId/

function* createTaskWatcher(action: ICreateTaskAction) {
  try {
  } catch (error) {}
}

export function* watchCreateTask() {
  takeEvery(CREATE_TASK, createTaskWatcher);
}
