import { Rover } from './rover';
import { guard, gridSize } from './grid';
import { State } from './types';

export function checkGuard(rover: Rover): boolean {
    const roverState = {
        x: rover.position.x,
        y: rover.position.y,
        orientation: rover.orientation
    };

    let result = true;

    guard.forEach((state: State) => {
        if (state.x === roverState.x && state.y === roverState.y && state.orientation === roverState.orientation) {
            result = false;
        }
    });

    return result;
}

export function checkRoverOnMars(rover: Rover): Rover {
    if (rover.position.x < 0 || rover.position.x > gridSize.x || rover.position.y < 0 || rover.position.y > gridSize.y) {
        rover.lost = true;
        rover.invalid = true;
        rover.message = ' --This rover never made it to Mars!';
    }

    return rover;
}

export function markAsLost(rover: Rover): Rover {
    rover.lost = true;

    const lastPos = rover.undoSteps.shift()!;

    rover.position = { x: lastPos.x, y: lastPos.y };

    return rover;
}

export function checkMove(rover: Rover): Rover {
    if (rover.position.x < 0 || rover.position.x > gridSize.x || rover.position.y < 0 || rover.position.y > gridSize.y) {
        rover = markAsLost(rover);

        guard.push({
            x: rover.position.x,
            y: rover.position.y,
            orientation: rover.orientation
        });

        return rover;
    }

    return rover;
}
