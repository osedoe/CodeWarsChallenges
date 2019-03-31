// Test.describe("FindEvenIndex", function () {
//     Test.it("Tests", function () {
//         Test.assertEquals(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, "The array was: [1,2,3,4,3,2,1] \n");
//         Test.assertEquals(findEvenIndex([1, 100, 50, -51, 1, 1]), 1, "The array was: [1,100,50,-51,1,1] \n");
//         Test.assertEquals(findEvenIndex([1, 2, 3, 4, 5, 6]), -1, "The array was: [1,2,3,4,5,6] \n");
//         Test.assertEquals(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3, "The array was: [20,10,30,10,10,15,35] \n");
//     });
// });

import { findEvenIndex } from "../src/_EqualSidesOfAnArray/equal-sides-of-array";

describe.skip('Find Even Index', () => {
    describe('it should return the lowest index N where the side to the left of N is equal to the side to the right of N. Else, return -1.', () => {
        it('should return 3 for the given array', () => {
            expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toEqual(3);
        });
        it('should return 1 for the given array', () => {
            expect(findEvenIndex([1, 100, 50, -51, 1, 1])).toEqual(1);
        });
        it('should return -1 for the given array', () => {
            expect(findEvenIndex([1, 2, 3, 4, 5, 6])).toEqual(-1);
        });
        it('should return 3 for the given array', () => {
            expect(findEvenIndex([20, 10, 30, 10, 10, 15, 35])).toEqual(3);
        });
    });
});