function dropElements(arr, func) {



	return arr;
}
  
module.exports = dropElements;

dropElements([1, 2, 3], function(n) {return n < 3; }); // [1, 2, 3]
dropElements([1, 2, 3], function (n) {return n >= 3; }); // [3]