const sumTwoSmallestNumbers = (numbers) => {  
    const newArr = numbers.sort( (a,b) => a-b); // Ascendant order
    return newArr[0]+newArr[1];
};

  sumTwoSmallestNumbers([5, 8, 12, 19, 22]); // 13