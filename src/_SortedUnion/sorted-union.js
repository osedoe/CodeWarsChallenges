function uniteUnique(...args) {
	let clusterArray = [];
	args.forEach(array => clusterArray = clusterArray.concat(array));
	let finalArray = [];
	return result = clusterArray.filter(number => (finalArray.indexOf(number) === -1) ? finalArray.push(number) : 0);
}

module.exports = uniteUnique;