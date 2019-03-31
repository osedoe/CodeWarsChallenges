const findLongest = a => Math.max(...a);

// The above solution won't pass the second condition of the question
// since it finds the biggest number (value) in an array, but
// not the first one with the most digits.
// UPDATE: It seems to pass... No entiendo nada.

const findLongest2 = array => {
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

module.exports = { findLongest, findLongest2 }