// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.
import { sumFibs } from "../src/SumAllOddFibonacciNumbers/sum-all-odd-fibonacci";

describe('Sum all odd fibonacci numbers', () => {
    describe('it should return the sum of all odd Fibonacci numbers that are less than or equal to the passed number', () => {
        it('should return a type: number', () => {
            expect(typeof sumFibs(1)).toBe('number');
        });
        it('should return 1785', () => {
            expect(sumFibs(1000)).toEqual(1785);
        });
        it('should return 4613732', () => {
            expect(sumFibs(4000000)).toEqual(4613732);
        });
        it('should return 5', () => {
            expect(sumFibs(4)).toEqual(5);
        });
        it('should return 60696', () => {
            expect(sumFibs(75024)).toEqual(60696);
        });
        it('should return 135721', () => {
            expect(sumFibs(75025)).toEqual(135721);
        });
    });
});