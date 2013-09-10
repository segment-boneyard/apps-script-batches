/**
 * Creates a group of batches with a max `size`.
 *
 * @param {Number} size
 * @returns {Batches}
 */

function create (size, callback) {
  return new Batches_(size);
}
