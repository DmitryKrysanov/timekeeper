import {combineReducers} from 'redux';
import {projectReducer} from './projectReducer/index';
import {authReducer} from './authReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
});
