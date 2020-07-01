import { connect } from 'react-redux';
import { loadAuthors, loadCourses } from '../../redux/actions';
import { newCourse } from '../../redux/actions/course.model';
import '../../typedef';

/**
 * Map state to props
 *
 * @param {State} state
 * @returns {{courses: ViewManageCourse}}
 */
function mapStateToProps(state) {
  const mappedCourses = state.courses.map((course) => {
    const author = state.authors.find((author) => author.id === course.authorId);
    const authorName = author ? author.name : undefined;
    return {
      ...course,
      authorName,
    };
  });

  return {
    selectedCourse: newCourse,
    courses: mappedCourses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadAuthors,
  loadCourses,
};

export const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps);
