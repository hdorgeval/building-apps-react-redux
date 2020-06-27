import { connect } from 'react-redux';
import { loadAuthors, loadCourses } from '../../redux/actions';
import '../../typedef';

/**
 * Map state to props
 *
 * @param {State} state
 * @returns {{courses: Course[]}}
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
  };
}

const mapDispatchToProps = {
  loadAuthors,
  loadCourses,
};

export const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps);
