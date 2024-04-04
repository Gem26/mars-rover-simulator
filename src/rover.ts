import { direction, State, coordinates } from './types';
import { splitStringByChar } from './helperFunctions';
import { moveForward, turnLeft, turnRight } from './controls';
import { checkGuard, checkRoverOnMars } from './positionValidation';

export interface Rover {
    orientation: direction;
    position: coordinates;
    instructions: string[];
    undoSteps: State[];
    lost: boolean;
    invalid: boolean;
    message: string;
}

export function buildRover(orientation: direction, x: number, y: number, strInstructions: string): Rover {
    const instructions = splitStringByChar(strInstructions);
    const position = { x: x, y: y };

    let rover = {
        orientation: orientation,
        position: position,
        instructions: instructions,
        undoSteps: [],
        lost: false,
        invalid: false,
        message: ''
    };

    return checkRoverOnMars(rover);
}

export function moveRover(rover: Rover): Rover {
    for (let move of rover.instructions) {
        if (rover.lost) {
            break;
        }

        rover.undoSteps.unshift({
            x: rover.position.x,
            y: rover.position.y,
            orientation: rover.orientation
        });
        switch (move) {
            case 'F':
                if (checkGuard(rover)) {
                    rover = moveForward(rover);
                }
                break;
            case 'L':
                rover.orientation = turnLeft(rover.orientation);
                break;
            case 'R':
                rover.orientation = turnRight(rover.orientation);
                break;
        }
    }

    return rover;
}

export function getStateString(rover: Rover): string {
    const x = rover.position.x.toString();
    const y = rover.position.y.toString();
    const orientation = rover.orientation;

    let state = `${x} ${y} ${orientation}`;

    if (rover.lost) {
        state = state.concat(' LOST');
    }

    if (rover.invalid && !rover.lost) {
        state = state.concat(' INVALID');
    }

    if (rover.message !== '') {
        state = state.concat(rover.message);
    }

    return state;
}
