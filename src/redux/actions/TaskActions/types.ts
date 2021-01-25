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

export interface ICreateTaskAction {
  type: typeof CREATE_TASK;
  payload: ITask;
}

export interface ICreateTaskSuccessAction {
  type: typeof CREATE_TASK_SUCCESS;
  payload: ITask;
}

export interface ICreateTaskFailAction {
  type: typeof CREATE_TASK_FAIL;
  payload: string | null;
}

export interface IEditTaskAction {
  type: typeof EDIT_TASK;
}

export interface IEditTaskSuccessAction {
  type: typeof EDIT_TASK_SUCCESS;
}

export interface IEditTaskFailAction {
  type: typeof EDIT_TASK_FAIL;
  payload: string | null;
}

export interface IDeleteTaskAction {
  type: typeof DELETE_TASK;
}

export interface IDeleteTaskSuccessAction {
  type: typeof DELETE_TASK_SUCCESS;
}

export interface IDeleteTaskFailAction {
  type: typeof DELETE_TASK_FAIL;
  payload: string | null;
}

export interface IStartTaskAction {
  type: typeof START_TASK;
}

export interface IStartTaskSuccessAction {
  type: typeof START_TASK_SUCCESS;
}

export interface IStartTaskFailAction {
  type: typeof START_TASK_FAIL;
  payload: string | null;
}

export interface IStopTaskAction {
  type: typeof STOP_TASK;
}

export interface IStopTaskSuccessAction {
  type: typeof STOP_TASK_SUCCESS;
}

export interface IStopTaskFailAction {
  type: typeof STOP_TASK_FAIL;
  payload: string | null;
}

export type TaskActionsTypes =
  | ICreateTaskAction
  | ICreateTaskSuccessAction
  | ICreateTaskFailAction
  | IEditTaskAction
  | IEditTaskSuccessAction
  | IEditTaskFailAction
  | IDeleteTaskAction
  | IDeleteTaskSuccessAction
  | IDeleteTaskFailAction
  | IStartTaskAction
  | IStartTaskSuccessAction
  | IStartTaskFailAction
  | IStopTaskAction
  | IStopTaskSuccessAction
  | IStopTaskFailAction;
