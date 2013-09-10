/**
 * Creates a group of batches with a `max` size.
 *
 * @param {Number} max
 * @returns {Batches}
 */

function create (max) {
  return new Batches_(max);
}