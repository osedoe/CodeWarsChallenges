// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.

import { sumPrimes } from "../src/SumAllPrimes/sum-all-primes";

describe.skip('Sum all primes', () => {
    describe('it should sum all the prime numbers up to the provided number and return the result', () => {
        it('should return a type: number', () => {
            expect(typeof sumPrimes(10)).toBe(number);
        });
        it('should return 17', () => {
            expect(sumPrimes(10)).toEqual(17);
        });
        it('should return 73156', () => {
            expect(sumPrimes(977)).toEqual(73156);
        });
    });
});