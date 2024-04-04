import { direction } from './types';
import { Rover } from './rover';
import { checkMove } from './positionValidation';

export function moveForward(rover: Rover): Rover {
    switch (rover.orientation) {
        case 'N':
            ++rover.position.y;
            rover = checkMove(rover);
            break;
        case 'E':
            ++rover.position.x;
            rover = checkMove(rover);
            break;
        case 'S':
            --rover.position.y;
            rover = checkMove(rover);
            break;
        case 'W':
            --rover.position.x;
            rover = checkMove(rover);
            break;
    }

    return rover;
}

export function turnLeft(orientation: direction): direction {
    switch (orientation) {
        case 'N':
            return 'W';
        case 'E':
            return 'N';
        case 'S':
            return 'E';
        case 'W':
            return 'S';
    }
}

export function turnRight(orientation: direction): direction {
    switch (orientation) {
        case 'N':
            return 'E';
        case 'E':
            return 'S';
        case 'S':
            return 'W';
        case 'W':
            return 'N';
    }
}
