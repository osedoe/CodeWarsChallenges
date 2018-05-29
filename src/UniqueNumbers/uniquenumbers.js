module.exports = uniqueNumbers = arr => {
    // Remove duplicates
    arr.forEach(item => {
        while (arr.indexOf(item) !== arr.lastIndexOf(item)) arr.splice(arr.indexOf(item), 1);
    });
    return arr;
};


uniqueNumbers([1,1,2,2]);