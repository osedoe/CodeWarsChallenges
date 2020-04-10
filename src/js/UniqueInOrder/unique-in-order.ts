export function uniqueInOrder(iterable) {
    // Check that iterable is an array or a string and turn it into an array if string
    let arr = iterable;
    if (typeof iterable === 'string') {
        arr = iterable.split('');
    }
    let result = [];
    for (let value of arr) {
        if (result.indexOf(value) === -1 || result.lastIndexOf(value) !== result.length-1) result.push(value);
    }
    return result;
}