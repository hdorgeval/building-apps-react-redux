import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connectStateAndProps } from './ManageCourse.connect';

const Component = (props) => {
  useEffect(() => {
    const { loadAuthors, loadCourses } = props;
    console.log('CoursesList useEffect');

    loadAuthors()
      .then(() => console.log('authors loaded'))
      .catch((error) => console.log('error when loading authors: ', error));

    loadCourses()
      .then(() => console.log('courses loaded'))
      .catch((error) => console.log('error when loading courses: ', error));
  }, []);

  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
};

Component.displayName = 'ManageCourse';
Component.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
};

export const ManageCourse = connectStateAndProps(Component);
