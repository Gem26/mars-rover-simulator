import { splitStringByChar } from '../src/helperFunctions';
import { guard, resetGuard, setGridSize } from '../src/grid';
import { buildRover, getStateString, moveRover } from '../src/rover';

describe('testing buildRover function', () => {

    test('rover is on Mars', () => {
        setGridSize(10, 10);

        const rover = buildRover('W', 4, 3, 'FRFRFRFR');

        expect(rover.orientation).toBe('W');
        expect(rover.position.x).toBe(4);
        expect(rover.position.y).toBe(3);
        expect(rover.instructions).toEqual(splitStringByChar('FRFRFRFR'));
        expect(rover.undoSteps).toEqual([]);
        expect(rover.lost).toBe(false);
        expect(rover.invalid).toBe(false);
        expect(rover.message).toBe('');
    });

    test('rover is not on Mars', () => {
        setGridSize(2, 2);

        const rover = buildRover('W', 4, 3, 'FRFRFRFR');

        expect(rover.orientation).toBe('W');
        expect(rover.position.x).toBe(4);
        expect(rover.position.y).toBe(3);
        expect(rover.instructions).toEqual(splitStringByChar('FRFRFRFR'));
        expect(rover.undoSteps).toEqual([]);
        expect(rover.lost).toBe(true);
        expect(rover.invalid).toBe(true);
        expect(rover.message).toBe(' --This rover never made it to Mars!');
    });

});

describe('testing moveRover function', () => {

    test('rover moves around safely', () => {

        setGridSize(5,3);

        let rover = buildRover('E', 1, 1, 'RFRFRFRF');

        rover = moveRover(rover);

        expect(rover.orientation).toBe('E');
        expect(rover.position).toEqual({x: 1, y: 1});
        expect(rover.lost).toBe(false);
    });

    test('rover falls off Mars', () => {

        setGridSize(5,3);

        resetGuard();

        let rover = moveRover(buildRover('N', 3, 2, 'FRRFLLFFRRFLL'));

        expect(rover.orientation).toBe('N');
        expect(rover.position).toEqual({x: 3, y: 3});
        expect(rover.lost).toBe(true);

        expect(guard.length).toBe(1);
        expect(guard[0]).toEqual({x: 3, y: 3, orientation: 'N'});
    });

    test('rover is blocked by guard', () => {

        setGridSize(5,3);
        resetGuard();
        guard.push({x: 3, y: 3, orientation: 'N'});

        let rover = buildRover('W', 0, 3, 'LLFFFLFLFL');

        rover = moveRover(rover);

        expect(rover.orientation).toBe('S');
        expect(rover.position).toEqual({x: 2, y: 3});
        expect(rover.lost).toBe(false);

        expect(guard.length).toBe(1);
        expect(guard[0]).toEqual({x: 3, y: 3, orientation: 'N'});
    });

});

describe('testing getStateString function', () => {

    setGridSize(10,10);

    test('rover moved around safely', () => {
        const expectedState = '1 1 E'

        let rover = buildRover('E', 1, 1, 'RFRFRFRF');

        expect(getStateString(rover)).toBe(expectedState);

    });

    test('rover was lost', () => {
        const expectedState = '1 1 E LOST'

        let rover = buildRover('E', 1, 1, 'RFRFRFRF');
        rover.lost = true;

        expect(getStateString(rover)).toBe(expectedState);

    });

    test('rover was invalid', () => {
        const expectedState = '1 1 E INVALID'

        let rover = buildRover('E', 1, 1, 'RFRFRFRF');
        rover.invalid = true;

        expect(getStateString(rover)).toBe(expectedState);

    });

    test('rover has a message', () => {
        const expectedState = '1 1 E --This rover never made it to Mars!'

        let rover = buildRover('E', 1, 1, 'RFRFRFRF');
        rover.message = ' --This rover never made it to Mars!';

        expect(getStateString(rover)).toBe(expectedState);

    });

});