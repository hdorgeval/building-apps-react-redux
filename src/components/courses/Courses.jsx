import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connectStateAndProps } from './Courses.connect';

export const Component = (props) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCourse({ title });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={handleChange} value={title} />
        <input type="submit" value="Save" />
      </form>
      {props.courses.map((course) => {
        return <div key={course.title}>{course.title}</div>;
      })}
    </>
  );
};

Component.displayName = 'Courses';
Component.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
};
export const Courses = connectStateAndProps(Component);
