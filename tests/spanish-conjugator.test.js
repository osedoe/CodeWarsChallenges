const spanishConjugator = require('../src/SpanishConjugator/spanish-conjugator');

describe("Spanish Conjugator", () => {
    describe("should return an object with a spanish verb conjugated in its present indicative form. The object will have a key named after the invinitive with a value of an array with the actual verb conjugated", () => {
        it("should return the verb Caminar", () => {
            const result = {
                "caminar": [
                    "camino",
                    "caminas",
                    "camina",
                    "caminamos",
                    "camináis",
                    "caminan"
                ]
            };
            expect(spanishConjugator("caminar")).toEqual(result);
        });
        it("should return the verb Comer", () => {
            const result = {
                "comer": [
                    "como",
                    "comes",
                    "come",
                    "comemos",
                    "coméis",
                    "comen"
                ]
            };
            expect(spanishConjugator("comer")).toEqual(result);
        });
        it("should return the verb Vivir", () => {
            const result = {
                "vivir": [
                    "vivo",
                    "vives",
                    "vive",
                    "vivimos",
                    "vivís",
                    "viven"
                ]
            };
            expect(spanishConjugator("vivir")).toEqual(result);
        });
    });
});