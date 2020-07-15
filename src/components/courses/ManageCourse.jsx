import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { newCourse } from '../../redux/actions/course.model.js';
import { CourseForm } from './CourseForm.jsx';
import { connectStateAndProps } from './ManageCourse.connect.js';

const Component = (props) => {
  const params = useParams();
  const selectedCourse = props.courses.find((c) => c.slug === params.slug) || newCourse;

  const [course, setCourse] = useState(selectedCourse);
  const [errors] = useState({});
  const history = useHistory();

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

  function handleChange(event) {
    const { name, value } = event.target;
    console.log('handleChange', { name, value });
    setCourse((previousCourse) => {
      return {
        ...previousCourse,
        [name]: name === 'authorId' ? parseInt(value, 10) : value,
      };
    });
  }

  function handleSave(event) {
    event.preventDefault();
    props.saveCourse(course).then(() => history.push('/courses'));
  }

  return (
    <>
      <CourseForm
        authors={props.authors}
        course={course}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
      />
    </>
  );
};

Component.displayName = 'ManageCourse';
Component.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
};

export const ManageCourse = connectStateAndProps(Component);
