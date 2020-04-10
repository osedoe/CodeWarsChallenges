import { fearNotLetter } from '../missing-letters';

describe('Missing Letters', () => {
    describe('Find the missing letter in the passed letter range and return it', ()  => {
        it('should return "d" for the string "abce"', () => {
            expect(fearNotLetter('abce')).toEqual('d');
        });
        it('should return "i" for the string "abcdefghjklmno', () => {
            expect(fearNotLetter('abcdefghjklmno')).toEqual('i');
        });
        it('should return "u" for the string "stvwx"', () => {
            expect(fearNotLetter('stvwx')).toEqual('u');
        });
        it('should return "e" for the string "bcdf"', () => {
            expect(fearNotLetter('bcdf')).toEqual('e');
        });
        it('should return "undefined" for the string "abcdefghijklmnopqrstuvwxyz"', () => {
            expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toBeUndefined();
        });
    });
});