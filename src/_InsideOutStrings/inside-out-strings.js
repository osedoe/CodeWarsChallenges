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
		if (isEven(word)) {
			return inOutEven(word, half); // [ 'a', 't', 'e', 'k' ]
		} else if (!isEven(word)) {
			
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
function inOutEven(word, half) {
	let firstHalf = word.split("")
		.splice(0, half)
		.reverse();
    /*
    .split("") -> [ 't', 'a', 'k', 'e' ]
    .spice(0, half) -> [ 't', 'a' ]
    .reverse() -> [ 'a', 't' ]
    */
	let secondHalf = letters.reverse(); // ['e', 'k']
	return firstHalf.concat(secondHalf);
}

function tests() {
	insideOut("take me to semynak");
	const word = "take";
	const result = word.split("").reverse();
	console.log(result);
}

