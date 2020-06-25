import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connectStateAndProps } from './Courses.connect';

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
      <h2>Courses</h2>
      {props.courses.map((course) => {
        return <div key={course.title}>{course.title}</div>;
      })}
    </>
  );
};

Component.displayName = 'Courses';
Component.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
};
export const Courses = connectStateAndProps(Component);
