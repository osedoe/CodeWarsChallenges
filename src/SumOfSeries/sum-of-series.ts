export function seriesSum(value: number) {
  let sum = 1;
  if (value === 1) {
    return value.toFixed(1);
  }
  for (let i = 1; i < value; i++) {
    let k = 1 + 3 * i;
    sum = sum + 1 / k;
  }
  return sum.toFixed(2);
}