import { average } from '../average-scores';

describe("Average Scores", () => {
    describe("should return the average of an array of numbers, rounded to the nearest whole number", () => {
        it("sould return 73 the array [49, 3, 5, 300, 7]", () => {
            const arrayOfScores = [49, 3, 5, 300, 7];
            expect(average(arrayOfScores)).toEqual(73);
        });
        it("should return 94 the array [90, 98, 89, 100, 100, 86, 94]", () => {
            const arrayOfScores = [90, 98, 89, 100, 100, 86, 94];
            expect(average(arrayOfScores)).toEqual(94);
        });
    });
});