import React from 'react';
import { CoursesList } from './CoursesList.jsx';

export const Component = () => {
  return (
    <>
      <h2>Courses</h2>
      <CoursesList />
    </>
  );
};

Component.displayName = 'Courses';
export const Courses = Component;
