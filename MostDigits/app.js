const findLongest = (array) => {
    return Math.max(...array);
};
  

findLongest([1, 10, 100]); // 100
findLongest([9000, 8, 800]); // 9000
findLongest([8, 900, 500]); // 900