function translatePigLatin(str) {
	const consonantRegex = /^([aeiou])/;
	const startsWithVowel = () => str.slice().concat('way');
	const startsWithConsonants = () => {
		const index = str.slice().search(/[aeiou]/);
		return (index === -1) ? 
			// Cases where there no vowels, like 'rythm'
			str.slice().concat('ay') : 
			// It will add the sufix made of the collection of consonants before the first vowel to the end plus 'ay'
			str.slice(index).concat( (str.slice(0, index)) + 'ay'); 
	}
    return (str.match(consonantRegex)) ? startsWithVowel() : startsWithConsonants();
}

module.exports = translatePigLatin;