// import { setGridSize } from '../src/grid';
import { validateGrid, validateState, validateInstructions } from '../src/inputValidation';

describe('testing validateGrid function', () => {

    test('valid grid input should return empty string', () => {
        expect(validateGrid(['5', '3'])).toBe('');
        expect(validateGrid(['20', '5'])).toBe('');
        expect(validateGrid(['50', '50'])).toBe('');
        expect(validateGrid(['0', '0'])).toBe('');
    });
    
    test('gridArr is empty', () => {
        const expectedResult = 'No grid size provided, please provide the upper-right coordinates of the grid.';
        expect(validateGrid([])).toBe(expectedResult);
    });

    test('gridArr is empty string', () => {
        const expectedResult = 'No grid size provided, please provide the upper-right coordinates of the grid.';
        expect(validateGrid([''])).toBe(expectedResult);
    });

    test('gridArr has wrong number of objects', () => {
        const expectedResult = 'Grid size not provided correctly. Please provide the upper-right coordinates of the grid.';
        expect(validateGrid(['1'])).toBe(expectedResult);
        expect(validateGrid(['1', '1', '1'])).toBe(expectedResult);
        expect(validateGrid(['1', 'T', '1', 'a', '1', '1', '1'])).toBe(expectedResult);
    });
    
    test('x and/or y are not integers', () => {
        const expectedResult = 'Grid size not provided correctly. Please provide the upper-right coordinates of the grid.';
        expect(validateGrid(['1', 'A'])).toBe(expectedResult);
        expect(validateGrid(['d', '4'])).toBe(expectedResult);
        expect(validateGrid(['F', 'G'])).toBe(expectedResult);
        expect(validateGrid(['-', '5'])).toBe(expectedResult);
        expect(validateGrid(['', '3'])).toBe(expectedResult);
        expect(validateGrid(['17', '-'])).toBe(expectedResult);
    });
    
    test('x and/or y are less than 0 or greater than 50', () => {
        const expectedResult = 'x and y values should both be between 0 and 50.';
        expect(validateGrid(['-1', '5'])).toBe(expectedResult);
        expect(validateGrid(['16', '-4'])).toBe(expectedResult);
        expect(validateGrid(['-17', '-23'])).toBe(expectedResult);
        expect(validateGrid(['51', '23'])).toBe(expectedResult);
        expect(validateGrid(['51', '107'])).toBe(expectedResult);
        expect(validateGrid(['-6', '273'])).toBe(expectedResult);
        expect(validateGrid(['51', '-1'])).toBe(expectedResult);
    });

});

