function convertHTML(str) {
	const arr = str.split("");
	let result = arr.map( letter => {
		switch (letter) {
			case '&':
				return '&amp;';
				break;
			case '<':
				return '&lt;';
				break;
			case '>':
				return '&gt;';
				break;
			case '"':
				return '&quot;';
				break;
			case '\'':
				return '&apos;';
				break;
			default:
				return letter;
		}
	});
	return result.join('');
}
  
module.exports = convertHTML;