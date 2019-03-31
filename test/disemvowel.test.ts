import { disemvowel } from "../src/DisemvowelTrolls/disemvowel";

describe("Disemvowel Trolls", () => {
    it("should return the string without vowels 'Ths wbst s fr lsrs LL!' ", () => {
        const result = "Ths wbst s fr lsrs LL!";
        expect(disemvowel("This website is for losers LOL!")).toEqual(result);
    });
    it("should return 'Vv l vd lc!", () => {
        const result = "Vv l vd lc!";
        expect(disemvowel("Viva la vida loca!")).toEqual(result);
    });
});