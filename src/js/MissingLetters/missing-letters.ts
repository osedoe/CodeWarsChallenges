export function fearNotLetter(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const alphabetArray = alphabet.split('');
    const strArray = str.split('');

    const startIndex = alphabetArray.indexOf(strArray[0]);
    const lastLetter = strArray[(strArray.length - 1)];
    const lastIndex = alphabet.indexOf(lastLetter);
    const subAlphabetArray = alphabetArray.slice(startIndex, lastIndex + 1);

    const result = subAlphabetArray.filter(letter => strArray.indexOf(letter) === -1);

    return result[0];
}
