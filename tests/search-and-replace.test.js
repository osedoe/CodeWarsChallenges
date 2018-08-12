const myReplace = require('../src/SearchAndReplace/search-and-replace');

describe.skip('Search and Replace', () => {
    describe('Perform a search and replace on a given sentence (first argument) and return a new sentence where a certain word (second argument) is replaced by other (third argument)', () => {
        it('"Let us go to the store", "store" and "mall" should return "Let us go to the mall"', () => {
            expect(myReplace('Let us go to the store', 'store', 'mall')).toEqual('Let us go to the mall');
        });
        it('"He is sleeping on the couch", "sleeping", "sitting" should return "He is sitting on the couch"', () => {
            expect(myReplace('He is sleeping on the couch', 'sleeping', 'sitting')).toEqual('He is sitting on the couch');
        }); 
        it('"This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error"', () => {
            expect(myReplace('This has a spellngi error', 'spellngi', 'spelling')).toEqual('This has a spelling error');
        });
        it('"His name is Tom", "Tom", "john") should return "His name is John"', () => {
            expect(myReplace('His name is Tom', 'Tom', 'John')).toEqual('His name is John');
        });
        it('"Let us get back to more coding", "coding", "algorithms") should return "Let us get back to more algorithms"', () => {
            expect(myReplace('Let us get back to more coding', 'coding', 'algorithms')).toEqual('Let us get back to more algorithms');
        });
        it('"A quick brown fox jumped over the lazy dog", "jumped", "leaped" should return "A quick brown fox leaped over the lazy dog"', () => {
            expect(myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')).toEqual('A quick brown fox leaped over the lazy dog');
        });
    });
});