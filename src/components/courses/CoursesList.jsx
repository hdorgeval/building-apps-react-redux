import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <a className="btn btn-light" href={'http://pluralsight.com/courses' + course.slug}>
                  Watch
                </a>
              </td>
              <td>
                <Link to={`/course/${course.slug}`}>{course.title}</Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Component.displayName = 'CoursesList';
Component.propTypes = {
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
};

export const CoursesList = connectStateAndProps(Component);
