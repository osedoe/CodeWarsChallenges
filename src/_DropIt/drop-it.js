function dropElements(arr, func) {
	// Drop them elements.
	return arr;
}
  
module.exports = dropElements;

dropElements([1, 2, 3], function(n) {return n < 3; });