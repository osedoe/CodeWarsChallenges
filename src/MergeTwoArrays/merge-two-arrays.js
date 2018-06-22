const mergeTwoArrays = (arr1, arr2) => {
    let newArr = arr1.concat(arr2);
    let finalArr = [];
    newArr.forEach( element => {
        if (!finalArr.includes(element)) finalArr.push(element);
    });
    finalArr.sort((a,b)=>a-b);    
    return finalArr;
};

module.exports = mergeTwoArrays;