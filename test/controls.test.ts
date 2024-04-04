import { buildRover } from '../src/rover';
import { moveForward, turnLeft, turnRight } from '../src/controls';
import { setGridSize } from '../src/grid';

describe('testing moveForward function', () => {

    setGridSize(4, 4);

    test('orientation N should increase y coordinate by 1', () => {
        const rover = buildRover('N', 2, 2, 'F');
        expect(moveForward(rover).position.y).toBe(3);
    });
    
    test('orientation S should decrease y coordinate by 1', () => {
        const rover = buildRover('S', 2, 2, 'F');
        expect(moveForward(rover).position.y).toBe(1);
    });

    test('orientation E should increase x coordinate by 1', () => {
        const rover = buildRover('E', 2, 2, 'F');
        expect(moveForward(rover).position.x).toBe(3);
    });

    test('orientation W should decrease x coordinate by 1', () => {
        const rover = buildRover('W', 2, 2, 'F');
        expect(moveForward(rover).position.x).toBe(1);
    });

});

describe('testing turnLeft function', () => {

    test('orientation N should return W', () => {
        expect(turnLeft('N')).toBe('W');
    });
    
    test('orientation E should return N', () => {
        expect(turnLeft('E')).toBe('N');
    });

    test('orientation S should return E', () => {
        expect(turnLeft('S')).toBe('E');
    });

    test('orientation W should return S', () => {
        expect(turnLeft('W')).toBe('S');
    });

});

describe('testing turnRight function', () => {

    test('orientation N should return E', () => {
        expect(turnRight('N')).toBe('E');
    });
    
    test('orientation E should return S', () => {
        expect(turnRight('E')).toBe('S');
    });

    test('orientation S should return W', () => {
        expect(turnRight('S')).toBe('W');
    });

    test('orientation W should return N', () => {
        expect(turnRight('W')).toBe('N');
    });

});