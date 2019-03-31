const arithmetic = require('./../src/Arithmetics/arithmetic');

describe("Arithmetics", () => {
    describe("should return the result of the operation with two numbers using the operator indicated", () => {
        test("the sum of 5 and 2 should equal 7", () => {
            const result = 7;
            expect(arithmetic(5, 2, "add")).toEqual(result);
        });
        test("the substraction of 2 to 5 should equal 3", () => {
            const result = 3;
            expect(arithmetic(5, 2, "subtract")).toEqual(result);
        });
        test("the product of 5 and 2 should equal 10", () => {
            const result = 10;
            expect(arithmetic(5, 2, "multiply")).toEqual(result);
        });
        test("the division of 5 between 2 should equal 2.5", () => {
            const result = 2.5;
            expect(arithmetic(5, 2, "divide")).toEqual(result);
        });
    });
});