describe('testing validateState function', () => {

    test('valid input gives empty string', () => {
        expect(validateState(['4', '5', 'W'])).toBe('');
    });

    test('state array is empty', () => {
        const expectedResult = 'No position provided.';
        expect(validateState([])).toBe(expectedResult);
    });

    test('state array is empty string', () => {
        const expectedResult = 'No position provided.';
        expect(validateState([''])).toBe(expectedResult);
    });

    test('state array contains only instruction string', () => {
        const expectedResult = 'No position provided.';
        expect(validateState(['FRFLFRFLF'])).toBe(expectedResult);
        expect(validateState(['FRRFLLFFRRFLL'])).toBe(expectedResult);
        expect(validateState(['F'])).toBe(expectedResult);
        expect(validateState(['R'])).toBe(expectedResult);
        expect(validateState(['L'])).toBe(expectedResult);
    });

    test('state array does not contain 3 objects', () => {
        const expectedResult = 'Position not provided correctly.';
        expect(validateState(['N'])).toBe(expectedResult);
        expect(validateState(['1', '2'])).toBe(expectedResult);
        expect(validateState(['4'])).toBe(expectedResult);
        expect(validateState(['5', '6', '7', '8'])).toBe(expectedResult);
    });

    test('x is invalid', () => {
        const expectedResult = 'Position not provided correctly: x coordinate invalid.';
        expect(validateState(['a', '2', 'E'])).toBe(expectedResult);
        expect(validateState(['', '2', 'E'])).toBe(expectedResult);
    });

    test('y is invalid', () => {
        const expectedResult = 'Position not provided correctly: y coordinate invalid.';
        expect(validateState(['16', '', 'E'])).toBe(expectedResult);
        expect(validateState(['16', 'test', 'E'])).toBe(expectedResult);
    });

    test('orientation is invalid', () => {
        const expectedResult = 'Position not provided correctly: Orientation is invalid.';
        expect(validateState(['1', '2', '4'])).toBe(expectedResult);
        expect(validateState(['1', '2', 'P'])).toBe(expectedResult);
        expect(validateState(['1', '2', 'wrong'])).toBe(expectedResult);
    });

    test('x and y are invalid', () => {
        const expectedResult = 'Position not provided correctly: x coordinate invalid. y coordinate invalid.';
        expect(validateState(['a', 'd', 'E'])).toBe(expectedResult);
        expect(validateState(['', 'l', 'E'])).toBe(expectedResult);
        expect(validateState(['', '', 'E'])).toBe(expectedResult);
    });

    test('x and orientation are invalid', () => {
        const expectedResult = 'Position not provided correctly: x coordinate invalid. Orientation is invalid.';
        expect(validateState(['a', '2', 'a'])).toBe(expectedResult);
        expect(validateState(['', '4', '6'])).toBe(expectedResult);
        expect(validateState(['', '20', ''])).toBe(expectedResult);
        expect(validateState(['p', '20', 'Q'])).toBe(expectedResult);
    });

    test('y and orientation are invalid', () => {
        const expectedResult = 'Position not provided correctly: y coordinate invalid. Orientation is invalid.';
        expect(validateState(['16', 'd', 'U'])).toBe(expectedResult);
        expect(validateState(['9', 'l', 'b'])).toBe(expectedResult);
        expect(validateState(['0', '', '4'])).toBe(expectedResult);
        expect(validateState(['0', '', ''])).toBe(expectedResult);
    });

    test('x, y and orientation are invalid', () => {
        const expectedResult = 'Position not provided correctly: x coordinate invalid. y coordinate invalid. Orientation is invalid.';
        expect(validateState(['a', 'd', '4'])).toBe(expectedResult);
        expect(validateState(['', 'l', ''])).toBe(expectedResult);
        expect(validateState(['', '', ''])).toBe(expectedResult);
    });

});

describe('testing validateInstructions function', () => {

    test('valid input gives empty string', () => {
        expect(validateInstructions('RFRFRFRF')).toBe('');
    });

    test('instructions are undefined', () => {
        const expectedResult = 'No instructions provided.';
        expect(validateInstructions(undefined)).toBe(expectedResult);
    });

    test('instructions are empty string', () => {
        const expectedResult = 'No instructions provided.';
        expect(validateInstructions('')).toBe(expectedResult);
    });

    test('provided string is (possibly invalid) position', () => {
        const expectedResult = 'No instructions provided.';
        expect(validateInstructions('4 5 N')).toBe(expectedResult);
        expect(validateInstructions('A 5 N')).toBe(expectedResult);
        expect(validateInstructions('4 B 6')).toBe(expectedResult);
    });

    test('provided string has spaces', () => {
        const expectedResult = 'Instructions not provided correctly.';
        expect(validateInstructions('45 N')).toBe(expectedResult);
        expect(validateInstructions('RFRFR FRF')).toBe(expectedResult);
        expect(validateInstructions('R F R F R F R F')).toBe(expectedResult);
    });

    test('too many instructions provided', () => {
        const expectedResult = 'Too many instructions - please provide maximum 100 commands.';
        expect(validateInstructions('FLFLFLFLFLFRFRFRFRFRFLFLFLFLFLFRFRFRFRFRFLFLFLFLFLFRFRFRFRFRFLFLFLFLFLFRFRFRFRFRFLFLFLFLFLFRFRFRFRFRFLFLFLFLFLFRFRFRFRFR')).toBe(expectedResult);
    });

    test('instructions do not match required pattern', () => {
        const expectedResult = 'Instructions not provided correctly.';
        expect(validateInstructions('FRFNLPFRFLF')).toBe(expectedResult);
    });

});