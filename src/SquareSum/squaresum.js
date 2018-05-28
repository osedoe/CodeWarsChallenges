module.exports = squareSum = num => num.map(el => el*el).reduce((acc, val) => acc + val);

  

squareSum([1, 2, 2]);