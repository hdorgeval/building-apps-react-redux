import { initialState } from '../state';

/**
 * sliced reducer that handles courses in the state
 * @export
 * @param {course[]} [state=defaultState.courses]
 * @param {*} action
 * @returns the new courses state
 */
export function coursesReducer(state = initialState.courses, action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      return [...state, { ...action.course }];

    default:
      return state;
  }
}
