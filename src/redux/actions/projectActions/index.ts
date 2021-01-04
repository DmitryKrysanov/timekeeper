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
} from '../../constants/projectConstants';
import {
  ICreateProjectAction,
  ICreateProjectFailAction,
  ICreateProjectSuccessAction,
  IGetProjectsAction,
  IGetProjectsFailAction,
  IGetProjectsSuccessAction,
  IProjectsIsLoadAction,
  IProjectsIsUpdatedAction,
} from './types';

export const getProjects = (): IGetProjectsAction => {
  return {
    type: GET_PROJECTS,
  };
};

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

export const projectsIsLoad = (payload: boolean): IProjectsIsLoadAction => {
  return {type: PROJECTS_IS_LOAD, payload};
};

export const projectsIsUpdated = (
  payload: boolean,
): IProjectsIsUpdatedAction => ({
  type: PROJECTS_IS_UPDATED,
  payload,
});
