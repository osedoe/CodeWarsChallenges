// Ussually, [ const assert = require('assert'); ]
// But we'll use Mocha with Chai, so:
const assert = require('chai').assert;
// we can use SHOULD and EXPECT from Chai, as well
// More info on www.chaijs.com

// We're gonna import each challenge now
const adjacentelementsproduct = require('../src/AdjacentElementsProduct/adjacentproduct');
const arithmetic = require('../src/Arithmetics/arithmetic');
const disemvowel = require('../src/DisemvowelTrolls/disemvowel');

/*
describe('Title', function() {
    describe('general description', function() {
        it('specific test description', function () {
            assert.equal( action(param), result);
        });
    });
});
*/


describe('Adjacent Elements Product', () => {
    it('should find the pair of adjacent elements that has the largest product and return it', () => {
        assert.equal(adjacentelementsproduct([3, 6, -2, -5, 7, 3]), 21);
    });
});

describe('Arithmetics', () => {
    describe('should return the result of the operation with two numbers using the operator indicated', () => {
        it('should sum the two passed parameters', () => {
            const result = 7;
            assert.equal(arithmetic(5,2, 'add'), result);
        });
        it('should substract the two passed parameters', () => {
            const result = 3;
            assert.equal(arithmetic(5,2, 'subtract'), result);
        });
        it('should multiply the two passed parameters', () => {
            const result = 10;
            assert.equal(arithmetic(5,2, 'multiply'), result);
        });
    });
});

describe('Disemvowel Trolls', () => {
    it('should return the string without vowels', () => {
        assert.equal(disemvowel('This website is for losers LOL!'), 'Ths wbst s fr lsrs LL!');
    });
});

