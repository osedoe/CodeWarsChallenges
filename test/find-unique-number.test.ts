import { findUnique } from "../src/FindUniqueNumber/find-unique";

describe("Find Unique Number", () => {
    describe("should find the number in the given array that is not repeated", () => {
        it("should return 1 in [0, 1, 0]", () => {
            expect(findUnique([0, 1, 0])).toEqual(1);
        });
        it("should return 2 in [1, 1, 1, 2, 1, 1]", () => {
            expect(findUnique([1, 1, 1, 2, 1, 1])).toEqual(2);
        });
        it("should return 10 in [3, 10, 3, 3, 3]", () => {
            expect(findUnique([3, 10, 3, 3, 3])).toEqual(10);
        });
    });
});