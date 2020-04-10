import { formatAString } from '../format-a-string';

describe('Format a string', () => {
    test('Must work with many names I', () => {
        const arr = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }];
        const expected = 'Bart, Lisa, Maggie, Homer & Marge';
        expect(formatAString(arr)).toEqual(expected);
    });

    test('Must work with many names II', () => {
        const arr = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }];
        const expected = 'Bart, Lisa & Maggie';
        expect(formatAString(arr)).toEqual(expected);
    });

    test('Must work with two names', () => {
        const arr = [{ name: 'Bart' }, { name: 'Lisa' }];
        const expected = 'Bart & Lisa';
        expect(formatAString(arr)).toEqual(expected);
    });

    test('Wrong output for a single name', () => {
        const arr = [{ name: 'Bart' }];
        const expected = 'Bart';
        expect(formatAString(arr)).toEqual(expected);
    });

    test('Must work with no names', () => {
        const arr = [];
        const expected = '';
        expect(formatAString(arr)).toEqual(expected);
    });
});