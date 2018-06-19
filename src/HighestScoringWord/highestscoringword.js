const high = str => {
    // 1. We split the string into an array of words
    const wordsArray = str.split(" ");
    // 2. We split each word into letters
    const lettersArray = wordsArray.map(word => word.split(""));
    // 3. We find the points per letter and put it in an array
    let numbersArray = [];
    for (let word of lettersArray) {
        numbers = word
                    // 3.2. We are using charCodeAt to assign the score per letter (i.e. charCodeAt(a) = 97 then 97-1 => a = 1 point
                    .map(letter =>  letter.charCodeAt(0) - 96)
                    // 3.3. We sum all the points
                    // The 0 at the end of reduce is giving an initial value of 0 to the reduce function since in one single mf case it gave error
                    .reduce((total, amount) => total + amount, 0);
        numbersArray.push(numbers);
    }
    // 4. Compare the points for each word and return the highest
    const winnerIndex = numbersArray.indexOf(Math.max(...numbersArray));
    // 6. Return the word associated
    return wordsArray[winnerIndex];
};

module.exports = high;