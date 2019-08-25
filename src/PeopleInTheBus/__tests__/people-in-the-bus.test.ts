import { peopleInTheBus } from '../people-in-the-bus';

describe("People in the Bus", () => {
    describe("given an array of tuples, where each tuple represents a stop where the first number is the amount of people that gets in the bus and the second the ones who leave, should return how many people are left in the bus after it has gone through all the stops", () => {
        it("should return 5 for the stops [10,0], [3,5], [5,8]", () => {
            expect(peopleInTheBus([ [10,0], [3,5], [5,8] ])).toEqual(5);
        });
        it("should return 17 for the stops [3,0], [9,1], [4,10], [12,2], [6,1], [7,10]", () => {
            expect(peopleInTheBus([ [3,0], [9,1], [4,10], [12,2], [6,1], [7,10] ])).toEqual(17);
        });
        it("should return 21 for the stops [3,0], [9,1], [4,8], [12,2], [6,1], [7,8]", () => {
            expect(peopleInTheBus([ [3,0], [9,1], [4,8], [12,2], [6,1], [7,8] ])).toEqual(21);
        });
    });
});