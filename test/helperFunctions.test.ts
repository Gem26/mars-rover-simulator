import { splitStringByLine, splitStringByChar } from '../src/helperFunctions';

describe('testing splitStringByLine function', () => {

    test('single line string should give array with 1 object', () => {
        expect(splitStringByLine('').length).toBe(1);
        expect(splitStringByLine(' ').length).toBe(1);
        expect(splitStringByLine('a').length).toBe(1);
        expect(splitStringByLine('a b').length).toBe(1);
        expect(splitStringByLine('this is a test string').length).toBe(1);
    });

    test('string with n lines should give array with n objects', () => {
        expect(splitStringByLine(' \n').length).toBe(2);
        expect(splitStringByLine('a \n b').length).toBe(2);
        expect(splitStringByLine('a \n b \n c').length).toBe(3);
        expect(splitStringByLine('This is \n a \n multiline \n test string.').length).toBe(4);
    });
});

describe('testing splitStringByChar function', () => {

    test('empty string should give empty array', () => {
        expect(splitStringByChar('')).toEqual([]);
    });

    test('single character string should give array with 1 object', () => {
        expect(splitStringByChar(' ').length).toBe(1);
        expect(splitStringByChar('a').length).toBe(1);
    });

    test('string with n characters should give array with n objects', () => {
        expect(splitStringByChar('abc').length).toBe(3);
        expect(splitStringByChar('a b').length).toBe(3);
        expect(splitStringByChar('a b c').length).toBe(5);
        expect(splitStringByChar('123 ab789').length).toBe(9);
    });
});