import { LOAD_AUTHORS_SUCCESS } from '../actions/actionTypes';
import '../actions/authorActions.typedef';
import { initialState } from '../state';

/**
 * sliced reducer that handles authors in the state
 * @export
 * @param {Author[]} [state=defaultState.courses]
 * @param {LoadAuthorsSuccessAction} action
 * @returns the new courses state
 */
export function authorsReducer(state = initialState.authors, action) {
  switch (action.type) {
    case LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
