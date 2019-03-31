export function hycydy(human) {
    let humanYears,
        catYears,
        dogYears;
    if (human === 1) {
        humanYears = human;
        catYears = 15;
        dogYears = 15;
    } else if (human === 2) {
        humanYears = human;
        catYears = 15 + 9;
        dogYears = 15 + 9;
    } else if (human > 2) {
        humanYears = human;
        catYears = 24 + (4 * (human - 2));
        dogYears = 24 + (5 * (human - 2));
    }
    const arr = [humanYears, catYears, dogYears];
    return arr;
}

// Second attemp:
// Execution time went down from 1600ms to 300ms.
export function hycydy2(h) {
    if (h === 1) return [1, 15, 15];
    else if (h === 2) return [2, 24, 24];
    else return [h, (h - 2) * 4 + 24, (h - 2) * 5 + 24];
}