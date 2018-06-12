const high = str => {
    // 1. We split the string into an array of words
    const wordsArray = str.split(" ");
    // 2. We split each word into letters
    const lettersArray = wordsArray.map( word => word.split(""));
    // 3. We find the points per letter and put it in an array
    let numbersArray = [];
    for (let word of lettersArray) {
        numbers = word
                    // 3.2 We are using charCodeAt to assign the score per letter (i.e. charCodeAt(a) = 97 then 97-1 => a = 1 point
                    .map(letter =>  letter.charCodeAt(0) - 96)
                    // 4. We sum all the points
                    .reduce((total, amount) => total + amount);
        numbersArray.push(numbers);
    }
    console.log(numbersArray);
    // 5. Compare the points for each word and return the highest
    const maximum = Math.max(...numbersArray);
    console.log(maximum);
    const winnerIndex = numbersArray.indexOf(maximum);
    // 6. Return the word associated
    console.log(wordsArray[winnerIndex]);
    return wordsArray[winnerIndex];
};

module.exports = high;

high("take me to semynak");