import { uniqueNumbers } from "../src/UniqueNumbers/unique-numbers";

describe("Unique Numbers", () => {
	describe("should remove the duplicates in an array", () => {
		it("should return [1, 2] for the array [1, 1, 2, 2]", () => {
			expect(uniqueNumbers([1, 1, 2, 2])).toEqual([1, 2]);
		});
		it("should return [1, 2, 3] for the array [1, 2, 2, 3, 3, 3]", () => {
			expect(uniqueNumbers([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
		});
	});
});
