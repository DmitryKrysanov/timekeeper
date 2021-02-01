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
  IGetTasksAction,
  IGetTasksFailAction,
  IGetTasksSuccessAction,
  IStartTaskAction,
  IStartTaskFailAction,
  IStartTaskSuccessAction,
  IStopTaskAction,
  IStopTaskFailAction,
  IStopTaskSuccessAction,
  ITasksIsLoadAction,
  ITasksIsUpdatedAction,
} from './types';

export const getTasks = (payload: string, search: string): IGetTasksAction => ({
  type: GET_TASKS,
  payload,
  search,
});

export const getTasksSuccess = (payload: ITask[]): IGetTasksSuccessAction => ({
  type: GET_TASKS_SUCCESS,
  payload,
});

export const getTasksFail = (payload: string | null): IGetTasksFailAction => ({
  type: GET_TASKS_FAIL,
  payload,
});

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

export const editTask = (payload: ITask): IEditTaskAction => ({
  type: EDIT_TASK,
  payload,
});

export const editTaskSuccess = (): IEditTaskSuccessAction => ({
  type: EDIT_TASK_SUCCESS,
});

export const editTaskFail = (payload: string | null): IEditTaskFailAction => ({
  type: EDIT_TASK_FAIL,
  payload,
});

export const deleteTask = (payload: string): IDeleteTaskAction => ({
  type: DELETE_TASK,
  payload,
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

export const tasksIsLoad = (payload: boolean): ITasksIsLoadAction => ({
  type: TASKS_IS_LOAD,
  payload,
});

export const tasksIsUpdated = (payload: boolean): ITasksIsUpdatedAction => ({
  type: TASKS_IS_UPDATED,
  payload,
});
