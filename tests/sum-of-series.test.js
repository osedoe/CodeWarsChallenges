const seriesSum = require("../src/_SumOfSeries/sum-of-series");

describe("Sum of Series", () => {
	describe("should return the sum of a series up to nth-term", () => {
		it("should return 1.00 for n = 1", () => {
			expect(seriesSum(1)).toEqual(1.0);
		});
		it("should return 1.25 for n = 2", () => {
			expect(seriesSum(2)).toEqual(1.25);
		});
		it("should return 1.39 for n = 3", () => {
			expect(seriesSum(3)).toEqual(1.39);
		});
		it("should return 1.49 for n = 4", () => {
			expect(seriesSum(4)).toEqual(1.49);
		});
	});
});