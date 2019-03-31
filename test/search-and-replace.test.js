const myReplace = require('../src/SearchAndReplace/search-and-replace');

describe('Search and Replace', () => {
    describe('Perform a search and replace on a given sentence (first argument) and return a new sentence where a certain word (second argument) is replaced by other (third argument)', () => {
        it('"Let us go to the store", "store" and "mall" should return "Let us go to the mall"', () => {
            expect(myReplace('Let us go to the store', 'store', 'mall')).toEqual('Let us go to the mall');
        });
        it('"He is Sleeping on the couch", "Sleeping", "sitting" should return "He is Sitting on the couch"', () => {
            expect(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')).toEqual('He is Sitting on the couch');
        }); 
        it('"This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error"', () => {
            expect(myReplace('This has a spellngi error', 'spellngi', 'spelling')).toEqual('This has a spelling error');
        });
        it('"His name is Tom", "Tom", "john") should return "His name is John"', () => {
            expect(myReplace('His name is Tom', 'Tom', 'John')).toEqual('His name is John');
        });
        it('"Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms"', () => {
            expect(myReplace('Let us get back to more Coding', 'Coding', 'algorithms')).toEqual('Let us get back to more Algorithms');
        });
        it('"A quick brown fox jumped over the lazy dog", "jumped", "leaped" should return "A quick brown fox leaped over the lazy dog"', () => {
            expect(myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')).toEqual('A quick brown fox leaped over the lazy dog');
        });
    });
});