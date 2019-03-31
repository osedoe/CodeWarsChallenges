export function findLongest(array: number[]) {
    return Math.max(...array);
}

// The above solution won't pass the second condition of the question
// since it finds the biggest number (value) in an array, but
// not the first one with the most digits.
// UPDATE: It seems to pass... No entiendo nada.
export function findLongest2(array: number[]) {
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
}