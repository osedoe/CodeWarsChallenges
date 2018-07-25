function uniqueInOrder(iterable) {
    // Check that iterable is an array
    let arr;
    if (typeof iterable === 'string') {
        arr = iterable.split(''); // ​​​​​[ 'A', 'B', 'B', 'C', 'c', 'A', 'D' ]​​​​​
    } else {
        arr = iterable;
    }
    let result = [];
    
    for (let value of arr) {

        if (result.indexOf(value) === -1 || result.lastIndexOf(value) !== result.length-1) {
            result.push(value);
        }
    }
    console.log(result);
    return result;
}

module.exports = uniqueInOrder;
// uniqueInOrder('ABBCcAD');
