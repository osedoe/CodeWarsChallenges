import { roundToNext5 } from '../round-to-multiple-of-five';

describe.skip("Round to Multiple of Five", () => {
    describe("Given a number 'n', it should return its multiple of five", () => {
        it("should return 0 for n = 0", () => {
            expect(roundToNext5(0)).toEqual(0);
        });
        it("should return 5 for n = 1", () => {
            expect(roundToNext5(1)).toEqual(5);
        });
        it("should return 5 for n = 3", () => {
            expect(roundToNext5(3)).toEqual(5);
        });
        it("should return 5 for n = 5", () => {
            expect(roundToNext5(5)).toEqual(5);
        });
        it("should return 10 for n = 7", () => {
            expect(roundToNext5(7)).toEqual(10);
        });
        it("should return 40 for n = 39", () => {
            expect(roundToNext5(40)).toEqual(39);
        });
    });
});