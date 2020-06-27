import '../typedef';
import { handleError, handleResponse } from './apiUtils';
const baseUrl = process.env.API_URL + '/authors/';

/**
 * load all Authors
 *
 * @export
 * @returns {Promise<Author[]>}
 */
export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
