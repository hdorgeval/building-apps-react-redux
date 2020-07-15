import { connect } from 'react-redux';
import { loadAuthors, loadCourses, saveCourse } from '../../redux/actions';
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
    courses: mappedCourses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadAuthors,
  loadCourses,
  saveCourse,
};

export const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps);
