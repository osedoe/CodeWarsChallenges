// Ussually, [ const assert = require('assert'); ]
// But we'll use Mocha with Chai, so:
const assert = require('chai').assert;
// we can use SHOULD and EXPECT from Chai, as well
// For more info, read the Test.Readme.md

// We're gonna import each challenge now
const adjacentelementsproduct = require('../src/AdjacentElementsProduct/adjacentproduct');
const arithmetic = require('../src/Arithmetics/arithmetic');
const bump = require('../src/BumpsInTheRoad/bumpsintheroad');
const hycydy = require('../src/CatYearsDogYears/hycydy');
const hycydy2 = require('../src/CatYearsDogYears/hycydy2');
const disemvowel = require('../src/DisemvowelTrolls/disemvowel');
const findAverage = require('../src/FindAverage/findaverage');


// Test Cases
describe('Adjacent Elements Product', () => {
    it('should find the pair of adjacent elements that has the largest product and return it', () => {
        const result = 21;
        assert.equal(adjacentelementsproduct([3, 6, -2, -5, 7, 3]), result);
    });
});

describe('Arithmetics', () => {
    describe('should return the result of the operation with two numbers using the operator indicated', () => {
        it('should sum the two passed parameters', () => {
            const result = 7;
            assert.equal(arithmetic(5, 2, 'add'), result);
        });
        it('should substract the two passed parameters', () => {
            const result = 3;
            assert.equal(arithmetic(5, 2, 'subtract'), result);
        });
        it('should multiply the two passed parameters', () => {
            const result = 10;
            assert.equal(arithmetic(5, 2, 'multiply'), result);
        });
        it('should divide the two passed parameters', () => {
            const result = 2.5;
            assert.equal(arithmetic(5, 2, 'divide'), result);
        });
    });
});

describe('Bumps in the Road', () => {
    describe('should return "Woohoo!" or "Car Dead", depending of the amount of bumps', () => {
        it('should return "Woohoo!", since bumps <= 15', () => {
            const result = 'Woohoo!';
            assert.equal(bump('n'), result);
        });
        it('should return "Car Dead", since bumps > 15', () => {
            const result = "Car Dead";
            assert.equal(bump('_nnnnnnn_n__n______nn__nn_nnn'), result);
        });
        it('should return "Woohoo!", since bumps <= 15', () => {
            const result = 'Woohoo!';
            assert.equal(bump('______n___n_'), result);
        });
    });
});

describe('Human Years, Cat Years and Dog Years', () => {
    describe('first version', () => {
        it('should return an array with human years, cat years and dog years', () => {
            let result = [1, 15, 15];
            assert.equal(hycydy(1), result);
        });
        it('should return an array with human years, cat years and dog years', () => {
            const result = [2, 24, 24];
            assert.equal(hycydy(2), result);
        });
        it('should return an array with human years, cat years and dog years', () => {
            const result = [10, 56, 64];
            assert.equal(hycydy(10), result);
        });
    });
    describe('second version', () => {
        it('should return an array with human years, cat years and dog years', () => {
            let result = [1, 15, 15];
            assert.equal(hycydy2(1), result);
        });
        it('should return an array with human years, cat years and dog years', () => {
            const result = [2, 24, 24];
            assert.equal(hycydy2(2), result);
        });
        it('should return an array with human years, cat years and dog years', () => {
            const result = [10, 56, 64];
            assert.equal(hycydy2(10), result);
        });
    });
});

describe("Average Number", () => {
    it("should return the average number, 1 in this case", () => {
        assert.equal(find_average([1,1,1]), 1);
    });
    it('should return the average number, 2 in this case', () => {
        assert.equal(find_average([1,2,3]), 2);
    });
});

describe('Disemvowel Trolls', () => {
    it('should return the string without vowels', () => {
        const result = 'Ths wbst s fr lsrs LL!';
        assert.equal(disemvowel('This website is for losers LOL!'), result);
    });
});