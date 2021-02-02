import {IProject} from './../../../components/Projects/types';
import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  CREATE_PROJECT,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,
  EDIT_PROJECT,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_FAIL,
  DELETE_PROJECT,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  GET_PROJECT_BY_ID,
  GET_PROJECT_BY_ID_SUCCESS,
  GET_PROJECT_BY_ID_FAIL,
  PROJECTS_IS_LOAD,
  PROJECTS_IS_UPDATED,
} from '../../constants/projectConstants';

export interface IGetProjectsAction {
  type: typeof GET_PROJECTS;
  search: string;
}

export interface IGetProjectsSuccessAction {
  type: typeof GET_PROJECTS_SUCCESS;
  payload: IProject[];
}

export interface IGetProjectsFailAction {
  type: typeof GET_PROJECTS_FAIL;
  payload: string | null;
}

export interface ICreateProjectAction {
  type: typeof CREATE_PROJECT;
  payload: IProject;
}

export interface ICreateProjectSuccessAction {
  type: typeof CREATE_PROJECT_SUCCESS;
  payload: IProject;
}

export interface ICreateProjectFailAction {
  type: typeof CREATE_PROJECT_FAIL;
  payload: string;
}

export interface IEditProjectAction {
  type: typeof EDIT_PROJECT;
  payload: IProject;
}

export interface IEditProjectSuccessAction {
  type: typeof EDIT_PROJECT_SUCCESS;
  payload: IProject;
}

export interface IEditProjectFailAction {
  type: typeof EDIT_PROJECT_FAIL;
  payload: string | null;
}

export interface IDeleteProjectAction {
  type: typeof DELETE_PROJECT;
}

export interface IDeleteProjectSuccessAction {
  type: typeof DELETE_PROJECT_SUCCESS;
}

export interface IDeleteProjectFailAction {
  type: typeof DELETE_PROJECT_FAIL;
  payload: string | null;
}

export interface IGetProjectByIdAction {
  type: typeof GET_PROJECT_BY_ID;
  payload: string;
}

export interface IGetProjectByIdSuccessAction {
  type: typeof GET_PROJECT_BY_ID_SUCCESS;
  payload: IProject | null;
}

export interface IGetProjectByIdFailAction {
  type: typeof GET_PROJECT_BY_ID_FAIL;
  payload: string | null;
}

export interface IProjectsIsLoadAction {
  type: typeof PROJECTS_IS_LOAD;
  payload: boolean;
}

export interface IProjectsIsUpdatedAction {
  type: typeof PROJECTS_IS_UPDATED;
  payload: boolean;
}

export type ProjectActionsTypes =
  | IGetProjectsAction
  | IGetProjectsSuccessAction
  | IGetProjectsFailAction
  | ICreateProjectAction
  | ICreateProjectSuccessAction
  | ICreateProjectFailAction
  | IEditProjectAction
  | IEditProjectSuccessAction
  | IEditProjectFailAction
  | IDeleteProjectAction
  | IDeleteProjectSuccessAction
  | IDeleteProjectFailAction
  | IGetProjectByIdAction
  | IGetProjectByIdSuccessAction
  | IGetProjectByIdFailAction
  | IProjectsIsLoadAction
  | IProjectsIsUpdatedAction;
