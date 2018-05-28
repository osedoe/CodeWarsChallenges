// Ussually, [ const assert = require("assert"); ]
// But we"ll use Mocha with Chai, so:
const assert = require("chai").assert;
const expect = require("chai").expect;
// we can use SHOULD and EXPECT from Chai, as well
// For more info, read the Test.Readme.md

// We"re gonna import each challenge now
const adjacentelementsproduct = require("../src/AdjacentElementsProduct/adjacentproduct");
const arithmetic = require("../src/Arithmetics/arithmetic");
const bump = require("../src/BumpsInTheRoad/bumpsintheroad");
const hycydy = require("../src/CatYearsDogYears/hycydy");
const hycydy2 = require("../src/CatYearsDogYears/hycydy2");
const disemvowel = require("../src/DisemvowelTrolls/disemvowel");
const findAverage = require("../src/FindAverage/findaverage");
const findunique = require("../src/FindUniqueNumber/findunique");
const mergeTwoArrays = require("../src/MergeTwoArrays/mergearrs.js");
const mostDigits = require("../src/MostDigits/mostdigits");
const palindrome = require("../src/Palindrome/palindrome");
const peopleInTheBus = require("../src/PeopleInTheBus/bus");
const removeExclamationMarks = require("../src/RemoveExclamationMarks/removeExclamation");
const scrollingText = require("../src/ScrollingText/scroll");
const sortByLength = require("../src/SortArrayByStringLength/sortarrays");
const spanishConjugator = require("../src/SpanishConjugator/spanishconjugator2");
const squareSum = require("../src/SquareSum/squaresum");

// Test Cases
describe("Adjacent Elements Product", () => {
    it("should find the pair of adjacent elements that has the largest product and return it", () => {
        const result = 21;
        assert.equal(adjacentelementsproduct([3, 6, -2, -5, 7, 3]), result);
    });
});

describe("Arithmetics", () => {
    describe("should return the result of the operation with two numbers using the operator indicated", () => {
        it("should sum the two passed parameters", () => {
            const result = 7;
            assert.equal(arithmetic(5, 2, "add"), result);
        });
        it("should substract the two passed parameters", () => {
            const result = 3;
            assert.equal(arithmetic(5, 2, "subtract"), result);
        });
        it("should multiply the two passed parameters", () => {
            const result = 10;
            assert.equal(arithmetic(5, 2, "multiply"), result);
        });
        it("should divide the two passed parameters", () => {
            const result = 2.5;
            assert.equal(arithmetic(5, 2, "divide"), result);
        });
    });
});

describe("Bumps in the Road", () => {
    describe("should return 'Woohoo!' or 'Car Dead', depending of the amount of bumps", () => {
        it("should return 'Woohoo!', since bumps <= 15", () => {
            const result = "Woohoo!";
            assert.equal(bump("n"), result);
        });
        it("should return 'Car Dead', since bumps > 15", () => {
            const result = "Car Dead";
            assert.equal(bump("_nnnnnnn_n__n______nn__nn_nnn"), result);
        });
        it("should return 'Woohoo!', since bumps <= 15", () => {
            const result = "Woohoo!";
            assert.equal(bump("______n___n_"), result);
        });
    });
});

describe("Human Years, Cat Years and Dog Years", () => {
    describe("first version", () => {
        it("should return an array with human years, cat years and dog years", () => {
            let result = [1, 15, 15];
            assert.deepEqual(hycydy(1), result);
        });
        it("should return an array with human years, cat years and dog years", () => {
            const result = [2, 24, 24];
            assert.deepEqual(hycydy(2), result);
        });
        it("should return an array with human years, cat years and dog years", () => {
            const result = [10, 56, 64];
            assert.deepEqual(hycydy(10), result);
        });
    });
    describe("second version", () => {
        it("should return an array with human years, cat years and dog years", () => {
            let result = [1, 15, 15];
            assert.deepEqual(hycydy2(1), result);
        });
        it("should return an array with human years, cat years and dog years", () => {
            const result = [2, 24, 24];
            assert.deepEqual(hycydy2(2), result);
        });
        it("should return an array with human years, cat years and dog years", () => {
            const result = [10, 56, 64];
            assert.deepEqual(hycydy2(10), result);
        });
    });
});

describe("Disemvowel Trolls", () => {
    it("should return the string without vowels", () => {
        const result = "Ths wbst s fr lsrs LL!";
        assert.equal(disemvowel("This website is for losers LOL!"), result);
    });
});

describe("Find Average Number", () => {
    it("should return the average number, 1 in this case", () => {
        assert.equal(find_average([1, 1, 1]), 1);
    });
    it("should return the average number, 2 in this case", () => {
        assert.equal(find_average([1, 2, 3]), 2);
    });
});

describe("Find Unique Number", () => {
    describe("should find the number in the given array that is not repeated", () => {
        it("should return 1", () => {
            assert.equal(findunique([0, 1, 0]), 1);
        });
        it("should return 2", () => {
            assert.equal(findunique([1, 1, 1, 2, 1, 1]), 2);
        });
        it("should return 10", () => {
            assert.equal(findunique([3, 10, 3, 3, 3]), 10);
        });
    });
});

