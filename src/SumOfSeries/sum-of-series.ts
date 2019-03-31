// FIXME: Check error
export function seriesSum(value) {
  let sum = 1;
  if (!typeof (value) == Number || value <= 0 || !Number.isInteger(value)) {
    console.log('unvalid entry');
  } else if (value == 1) {
    return value.toFixed(2);
  } else {
    for (let i = 1; i < value; i++) {
      let k = 1+3*i;
      sum = sum + 1/k;
    }
    return sum.toFixed(2);
  }
}