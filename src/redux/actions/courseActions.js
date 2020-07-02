import * as courseApi from '../../api/courseApi';
import {
  CREATE_COURSE,
  CREATE_COURSE_SUCCESS,
  LOAD_COURSES_SUCCESS,
  UPDATE_COURSE_SUCCESS,
} from './actionTypes';

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

export function createCourseSuccess(course) {
  return {
    type: CREATE_COURSE_SUCCESS,
    course,
  };
}
export function updateCourseSuccess(course) {
  return {
    type: UPDATE_COURSE_SUCCESS,
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
/**
 * Thunk to save course
 *
 * @export
 * @param {Course} course
 */
export function saveCourse(course) {
  return (dispatch) => {
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        console.log('error while saving course', course, error);
      });
  };
}
