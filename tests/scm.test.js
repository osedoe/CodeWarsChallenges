// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.

const smallestCommons = require('../src/_SmallestCommonMultiple/scm');

describe.skip('Smallest Common Multiple', () => {
    describe('it should find the S.C.M. of the provided parameters', () => {
        it('should return a type: number', () => {
            expect(typeof smallestCommons([1, 5])).toBe('number');;
        });
        it('should return 60', () => {
            expect(smallestCommons([1, 5])).toEqual(60);
        });
        it('should return 60', () => {
            expect(smallestCommons([5, 1])).toEqual(60);
        });
        it('should return 2520', () => {
            expect(smallestCommons([2, 10])).toEqual(2520);
        });
        it('should return 360360', () => {
            expect(smallestCommons([1, 13])).toEqual(360360);
        });
        it('should return 6056820', () => {
            expect(smallestCommons([23, 18])).toEqual(6056820);
        });
    });
});