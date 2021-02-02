import {TaskActionsTypes} from '../../actions/taskActions/types';
import {
  CREATE_TASK_FAIL,
  GET_TASKS_FAIL,
  GET_TASKS_SUCCESS,
  TASKS_IS_LOAD,
  TASKS_IS_UPDATED,
} from '../../constants/taskConstants';

const initialState = {
  tasks: [],
  isTasksLoad: false,
  activeProject: null,
  error: null,
  tasksIsUpdated: false,
};

export const taskReducer = (state = initialState, action: TaskActionsTypes) => {
  switch (action.type) {
    case TASKS_IS_LOAD:
      return {
        ...state,
        isTasksLoad: action.payload,
      };
    case TASKS_IS_UPDATED:
      return {
        ...state,
        tasksIsUpdated: action.payload,
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      };
    case GET_TASKS_FAIL:
    case CREATE_TASK_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
