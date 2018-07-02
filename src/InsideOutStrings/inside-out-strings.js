const insideOut = str => {
	// Separate the string into words
	const wordsArray = str.split(" ");
	console.log(wordsArray);
	// For each word, we will split it in letters
	wordsArray.map( word => {
		word.split(""); // [ t a k e ]
		const half = word.length / 2;
		// Find out if the letter count is even or odd
		// If even:
		if (isEven(word) === true) {
			let letters = word.split("");
			let firstHalf = letters.splice(0, half);
			let firstResult = firstHalf.reverse();
			let secondResult = letters.reverse();
			const reverseWord = firstResult.concat(secondResult);

		}
	});
	
	
		// 3.1 If ODD: divide the word leaving the middle letter in sectionA-middle-sectionB
		// 3.2 If EVEN: divide the word in sectionA-sectionB
	// 4. Reverse each section
	// 5. Join the words
	// 6. Join the string and return it
	
	function isEven(word) {
		(word.length%2 === 0) ? true : false;
	}
	
	
	const result = wordsArray.join(" ");
	console.log(result);
	return result;
};

tests();
function tests() {
	insideOut("take me to semynak");
	const word = "take";
	const result = word.split("").reverse();
	console.log(result);
}

