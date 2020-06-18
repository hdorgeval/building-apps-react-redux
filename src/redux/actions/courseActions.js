import { CREATE_COURSE } from './actionTypes';

/**
 * Action creator for creating a course
 *
 * @export
 * @param {{title:string}} course
 * @returns a 'CREATE_COURSE' action
 */
export function createCourse(course) {
  return {
    type: CREATE_COURSE,
    course,
  };
}
