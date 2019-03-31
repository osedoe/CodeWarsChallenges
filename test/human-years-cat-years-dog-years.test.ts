import { hycydy, hycydy2 } from "../src/HumanYearsCatYearsDogYears/human-years-cat-years-dog-years";

describe("Human Years, Cat Years and Dog Years", () => {
    describe("1st version", () => {
        it("should return an array with human years, cat years and dog years", () => {
            let result = [1, 15, 15];
            expect(hycydy(1)).toEqual(result);
        });
        it("should return an array with human years, cat years and dog years", () => {
            const result = [2, 24, 24];
            expect(hycydy(2)).toEqual(result);
        });
        it("should return an array with human years, cat years and dog years", () => {
            const result = [10, 56, 64];
            expect(hycydy(10)).toEqual(result);
        });
    });
    describe("2nd version", () => {
        it("should return an array with human years, cat years and dog years", () => {
            let result = [1, 15, 15];
            expect(hycydy2(1)).toEqual(result);
        });
        it("should return an array with human years, cat years and dog years", () => {
            const result = [2, 24, 24];
            expect(hycydy2(2)).toEqual(result);
        });
        it("should return an array with human years, cat years and dog years", () => {
            const result = [10, 56, 64];
            expect(hycydy2(10)).toEqual(result);
        });
    });
});