var _ = Underscore.load();

/**
 * A single batches container
 * @param {int} size   The maximum size of a single batch
 * @returns {Batches}  A Batches container
 */
function Batches_ (size) {
  this.batches = [[]];
  this.size = size;
  this.count = 0;
}

Batches_.prototype._last = function () {
  return _.last(this.batches);
};

/**
 * Pushes an item into the last batch
 * @param {object} item  Item to push
 */
Batches_.prototype.push = function (item) {
  var last = this._last();
  last.push(item);
  this.count += 1;
  if (last.length >= this.size) this.batches.push([]);
};

/**
 * Traverses the batches
 * @param {function} fn  Callback to call on each batch
 */
Batches_.prototype.each = function (fn) {
  return _.each(this.batches, fn);
};
