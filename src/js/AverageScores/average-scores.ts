export function average(scores) {
    const sum = scores.reduce((accumulator, currentValue) => accumulator + currentValue);
    return Math.round(sum/scores.length);
}