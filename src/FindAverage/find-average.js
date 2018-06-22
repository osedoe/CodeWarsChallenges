const findAverage = arr => {
  let sum = arr.reduce( (a,b) => a+b, 0);
  let answer = sum / arr.length;
  return answer;
};

module.exports = findAverage;