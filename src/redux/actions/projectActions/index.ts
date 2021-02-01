import {IProject} from '../../../components/Projects/types';
import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  PROJECTS_IS_LOAD,
  CREATE_PROJECT,
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_SUCCESS,
  PROJECTS_IS_UPDATED,
  GET_PROJECT_BY_ID,
  GET_PROJECT_BY_ID_SUCCESS,
  GET_PROJECT_BY_ID_FAIL,
  EDIT_PROJECT,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_FAIL,
} from '../../constants/projectConstants';
import {
  ICreateProjectAction,
  ICreateProjectFailAction,
  ICreateProjectSuccessAction,
  IEditProjectAction,
  IEditProjectFailAction,
  IEditProjectSuccessAction,
  IGetProjectByIdAction,
  IGetProjectByIdFailAction,
  IGetProjectByIdSuccessAction,
  IGetProjectsAction,
  IGetProjectsFailAction,
  IGetProjectsSuccessAction,
  IProjectsIsLoadAction,
  IProjectsIsUpdatedAction,
} from './types';

export const getProjects = (search: string): IGetProjectsAction => ({
  type: GET_PROJECTS,
  search,
});

export const getProjectsSuccess = (
  payload: IProject[],
): IGetProjectsSuccessAction => {
  return {
    type: GET_PROJECTS_SUCCESS,
    payload,
  };
};

export const getProjectsFail = (
  payload: string | null,
): IGetProjectsFailAction => {
  return {
    type: GET_PROJECTS_FAIL,
    payload,
  };
};

export const getProjectById = (payload: string): IGetProjectByIdAction => {
  return {
    type: GET_PROJECT_BY_ID,
    payload,
  };
};

export const getProjectByIdSuccess = (
  payload: IProject | null,
): IGetProjectByIdSuccessAction => {
  return {
    type: GET_PROJECT_BY_ID_SUCCESS,
    payload,
  };
};

export const getProjectByIdFail = (
  payload: string | null,
): IGetProjectByIdFailAction => {
  return {
    type: GET_PROJECT_BY_ID_FAIL,
    payload,
  };
};

export const createProject = (payload: IProject): ICreateProjectAction => {
  return {
    type: CREATE_PROJECT,
    payload,
  };
};

export const createProjectSuccess = (
  payload: IProject,
): ICreateProjectSuccessAction => {
  return {
    type: CREATE_PROJECT_SUCCESS,
    payload,
  };
};

export const createProjecttFail = (
  payload: string,
): ICreateProjectFailAction => {
  return {
    type: CREATE_PROJECT_FAIL,
    payload,
  };
};

export const editProject = (payload: IProject): IEditProjectAction => ({
  type: EDIT_PROJECT,
  payload,
});

export const editProjectSuccess = (
  payload: IProject,
): IEditProjectSuccessAction => {
  return {
    type: EDIT_PROJECT_SUCCESS,
    payload,
  };
};

export const editProjectFail = (
  payload: string | null,
): IEditProjectFailAction => ({
  type: EDIT_PROJECT_FAIL,
  payload,
});

export const projectsIsLoad = (payload: boolean): IProjectsIsLoadAction => {
  return {type: PROJECTS_IS_LOAD, payload};
};

export const projectsIsUpdated = (
  payload: boolean,
): IProjectsIsUpdatedAction => ({
  type: PROJECTS_IS_UPDATED,
  payload,
});
