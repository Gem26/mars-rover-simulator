import { Rover, buildRover } from '../src/rover';
import { guard, resetGuard, setGridSize } from '../src/grid';
import { checkGuard, checkMove, checkRoverOnMars, markAsLost } from '../src/positionValidation';
import { splitStringByChar } from '../src/helperFunctions';
import { State } from '../src/types';

describe('testing checkGuard function', () => {

    setGridSize(4,6);

    beforeEach(() => {
        resetGuard();
        guard.push({x: 4, y: 4, orientation: 'W'});
    })

    test('rover is not on a guarded space', () => {
        const rover = buildRover('N', 2, 2, 'F');
        expect(checkGuard(rover)).toBe(true);
    });
    
    test('rover is on a guarded space', () => {
        const rover = buildRover('W', 4, 4, 'F');
        expect(checkGuard(rover)).toBe(false);
    });

});

describe('testing checkRoverOnMars function', () => {

    test('rover is on Mars', () => {
        let rover: Rover = {
            orientation: 'N',
            position: {x: 8, y: 4},
            instructions: splitStringByChar('FRLFR'),
            undoSteps: [],
            lost: false,
            invalid: false,
            message: '',
        }

        setGridSize(10, 12);

        rover = checkRoverOnMars(rover);
        expect(rover.lost).toBe(false);
        expect(rover.invalid).toBe(false);
        expect(rover.message).toBe('');
    });
    
    test('rover is not on Mars', () => {
        let rover: Rover = {
            orientation: 'N',
            position: {x: 8, y: 4},
            instructions: splitStringByChar('FRLFR'),
            undoSteps: [],
            lost: false,
            invalid: false,
            message: '',
        }

        setGridSize(4, 3);

        rover = checkRoverOnMars(rover);
        expect(rover.lost).toBe(true);
        expect(rover.invalid).toBe(true);
        expect(rover.message).toBe(' --This rover never made it to Mars!');
    });

});

describe('testing markAsLost function', () => {

    let rover: Rover = {
        orientation: 'N',
        position: {x: 8, y: 4},
        instructions: splitStringByChar('FRLFR'),
        undoSteps: [],
        lost: false,
        invalid: false,
        message: '',
    }

    test('mark as lost', () => {
        const previousPosition: State = {x: 8, y: 3, orientation: 'N'};
        rover.undoSteps.unshift(previousPosition);

        rover = markAsLost(rover);

        expect(rover.lost).toBe(true);
        expect(rover.position.x).toBe(previousPosition.x);
        expect(rover.position.y).toBe(previousPosition.y);
        expect(rover.undoSteps).toEqual([]);
    });
});

describe('testing checkMove function: safe, north and west', () => {

    let start: State = {x: 4, y: 2, orientation: 'N'}
    let step1: State = {x: 4, y: 3, orientation: 'N'}
    let step2: State = {x: 4, y: 3, orientation: 'E'}
    let step3: State = {x: 5, y: 3, orientation: 'E'}
    let step4: State = {x: 5, y: 3, orientation: 'N'}

    function buildSteps() {
        return [step4, step3, step2, step1, start];
    }

    function buildTestRover(): Rover {
        let rover: Rover = {
            orientation: 'N',
            position: {x: 5, y: 4},
            instructions: splitStringByChar('FRFLFR'),
            undoSteps: buildSteps(),
            lost: false,
            invalid: false,
            message: '',
        }

        return rover;
    }

    beforeEach(() => {
        resetGuard();
    })

    test('rover is safely on Mars', () => {
        const rover_initialState = buildTestRover();
        const rover_toBeMoved = buildTestRover();

        setGridSize(10,10);

        expect(checkMove(rover_toBeMoved)).toEqual(rover_initialState);
    });

    test('rover has gone too far north', () => {
        let rover = buildTestRover();

        setGridSize(10,3);

        rover = checkMove(rover);

        expect(guard.length).toBe(1);
        expect(guard[0]).toEqual(step4);
        expect(rover.lost).toBe(true);
        expect(rover.position.x).toBe(step4.x);
        expect(rover.position.y).toBe(step4.y);

        let steps = buildSteps();

        steps.shift();
        expect(rover.undoSteps).toEqual(steps);
    });

    test('rover has gone too far west', () => {
        let rover = buildTestRover();

        setGridSize(4,10);

        rover = checkMove(rover);

        expect(guard.length).toBe(1);
        expect(guard[0]).toEqual(step4);
        expect(rover.lost).toBe(true);
        expect(rover.position.x).toBe(step4.x);
        expect(rover.position.y).toBe(step4.y);

        let steps = buildSteps();

        steps.shift();
        expect(rover.undoSteps).toEqual(steps);
    });
});