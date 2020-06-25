import { connect } from 'react-redux';
import { createCourse, loadCourses } from '../../redux/actions';

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     createCourse: (course) => dispatch(createCourse(course)),
//   };
// }

const mapDispatchToProps = {
  createCourse,
  loadCourses,
};

export const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps);
