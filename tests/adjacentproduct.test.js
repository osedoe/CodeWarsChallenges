// import adjacentElementsProduct from './../src/AdjacentElementsProduct/adjacentproduct';
const adjacentElementsProduct = require('./../src/AdjacentElementsProduct/adjacentproduct');

describe("Adjacent Elements Product", () => {
    test("should find the pair of adjacent elements that has the largest product in the elements array [3, 6, -2, -5, 7, 3] and return: 7 * 3 = 21", () => {
        const result = 21,
            elements = [3, 6, -2, -5, 7, 3];
        expect(adjacentElementsProduct(elements)).toEqual(result);
    });
});