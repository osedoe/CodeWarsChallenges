const scrollingText = require('../src/ScrollingText/scrolling-text');

describe("Scrolling Text", () => {
    it("should iterate over the string, one letter at a time", () => {
        const result = ['CODEWARS',
                        'ODEWARSC',
                        'DEWARSCO',
                        'EWARSCOD',
                        'WARSCODE',
                        'ARSCODEW',
                        'RSCODEWA',
                        'SCODEWAR'];
        expect(scrollingText("CODEWARS")).toEqual(result);
    });
});