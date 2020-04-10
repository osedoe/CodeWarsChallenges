import { breakCamelCase } from '../break-camelcase';

describe("Break camelCase", () => {
	describe("should return a tring breaking up the camel casing with spaces", () => {
		it("should return 'camel Casing'", () => {
			expect(breakCamelCase("camelCasing")).toEqual("camel Casing");
		});
		it("should return 'hidratate Cada Dia', from 'hidratateCadaDia'", () => {
			expect(breakCamelCase("hidratateCadaDia")).toEqual(
				"hidratate Cada Dia"
			);
		});
		it("should return 'fucking Bloody Tests', from 'fuckingBloodyTests", () => {
			expect(breakCamelCase("fuckingBloodyTests")).toEqual(
				"fucking Bloody Tests"
			);
		});
	});
});
