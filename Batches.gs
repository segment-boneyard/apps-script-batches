/**
 * Initialize a group of `Batches` with a `max` size.
 *
 * @param {Number} max
 * @return {Batches}
 */

function Batches_ (max) {
  this.batches = [[]];
  this.max = max;
  this.count = 0;
}


/**
 * Push a new `item` onto the current batch.
 *
 * @param {Object} item
 */

Batches_.prototype.push = function (item) {
  var last = this._last();
  last.push(item);
  this.count += 1;
  if (last.length >= this.max) this.batches.push([]);
};


/**
 * Traverse the batches with an `iterator`.
 *
 * @param {Function} iterator
 * @return {Batches}
 */

Batches_.prototype.each = function (iterator) {
  for (var i = 0, batch; batch = this.batches[i]; i++) iterator(batch);
  return this;
};


/**
 * Return the current last batch.
 *
 * @return {Array}
 * @api private
 */

Batches_.prototype._last = function () {
  return this.batches[this.batches.length-1];
};