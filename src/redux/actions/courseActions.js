import * as courseApi from '../../api/courseApi';
import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from './actionTypes';

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

export function loadCoursesSuccess(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses,
  };
}

export function loadCourses() {
  return (dispatch, getState) => {
    const { courses } = getState();
    if (courses && courses.length > 0) {
      return Promise.resolve();
    }

    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
