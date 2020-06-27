import { combineReducers } from 'redux';
import { authorsReducer } from './authorsReducer';
import { coursesReducer } from './coursesReducer';

export const rootReducer = combineReducers({
  authors: authorsReducer,
  courses: coursesReducer,
});
