import { bump } from '../bumps-in-the-road';

describe("Bumps in the Road", () => {
    describe("should return 'Woohoo!' or 'Car Dead', depending of the amount of bumps", () => {
        it("should return 'Woohoo!', since bumps <= 15", () => {
            const result = "Woohoo!";
            expect(bump("n")).toEqual(result);
        });
        it("should return 'Car Dead', since bumps > 15", () => {
            const result = "Car Dead";
            expect(bump("_nnnnnnn_n__n______nn__nn_nnn")).toEqual(result);
        });
        it("should return 'Woohoo!', since bumps <= 15", () => {
            const result = "Woohoo!";
            expect(bump("______n___n_")).toEqual(result);
        });
    });
});