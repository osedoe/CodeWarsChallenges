// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]

const uniteUnique = require('../src/_SortedUnion/sorted-union');

describes.skip('Sorted Union', () => {
    describe('write a function that takes a few arrays and returns a new one with the unique values in order', () => {
        it ('should return [1, 3, 2, 5, 4] for the arrays [1, 3, 2], [5, 2, 1, 4] and [2, 1]', () => {
            const result = [1, 3, 2, 5, 4];
            expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual(result);
        });
        it ('[1, 3, 2], [1, [5]], [2, [4]] should return [1, 3, 2, [5], [4]]', () => {
            const result = [1, 3, 2, [5], [4]];
            expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).toEqual(result);
        });
        it ('[1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5]', () => {
            const result = [1, 2, 3, 5];
            expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual(result);
        });
        it ('[1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]', () => {
            const result = [1, 2, 3, 5, 4, 6, 7, 8];
            expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual(result);
        });
    });
});