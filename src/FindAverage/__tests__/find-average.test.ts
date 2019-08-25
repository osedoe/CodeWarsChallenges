import { findAverage } from '../find-average';

describe("Find Average Number", () => {
    it("should return the average number, 1 in this case", () => {
        expect(findAverage([1, 1, 1])).toEqual(1);
    });
    it("should return the average number, 2 in this case", () => {
        expect(findAverage([1, 2, 3])).toEqual(2);
    });
});