const breakCamelCase = str => {
	const subs = match => ' ' + match;
	const result = str.replace(/[A-Z]/g, subs);
	return result;
};

breakCamelCase("holaQueTal");

module.exports = breakCamelCase;