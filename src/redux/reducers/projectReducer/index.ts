import {
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_BY_ID_FAIL,
  PROJECTS_IS_LOAD,
  PROJECTS_IS_UPDATED,
  CREATE_PROJECT_FAIL,
  GET_PROJECT_BY_ID_SUCCESS,
  EDIT_PROJECT_FAIL,
  DELETE_PROJECT_FAIL,
} from '../../constants/projectConstants';
import {ProjectActionsTypes} from '../../actions/projectActions/types';

const initialState = {
  projects: [],
  isProjectLoad: false,
  activeProject: null,
  error: null,
  projectsIsUpdated: false,
};

export const projectReducer = (
  state = initialState,
  action: ProjectActionsTypes,
) => {
  switch (action.type) {
    case PROJECTS_IS_LOAD:
      return {
        ...state,
        isProjectLoad: action.payload,
      };
    case PROJECTS_IS_UPDATED:
      return {
        ...state,
        projectsIsUpdated: action.payload,
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
      };
    case GET_PROJECT_BY_ID_SUCCESS:
      return {
        ...state,
        activeProject: action.payload,
      };
    case GET_PROJECTS_FAIL:
    case CREATE_PROJECT_FAIL:
    case GET_PROJECT_BY_ID_FAIL:
    case EDIT_PROJECT_FAIL:
    case DELETE_PROJECT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
