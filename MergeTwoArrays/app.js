let mergeArrays = (arr1, arr2) => {
    
    let newArr = arr1.concat(arr2);
    let finalArr = [];
    newArr.forEach( element => {
        if (!finalArr.includes(element)) {
            finalArr.push(element);
        }
    });
    finalArr.sort((a,b)=>a-b);    
    return finalArr;
};

mergeArrays([1,2,3,4], [5,6,7,8]);
mergeArrays([1,3,5,7,9], [10,8,6,4,2]);
mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]);
