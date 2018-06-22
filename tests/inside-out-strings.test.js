const insideOut = require("../src/InsideOutStrings/inside-out-strings");

describe.skip("Inside Out", () => {
	describe("should turn each word of the given string 'inside out', moving the internal letters out and the extarnal to the centre", () => {
		it("should return 'man i ende a atix up to budu', for the string 'man i need a taxi up to ubud'", () => {
			const str = "man i need a taxi up to ubud",
				result = "man i ende a atix up to budu";
			expect(insideOut(str)).toEqual(result);
		});
		it("should return 'hwta item are we milcgnib up the lovcona', for the string 'what time are we climbing up the volcano'", () => {
			const str = "what time are we climbing up the volcano",
				result = "hwta item are we milcgnib up the lovcona";
			expect(insideOut(str)).toEqual(result);
		});
		it("should return 'atek me to mesykan', for the string 'take me to semynak'", () => {
			const str = "take me to semynak",
				result = "atek me to mesykan";
			expect(insideOut(str)).toEqual(result);
		});
	});
});
