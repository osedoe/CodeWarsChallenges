function fearNotLetter(str) {
	
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const alphabetArray = alphabet.split('');
	// console.log(alphabetArray);
	const strArray = str.split('');
	// console.log(strArray);
	
	const startIndex = alphabetArray.indexOf(strArray[0]);
	// console.log(startIndex);
	const lastLetter = strArray[(strArray.length-1)];
	// console.log(lastLetter);
	const lastIndex = alphabet.indexOf(lastLetter);
	// console.log(lastIndex);

	const subAlphabetArray = alphabetArray.slice(startIndex, lastIndex+1);
	// console.log(subAlphabetArray);
	
	const result = subAlphabetArray.filter(letter => {
		return strArray.indexOf(letter) === -1;
	});
	return result[0];
}

module.exports = fearNotLetter;

// fearNotLetter("abcefg");