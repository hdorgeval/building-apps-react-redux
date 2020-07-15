import React from 'react';
import { CoursesList } from './CoursesList.jsx';

export const Component = () => {
  return (
    <>
      <h2>Courses</h2>
      <button style={{ marginBottom: 20 }} className="btn btn-primary add-course">
        Add course
      </button>
      <CoursesList />
    </>
  );
};

Component.displayName = 'Courses';
export const Courses = Component;
