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
 *  authorName: string | undefined
 * }} Course
 * @property {string} slug - course url.
 */

/**
 * State
 * @typedef {{authors: Author[], courses: Course[]}} State
 */
