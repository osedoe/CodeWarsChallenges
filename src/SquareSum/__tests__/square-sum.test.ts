import { squareSum } from '../square-sum';

describe("Square Sum", () => {
    describe("given an array, calculate the square of each element and sum the result", () => {
        it("should return 9 for [1, 2, 2]", () => {
            expect(squareSum([1, 2, 2])).toEqual(9);
        });
        it("should return 22 for [2, 3, 3]", () => {
            expect(squareSum([2, 3, 3])).toEqual(22);
        });
    });
});