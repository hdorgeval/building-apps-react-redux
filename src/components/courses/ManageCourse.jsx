import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { CourseForm } from './CourseForm.jsx';
import { connectStateAndProps } from './ManageCourse.connect.js';

const Component = (props) => {
  const [course] = useState({ ...props.selectedCourse });
  const [errors] = useState({});

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
      <CourseForm course={course} errors={errors} authors={props.authors} />
    </>
  );
};

Component.displayName = 'ManageCourse';
Component.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  selectedCourse: PropTypes.object.isRequired,
};

export const ManageCourse = connectStateAndProps(Component);
