import {
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS,
  PROJECTS_IS_LOAD,
  PROJECTS_IS_UPDATED,
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
    case GET_PROJECTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
