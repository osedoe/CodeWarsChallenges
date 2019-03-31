import { sortByLength } from "../src/SortArrayByStringLength/sort-array-by-string-length";

describe("Sort Arrays by String Length", () => {
    describe("should return the same array passed as a parameter but ordered from shortest to longest", () => {
        it("should return the array ['Telescopes', 'Glasses', 'Eyes', 'Monocles'], ordered as ['Eyes', 'Glasses', 'Monocles', 'Telescopes']", () => {
            const result = ["Eyes", "Glasses", "Monocles", "Telescopes"];
            expect(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])).toEqual(result);
        });
        it("should return the array ['Beg', 'Life', 'I', 'To'], ordered as ['I', 'To', 'Beg', 'Life']", () => {
            const result = ["I", "To", "Beg", "Life"];
            expect(sortByLength(["Beg", "Life", "I", "To"])).toEqual(result);
        });
        it("should return the array ['', 'Moderately', 'Brains', 'Pizza'], ordered as ['', 'Pizza', 'Brains', 'Moderately']", () => {
            const result = ["", "Pizza", "Brains", "Moderately"];
            expect(sortByLength(["", "Moderately", "Brains", "Pizza"])).toEqual(result);
        });
        it("should return the array ['Longer', 'Longest', 'Short'], ordered as ['Short', 'Longer', 'Longest'] ", () => {
            const result = ["Short", "Longer", "Longest"];
            expect(sortByLength(["Longer", "Longest", "Short"])).toEqual(result);
        });
    });
});