import * as authorApi from '../../api/authorApi';
import '../../typedef';
import { LOAD_AUTHORS_SUCCESS } from './actionTypes';
import './authorActions.typedef';

/**
 * Action creator
 *
 * @export
 * @param {Author[]} authors
 * @returns {LoadAuthorsSuccessAction}
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
  return (dispatch, getState) => {
    const { courses: authors } = getState();
    if (authors && authors.length > 0) {
      return Promise.resolve();
    }

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
