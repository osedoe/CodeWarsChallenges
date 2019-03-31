const high = require('../src/HighestScoringWord/highest-scoring-word');

describe("Highest Scoring Word", () => {
    describe("should return the word with the highest score, or the first one if there's a match", () => {
        it("should return 'taxi' in 'man i need a taxi up to ubud'", () => {
            expect(high("man i need a taxi up to ubud")).toEqual("taxi");
        });
        it("should return 'volcano' in 'what time are we climbing up the volcano", () => {
            expect(high("what time are we climbing up the volcano")).toEqual("volcano");
        });
        it("should return 'semynak' in 'take me to semynak'", () => {
            expect(high("take me to semynak")).toEqual("semynak");
        });
    });
});