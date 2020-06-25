import { connect } from 'react-redux';
import { loadCourses } from '../../redux/actions';

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

const mapDispatchToProps = {
  loadCourses,
};

export const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps);
