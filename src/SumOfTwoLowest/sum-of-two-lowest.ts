export function sumTwoLowest (nums) {
    const newArr = nums.sort((a, b) => a - b); // Ascendant order
    return newArr[0] + newArr[1];
}