import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connectStateAndProps } from './CoursesList.connect';

export const Component = (props) => {
  useEffect(() => {
    console.log('launch useEffect');
    props
      .loadCourses()
      .then(() => console.log('courses loaded'))
      .catch((error) => console.log('error when loading courses: ', error));
  }, []);

  return (
    <>
      {props.courses.map((course) => {
        return <div key={course.title}>{course.title}</div>;
      })}
    </>
  );
};

Component.displayName = 'CoursesList';
Component.propTypes = {
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
};

export const CoursesList = connectStateAndProps(Component);
