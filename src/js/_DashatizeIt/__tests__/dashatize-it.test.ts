import { dashatize } from '../dashatize-it';

describe('Dashatize it', () => {
    describe('Should return a string with dash marks before and after each odd integer, omiting the beginning and end of the string', () => {
        it('should return 2-7-4', () => {
            expect(dashatize(274)).toBe('2-7-4');
        });
        it('should return 5-3-1-1', () => {
            expect(dashatize(5311)).toBe('5-3-1-1');
        });
        it('should return 86-3-20', () => {
            expect(dashatize(86320)).toBe('86-3-20');
        });
        it('should return NaN', () => {
            expect(dashatize(NaN)).toBe('NaN');
        });
        it('should return 0', () => {
            expect(dashatize(0)).toBe('0');
        });
        it('should return 1', () => {
            expect(dashatize(-1)).toBe('1');
        });
        it('should return 28-3-6-9', () => {
            expect(dashatize(-28369)).toBe('28-3-6-9');
        })
    });
});
