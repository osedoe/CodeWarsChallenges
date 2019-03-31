export function squareSum(num) {
    return num
        .map(el => el * el)
        .reduce((acc, val) => acc + val);
}