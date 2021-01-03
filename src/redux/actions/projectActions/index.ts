import {IProject} from '../../../components/Projects/types';
import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  PROJECTS_IS_LOAD,
} from '../../constants/projectConstants';
import {
  IGetProjectsAction,
  IGetProjectsFailAction,
  IGetProjectsSuccessAction,
  IProjectsIsLoadAction,
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

export const projectsIsLoad = (payload: boolean): IProjectsIsLoadAction => {
  return {type: PROJECTS_IS_LOAD, payload};
};