describe("Merge Two Arrays", () => {
    it("should return the merge of two arrays, removing duplicates and sorting it in ascending order", () => {
        const result = [1, 2, 3, 4, 5, 6, 7, 8];
        const arr1 = [1, 2, 3, 4];
        const arr2 = [5, 6, 7, 8];
        // Using equal will not pass the test since they are two different arrays
        // So, we'll use deepEqual for comparing the elements of an array or an object
        assert.deepEqual(mergeTwoArrays(arr1, arr2), result);
        // We're introducing typeOf to check the data-type as well
        assert.typeOf(mergeTwoArrays(arr1, arr2), "array");
        assert.typeOf(mergeTwoArrays(arr1, arr2), "array");
    });
    it("should return the merge of two arrays, removing duplicates and sorting it in ascending order", () => {
        const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const arr1 = [1, 3, 5, 7, 9];
        const arr2 = [10, 8, 6, 4, 2];
        assert.typeOf(mergeTwoArrays(arr1, arr2), "array");
        assert.deepEqual(mergeTwoArrays(arr1, arr2), result);
    });
    it("should return the merge of two arrays, removing duplicates and sorting it in ascending order", () => {
        let result = [1, 2, 3, 4, 5, 7, 9, 10, 11, 12];
        const arr1 = [1, 3, 5, 7, 9, 11, 12];
        const arr2 = [1, 2, 3, 4, 5, 10, 12];
        assert.typeOf(mergeTwoArrays(arr1, arr2), "array");
        assert.deepEqual(mergeTwoArrays(arr1, arr2), result);
    });
});

describe("Most Digits", () => {
    describe("should return the largest number in the given array, if there's a duplicate, return the first occurence", () => {
        it("[1, 10, 100] should return 100", () => {
            const result = 100;
            assert.equal(findLongest([1, 10, 100]), result);
        });
        it("[9000, 8, 800] should return 9000", () => {
            const result = 9000;
            assert.equal(findLongest([9000, 8, 800]), result);
        });
        it("[8, 900, 500] should return 900", () => {
            const result = 900;
            assert.equal(findLongest([8, 900, 900]), result);
        });
        it("[1, 10, 100] should return 100", () => {
            const result = 100;
            assert.equal(findLongest2([1, 10, 100]), result);
        });
        it("[9000, 8, 800] should return 9000", () => {
            const result = 9000;
            assert.equal(findLongest2([9000, 8, 800]), result);
        });
        it("[8, 900, 900] should return 900", () => {
            const result = 900;
            assert.equal(findLongest2([8, 900, 900]), result);
        });
    });
});

describe("Check Palindrome", () => {
    it("should return false", () => {
        assert.equal(checkPalindrome("abac"), false);
    });
    it("should return true", () => {
        assert.equal(checkPalindrome("aba"), true);
    });
    it("should return true", () => {
        assert.equal(checkPalindrome("abbcbba"), true);
    });
    it("should return false", () => {
        assert.equal(checkPalindrome("acddc"), false);
    });
});

describe("People in the Bus", () => {
    describe("given an array of tuples, where each tuple represents a stop where the first number is the amount of people that gets in the bus and the second the ones who leave, find how many people are left in the bus after it has gone through all the stops", () => {
        it("should return 5", () => {
            assert.equal(peopleInTheBus([ [10,0], [3,5], [5,8] ]), 5);
        });
        it("should return 17", () => {
            assert.equal(peopleInTheBus([ [3,0], [9,1], [4,10], [12,2], [6,1], [7,10] ]), 17);
        });
        it("should return 21", () => {
            assert.equal(peopleInTheBus([ [3,0], [9,1], [4,8], [12,2], [6,1], [7,8] ]), 21);
        });
    });
});

describe("Remove Exclamation Marks", () => {
    it("should remove all the occurences of '!'", () => {
        assert.equal(removeExclamationMarks("Hello World!"), "Hello World");
    });
    it("should remove all the occurences of '!'", () => {
        assert.equal(removeExclamationMarks("Hola Claudia...! Que tal estas!?"), "Hola Claudia... Que tal estas?");
    });
});

describe("Scrolling Text", () => {
    it("should iterate over the string", () => {
        const result = ['CODEWARS',
                        'ODEWARSC',
                        'DEWARSCO',
                        'EWARSCOD',
                        'WARSCODE',
                        'ARSCODEW',
                        'RSCODEWA',
                        'SCODEWAR'];
        assert.deepEqual(scrollingText("CODEWARS"), result);
    });
});

describe("Sort Arrays by String Length", () => {
    it("should return the same array passed as a parameter but ordered from shortest to longest", () => {
        const result = ["Eyes", "Glasses", "Monocles", "Telescopes"];
        assert.deepEqual(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]), result);
    });
    it("should return the same array passed as a parameter but ordered from shortest to longest", () => {
        const result = ["I", "To", "Beg", "Life"];
        assert.deepEqual(sortByLength(["Beg", "Life", "I", "To"]), result);
    });
    it("should return the same array passed as a parameter but ordered from shortest to longest", () => {
        const result = ["", "Pizza", "Brains", "Moderately"];
        assert.deepEqual(sortByLength(["", "Moderately", "Brains", "Pizza"]), result);
    });
    it("should return the same array passed as a parameter but ordered from shortest to longest", () => {
        const result = ["Short", "Longer", "Longest"];
        assert.deepEqual(sortByLength(["Longer", "Longest", "Short"]), result);
    });
});

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
            assert.deepEqual(spanishConjugator("caminar"), result);
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
            assert.deepEqual(spanishConjugator("comer"), result);
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
            assert.deepEqual(spanishConjugator("vivir"), result);
        });
    });
});

describe("Square Sum", () => {
    describe("Given an array, calculate the square of each element and sum the result", () => {
        it("should return 9", () => {
            assert.equal(squareSum([1, 2, 2]), 9);
        });
        it("should return 22", () => {
            assert.equal(squareSum([2, 3, 3]), 22);
        });
    });
});