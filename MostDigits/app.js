
// const findLongest = a => Math.max(...a);
//
// The above solution won't pass the second condition of the question
// since it finds the biggest number (value) in an array,
// not the first one with the most digits.

const findLongest = array => {
    let digitLength = 0;
    let firstLongest;
    for (let i = 0; i < array.length; i++) {
        let str = array[i].toString();
        if (str.length > digitLength) {
            digitLength = str.length;
            firstLongest = str;
        }
    }
    console.log(firstLongest);
    return firstLongest;
};

findLongest([1, 10, 100]); // 100
findLongest([9000, 8, 800]); // 9000
findLongest([8, 900, 500]); // 900