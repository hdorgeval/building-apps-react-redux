import React from 'react';
import { Link } from 'react-router-dom';
import { CoursesList } from './CoursesList.jsx';

export const Component = () => {
  return (
    <>
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary add-course" style={{ marginBottom: 20 }}>
        Add course
      </Link>
      <CoursesList />
    </>
  );
};

Component.displayName = 'Courses';
export const Courses = Component;
