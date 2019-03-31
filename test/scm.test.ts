// smallestCommonsMultiple([1, 5]) should return a number.
// smallestCommonsMultiple([1, 5]) should return 60.
// smallestCommonsMultiple([5, 1]) should return 60.
// smallestCommonsMultiple([2, 10]) should return 2520.
// smallestCommonsMultiple([1, 13]) should return 360360.
// smallestCommonsMultiple([23, 18]) should return 6056820.
import { smallestCommonMultiple } from "../src/SmallestCommonMultiple/scm";

describe.skip('Smallest Common Multiple', () => {
    describe('it should find the S.C.M. of the provided parameters', () => {
        it('should return a type: number', () => {
            expect(typeof smallestCommonMultiple([1, 5])).toBe('number');;
        });
        it('should return 60', () => {
            expect(smallestCommonMultiple([1, 5])).toEqual(60);
        });
        it('should return 60', () => {
            expect(smallestCommonMultiple([5, 1])).toEqual(60);
        });
        it('should return 2520', () => {
            expect(smallestCommonMultiple([2, 10])).toEqual(2520);
        });
        it('should return 360360', () => {
            expect(smallestCommonMultiple([1, 13])).toEqual(360360);
        });
        it('should return 6056820', () => {
            expect(smallestCommonMultiple([23, 18])).toEqual(6056820);
        });
    });
});