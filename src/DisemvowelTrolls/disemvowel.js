const disemvowel = str => {
	// Another variation found in CodeWars, that is probably better than making an array with Lowers and Uppers, would be doing a str.toLowerCase()
	const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	return str.split("")
			  .filter( el => !vowels.includes(el))
			  .join("");
};

module.exports = disemvowel;

// UPDATE1: [TO-DO]
// Review Regular Expresions, since I don't remember how-to
// function disemvowel(str) {
// 	return str.replace(/[aeiou]/gi, '');
// }

// UPDATE2: [TO-DO done]
// Check the WebDevNotes repo for the RegEx :333
