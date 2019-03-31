export function pairElement(str: string) {
	const dnaArray = str.split('');
	const result = dnaArray.map( element => {
		switch(element) {
			case 'A':
				return [element, 'T'];
				break;
			case 'T':
				return [element, 'A'];
				break;
			case 'C':
				return [element, 'G'];
				break;
			case 'G':
				return [element, 'C'];
				break;
		}
	});
	return result;
}