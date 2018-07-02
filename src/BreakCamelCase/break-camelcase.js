const breakCamelCase = str => {
	const subs = match => ' ' + match;
	// In String.replace(oldStr, newStr), we can pass a function to the second argument that will take the match as a paremeter.
	const result = str.replace(/[A-Z]/g, subs);
	return result;
};

module.exports = breakCamelCase;