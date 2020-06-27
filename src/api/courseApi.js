import '../typedef';
import { handleError, handleResponse } from './apiUtils';
const baseUrl = `${process.env.API_URL}/courses/`;

/**
 * fecth all courses
 *
 * @export
 * @returns {Promise<Course[]>}
 */
export function getCourses() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

/**
 * Save course
 *
 * @export
 * @param {Course} course
 * @returns {void}
 * @throws an error on HTTP failure
 */
export function saveCourse(course) {
  return fetch(baseUrl + (course.id || ''), {
    method: course.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(course),
  })
    .then(handleResponse)
    .catch(handleError);
}

/**
 * Delete course by it's id
 *
 * @export
 * @param {string} courseId
 * @returns {void}
 */
export function deleteCourse(courseId) {
  return fetch(baseUrl + courseId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
