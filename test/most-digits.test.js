const mostDigits = require('../src/MostDigits/most-digits');

describe("Most Digits", () => {
    describe("should return the largest number in the given array, if there's a duplicate, return the first occurence", () => {
        it("[1, 10, 100] should return 100", () => {
            const result = 100;
            expect(mostDigits.findLongest([1, 10, 100])).toEqual(result);
        });
        it("[9000, 8, 800] should return 9000", () => {
            const result = 9000;
            expect(mostDigits.findLongest([9000, 8, 800])).toEqual(result);
        });
        it("[8, 900, 500] should return 900", () => {
            const result = 900;
            expect(mostDigits.findLongest([8, 900, 900])).toEqual(result);
        });
        it("[1, 10, 100] should return 100", () => {
            const result = 100;
            expect(mostDigits.findLongest2([1, 10, 100])).toEqual(result);
        });
        it("[9000, 8, 800] should return 9000", () => {
            const result = 9000;
            expect(mostDigits.findLongest2([9000, 8, 800])).toEqual(result);
        });
        it("[8, 900, 900] should return 900", () => {
            const result = 900;
            expect(mostDigits.findLongest2([8, 900, 900])).toEqual(result);
        });
    });
});