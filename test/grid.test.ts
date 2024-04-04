import { State } from '../src/types';
import { gridSize, setGridSize, guard, resetGuard } from '../src/grid';

describe('testing setGridSize function', () => {

    setGridSize(4,1);

    test('gridSize.x should be equal to x parameter', () => {
        expect(gridSize.x).toBe(4);
    });
    
    test('gridSize.y should be equal to y parameter', () => {
        expect(gridSize.y).toBe(1);
    });

});

describe('testing resetGuard function', () => {

    let testState: State = {x: 2, y: 6, orientation: 'E'}
    guard.push(testState);

    test('test that guard contains an object', () => {
        expect(guard.length).toBe(1);
    });
    
    test('after reset guard should be empty', () => {
        resetGuard();
        expect(guard).toEqual([]);
    });

});