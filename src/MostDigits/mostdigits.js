
module.exports = findLongest2 = a => Math.max(...a);
//
// The above solution won't pass the second condition of the question
// since it finds the biggest number (value) in an array,
// not the first one with the most digits.
// UPDATE: It seems to pass... No entiendo nada.

module.exports = findLongest = array => {
    let digitLength = 0;
    let firstLongest;
    for (let i = 0; i < array.length; i++) {
        let str = array[i].toString();
        if (str.length > digitLength) {
            digitLength = str.length;
            firstLongest = str;
        }
    }
    return parseInt(firstLongest);
};
