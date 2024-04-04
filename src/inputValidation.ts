export function validateGrid(gridArr: string[]): string {
    if (gridArr === undefined || gridArr.length === 0 || (gridArr.length === 1 && gridArr[0] === '')) {
        return 'No grid size provided, please provide the upper-right coordinates of the grid.';
    }

    if (gridArr.length !== 2) {
        return 'Grid size not provided correctly. Please provide the upper-right coordinates of the grid.';
    }

    const xStr = gridArr.at(0);
    const yStr = gridArr.at(1);

    if (/^-?[0-9]+$/.test(xStr!) === false || /^-?[0-9]+$/.test(yStr!) === false) {
        return 'Grid size not provided correctly. Please provide the upper-right coordinates of the grid.';
    }

    const x = Number(xStr);
    const y = Number(yStr);

    if (x < 0 || y < 0 || x > 50 || y > 50) {
        return 'x and y values should both be between 0 and 50.';
    }

    return '';
}

export function validateState(state: string[]): string {
    let message: string = '';
    if (
        state === undefined ||
        state.length === 0 ||
        (state.length === 1 && state[0] === '') ||
        (state.length === 1 && /^[FLR]+$/.test(state[0]) === true)
    ) {
        return 'No position provided.';
    }

    if (state.length === 3) {
        const x = Number(state.at(0));
        const y = Number(state.at(1));
        const orientation = state.at(2)?.toUpperCase();

        if (Number.isNaN(x) || state.at(0) === '') {
            message = message.concat(' x coordinate invalid.');
        }
        if (Number.isNaN(y) || state.at(1) === '') {
            message = message.concat(' y coordinate invalid.');
        }
        if (orientation === '' || ['N', 'E', 'S', 'W'].includes(orientation!) === false) {
            message = message.concat(' Orientation is invalid.');
        }

        if (message !== '') {
            message = 'Position not provided correctly:' + message;
        }

        return message;
    }

    return 'Position not provided correctly.';
}

export function validateInstructions(instructions: string | undefined): string {
    if (instructions === '' || instructions === undefined) {
        return 'No instructions provided.';
    }

    const instructionsArr = instructions.split(' ');

    if (instructionsArr.length > 1) {
        if (
            instructionsArr.length === 3 &&
            ['number', 'string'].includes(typeof instructionsArr.at(0)) &&
            ['number', 'string'].includes(typeof instructionsArr.at(1)) &&
            ['number', 'string'].includes(typeof instructionsArr.at(2))
        ) {
            return 'No instructions provided.';
        }

        return 'Instructions not provided correctly.';
    }

    if (instructions.length > 100) {
        return 'Too many instructions - please provide maximum 100 commands.';
    }

    if (/^[FLR]+$/.test(instructions) === false) {
        return 'Instructions not provided correctly.';
    }

    return '';
}
