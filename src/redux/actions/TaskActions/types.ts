import {ITask} from '../../../components/Projects/types';
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
  GET_TASKS,
  GET_TASKS_FAIL,
  GET_TASKS_SUCCESS,
  START_TASK,
  START_TASK_FAIL,
  START_TASK_SUCCESS,
  STOP_TASK,
  STOP_TASK_FAIL,
  STOP_TASK_SUCCESS,
  TASKS_IS_LOAD,
  TASKS_IS_UPDATED,
} from '../../constants/taskConstants';

export interface IGetTasksAction {
  type: typeof GET_TASKS;
  payload: string;
}

export interface IGetTasksSuccessAction {
  type: typeof GET_TASKS_SUCCESS;
  payload: ITask[];
}

export interface IGetTasksFailAction {
  type: typeof GET_TASKS_FAIL;
  payload: string | null;
}

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
  payload: ITask;
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
  payload: string;
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

export interface ITasksIsLoadAction {
  type: typeof TASKS_IS_LOAD;
  payload: boolean;
}

export interface ITasksIsUpdatedAction {
  type: typeof TASKS_IS_UPDATED;
  payload: boolean;
}

export type TaskActionsTypes =
  | IGetTasksAction
  | IGetTasksSuccessAction
  | IGetTasksFailAction
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
  | IStopTaskFailAction
  | ITasksIsLoadAction
  | ITasksIsUpdatedAction;
