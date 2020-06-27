import * as authorApi from '../../api/authorApi';
import '../../typedef';
import { LOAD_AUTHORS_SUCCESS } from './actionTypes';

/**
 * Action creator
 *
 * @export
 * @param {Author[]} authors
 * @returns
 */
export function loadAuthorsSuccess(authors) {
  return {
    type: LOAD_AUTHORS_SUCCESS,
    authors,
  };
}

/**
 * Thunk to load all authors
 *
 * @export
 * @returns {void}
 */
export function loadAuthors() {
  return (dispatch) => {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
