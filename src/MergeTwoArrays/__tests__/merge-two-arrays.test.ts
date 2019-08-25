import { mergeTwoArrays } from '../merge-two-arrays';

describe("Merge Two Arrays", () => {
    describe("should return the merge of two arrays, removing duplicates and sorting it in ascending order", () => {
        it("should return [1, 2, 3, 4, 5, 6] from the two arrays [1, 2, 3, 4] and [5, 6, 7, 8]", () => {
            const result = [1, 2, 3, 4, 5, 6, 7, 8];
            const arr1 = [1, 2, 3, 4];
            const arr2 = [5, 6, 7, 8];
            expect(mergeTwoArrays(arr1, arr2)).toEqual(result);
        });
        it("should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] from the two arrays [1, 3, 5, 7, 8] and [10, 8, 6, 4, 2]", () => {
            const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const arr1 = [1, 3, 5, 7, 9];
            const arr2 = [10, 8, 6, 4, 2];
            expect(mergeTwoArrays(arr1, arr2)).toEqual(result);
        });
        it("should return [1, 2, 3, 4, 5, 7, 9, 10, 11, 12] from the two arrays [1, 3, 5, 7, 9, 11, 12] and [1, 2, 3, 4, 5, 10, 12]", () => {
            let result = [1, 2, 3, 4, 5, 7, 9, 10, 11, 12];
            const arr1 = [1, 3, 5, 7, 9, 11, 12];
            const arr2 = [1, 2, 3, 4, 5, 10, 12];
            expect(mergeTwoArrays(arr1, arr2)).toEqual(result);
        });
    });
});