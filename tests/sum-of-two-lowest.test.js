const sumTwoLowest = require("../src/SumOfTwoLowest/sum-of-two-lowest");

describe("Sum of the Two Lowest", () => {
	describe("should return the sum of the two lowest numbers in a given array", () => {
		it("should return 7 for the array [19, 5, 42, ,2, 77]", () => {
			expect(sumTwoLowest([19, 5, 42, 2, 77])).toEqual(7);
		});
		it("should return 13 for the array [5, 8, 12, 19, 22]", () => {
			expect(sumTwoLowest([5, 8, 12, 19, 22])).toEqual(13);
		});
	});
});
