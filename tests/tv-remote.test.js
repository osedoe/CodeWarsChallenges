const tvRemote = require("../src/TV-Remote/tv-remote");

describe.skip("TV Remote", () => {
	describe("should return the number of button presses to write the given words based on the README table", () => {
		it("should return 36 for the word 'codewars'", () => {
			expect(tvRemote("codewars")).toEqual(36);
		});
		it("should return 16 for the word 'does'", () => {
			expect(tvRemote("does")).toEqual(16);
		});
		it("should return 23 for the word 'your'", () => {
			expect(tvRemote("your")).toEqual(23);
		});
		it("should return 33 for the word 'solution'", () => {
			expect(tvRemote("solution")).toEqual(33);
		});
		it("should return 20 for the word 'work'", () => {
			expect(tvRemote("work")).toEqual(20);
		});
		it("should return 12 for the word 'for'", () => {
			expect(tvRemote("fpr")).toEqual(12);
		});
		it("should return 27 for the word 'these'", () => {
			expect(tvRemote("these")).toEqual(27);
		});
		it("should return 25 for the word 'words'", () => {
			expect(tvRemote("words")).toEqual(25);
		});
	});
});
