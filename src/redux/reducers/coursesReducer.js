import {
  CREATE_COURSE_SUCCESS,
  LOAD_COURSES_SUCCESS,
  UPDATE_COURSE_SUCCESS,
} from '../actions/actionTypes';
import { initialState } from '../state';

/**
 * sliced reducer that handles courses in the state
 * @export
 * @param {course[]} [state=defaultState.courses]
 * @param {{type: string, course:{title:string}}} action
 * @returns the new courses state
 */
export function coursesReducer(state = initialState.courses, action) {
  switch (action.type) {
    case CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case UPDATE_COURSE_SUCCESS:
      return state.map((course) => (course.id === action.course.id ? action.course : course));
    case LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
