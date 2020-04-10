import { dropElements } from '../drop-it';

// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
// dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].


describe.skip('Drop it', () => {
    describe('It should iterate through an array and remove each element up to the function indicated. It should return the rest of the array after that.', () => {
        it('should return [3, 4]', ()=> {
            expect(dropElements([1, 2, 3, 4], n => n >=3)).toEqual([3, 4]);
        });
        it('should return [1, 0, 1]', () => {
            expect(dropElements([0, 1, 0, 1], n => n === 1)).toEqual([1, 0, 1]);
        });
        it('should return [1, 2, 3]', () => {
            expect(dropElements([1, 2, 3], n => n > 0)).toEqual([1, 2, 3]);
        });
        it('should return []', () => {
            expect(dropElements([1, 2, 3, 4], n => n > 5)).toEqual([]);
        });
        it('should return [7, 4]', () => {
            expect(dropElements([1, 2, 3, 7, 4], n => n > 3)).toEqual([7, 4]);
        });
        it('should return [3, 9, 2]', () => {
            expect(dropElements([1, 2, 3, 9, 2], n => n > 2)).toEqual([3, 9, 2]);
        });
    });
});