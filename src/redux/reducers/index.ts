import {combineReducers} from 'redux';
import {projectReducer} from './projectReducer/index';
import {authReducer} from './authReducer';
import {taskReducer} from './taskReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  task: taskReducer,
});
