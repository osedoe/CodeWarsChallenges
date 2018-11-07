function obtainDividers(value) {
	let div = [];

	for (let i = 1; i < value; i++) {
		if (value % i == 0) {
			div.push(i);
		}
	}

	return div;
}

function minimumDividers (value) {
	let mdiv = obtainDividers(value); 
	for (let i = 0; i < mdiv.length-1; i++) {
		for (let j = 1; j < mdiv.length; j++) {
			if (mdiv[i] % mdiv[j] == 0 && mdiv[i] !== mdiv[j]) {
				mdiv.pop(i);
			}
		}
	}

	return mdiv;
}

function compare(array1,array2) {
	var common = [];
	for (let i = 0; i < array1.length; i++) {
	  for (let j = 0; j < array2.length; j++) {
	  	if ( array1[i] == array2[j] | array2[j]%array1[i] == 0) {
		  common.push(array1[i]);
		  }
	  }
  } 
  
	return common;
}

function greatestCommonDivisor (arr) {
	let mdiv1 = minimumDividers(arr[0]);
  	let mdiv2 = minimumDividers(arr[1]);
	let gcd = compare(mdiv1,mdiv2);

	return  gcd;
}

function smallestCommonMultiple (arr) {
	let gcd = greatestCommonDivisor (arr);

    return arr[0]*arr[1]/gcd;
}
	
module.exports = smallestCommmonMultiple;