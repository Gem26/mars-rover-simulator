import { validateGrid, validateState, validateInstructions } from './inputValidation';
import { Rover, buildRover, moveRover, getStateString } from './rover';
import { direction } from './types';
import { setGridSize, resetGuard } from './grid';

export function runRobots(fullInput: string[], displayOutput = false): string[] {
    resetGuard();
    const input = fullInput.slice();

    const grid = input.shift()?.split(' ');

    if (validateGrid(grid!) !== '') {
        return [validateGrid(grid!)!];
    }

    const x = Number(grid?.at(0));
    const y = Number(grid?.at(1));

    setGridSize(x, y);

    const roverInput = input.filter((line) => line.length !== 0);

    let rovers: Rover[] = [];
    let output: string[] = [];

    let i = 0;
    let j = 0;
    while (i < roverInput.length) {
        const state = roverInput[i].split(' ').filter((i) => i !== '');

        if (validateState(state) === '') {
            const x = Number(state.at(0));
            const y = Number(state.at(1));
            const strOrientation = state.at(2)?.toUpperCase();

            let instructions = roverInput[i + 1]?.toUpperCase();

            if (validateInstructions(instructions) === '') {
                i++;

                rovers[j] = buildRover(strOrientation as direction, x, y, instructions);

                if (!rovers[j].invalid) {
                    moveRover(rovers[j]);
                }

                output.push(getStateString(rovers[j]));

                j++;
            } else if (validateInstructions(instructions) !== 'No instructions provided.') {
                output.push(validateInstructions(instructions));
                i++;
            } else {
                output.push(validateInstructions(instructions));
            }
        } else if (validateState(state).startsWith('Position not provided correctly')) {
            output.push(validateState(state));
            i++;
        } else {
            output.push(validateState(state));
        }

        i++;
    }

    if (displayOutput) {
        output.forEach((line) => console.log(line));
        console.log(' ');
    }

    return output;
}
