const uniqueInOrder = require("../src/UniqueInOrder/unique-in-order");

describe("Unique in Numbers", () => {
    describe("should remove duplicates and preserve the order", () => {
        it("the String 'AAAABBBCCDAABBB' should return ['A', 'B', 'C', 'D', 'A', 'B']", () => {
            expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
        });
        it("the String 'ABBCcAD' should return ['A', 'B', 'C', 'c', 'A', 'D']", () => {
            expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
        });
        it("the array [1,2,2,3,3] should return [1,2,3]", () => {
            expect(uniqueInOrder([1,2,2,3,3])).toEqual([1,2,3]);
        });
    });
});