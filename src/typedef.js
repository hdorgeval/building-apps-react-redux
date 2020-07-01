/**
 * Author
 * @typedef {{id: number, name: string}} Author
 */

/**
 * Course
 * @typedef {{
 *  id: string,
 *  title: string,
 *  slug: string,
 *  authorId: number,
 * }} Course
 * @property {string} slug - course url.
 */

/**
 * State
 * @typedef {{authors: Author[], courses: Course[]}} State
 */

/**
 * ViewCourse
 * @typedef {{
 *  id: string,
 *  title: string,
 *  slug: string,
 *  authorName: string | undefined
 * }} ViewCourse
 * @property {string} slug - course url.
 */

/**
 * ViewManageCourse
 * @typedef {{
 *  authors: Author[]
 *  courses: ViewCourse[],
 *  selectedCourse: Course
 * }} ViewManageCourse
 */
