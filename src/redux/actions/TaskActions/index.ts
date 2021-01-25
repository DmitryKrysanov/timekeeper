import {ITask} from './../../../components/Projects/types';
import {
  CREATE_TASK,
  CREATE_TASK_FAIL,
  CREATE_TASK_SUCCESS,
  DELETE_TASK,
  DELETE_TASK_FAIL,
  DELETE_TASK_SUCCESS,
  EDIT_TASK,
  EDIT_TASK_FAIL,
  EDIT_TASK_SUCCESS,
  START_TASK,
  START_TASK_FAIL,
  START_TASK_SUCCESS,
  STOP_TASK,
  STOP_TASK_FAIL,
  STOP_TASK_SUCCESS,
} from '../../constants/taskConstants';
import {
  ICreateTaskAction,
  ICreateTaskFailAction,
  ICreateTaskSuccessAction,
  IDeleteTaskAction,
  IDeleteTaskFailAction,
  IDeleteTaskSuccessAction,
  IEditTaskAction,
  IEditTaskFailAction,
  IEditTaskSuccessAction,
  IStartTaskAction,
  IStartTaskFailAction,
  IStartTaskSuccessAction,
  IStopTaskAction,
  IStopTaskFailAction,
  IStopTaskSuccessAction,
} from './types';

export const createTask = (payload: ITask): ICreateTaskAction => ({
  type: CREATE_TASK,
  payload,
});

export const createTaskSuccess = (
  payload: ITask,
): ICreateTaskSuccessAction => ({
  type: CREATE_TASK_SUCCESS,
  payload,
});

export const createTaskFail = (
  payload: string | null,
): ICreateTaskFailAction => ({
  type: CREATE_TASK_FAIL,
  payload,
});

export const editTask = (): IEditTaskAction => ({
  type: EDIT_TASK,
});

export const editTaskSuccess = (): IEditTaskSuccessAction => ({
  type: EDIT_TASK_SUCCESS,
});

export const editTaskFail = (payload: string | null): IEditTaskFailAction => ({
  type: EDIT_TASK_FAIL,
  payload,
});

export const deleteTask = (): IDeleteTaskAction => ({
  type: DELETE_TASK,
});

export const deleteTaskSuccess = (): IDeleteTaskSuccessAction => ({
  type: DELETE_TASK_SUCCESS,
});

export const deleteTaskFail = (
  payload: string | null,
): IDeleteTaskFailAction => ({
  type: DELETE_TASK_FAIL,
  payload,
});

export const startTask = (): IStartTaskAction => ({
  type: START_TASK,
});

export const startTaskSuccess = (): IStartTaskSuccessAction => ({
  type: START_TASK_SUCCESS,
});

export const startTaskFail = (
  payload: string | null,
): IStartTaskFailAction => ({
  type: START_TASK_FAIL,
  payload,
});

export const stopTask = (): IStopTaskAction => ({
  type: STOP_TASK,
});

export const stopTaskSuccess = (): IStopTaskSuccessAction => ({
  type: STOP_TASK_SUCCESS,
});

export const stopTaskFail = (payload: string | null): IStopTaskFailAction => ({
  type: STOP_TASK_FAIL,
  payload,
});
