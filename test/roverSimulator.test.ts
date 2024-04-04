import { runRobots } from '../src/roverSimulator';

describe('testing runRobots function', () => {

    test('robot runs safely', () => {
        const input = ['4 4', '0 0 N', 'FRFLFRFLF'];
        const expectedOutput = ['2 3 N'];
        
        expect(runRobots(input)).toEqual(expectedOutput);
    });
    
    test('invalid grid', () => {
        const input = ['4', '1 1 E', 'FRFLFRFLF'];
        const expectedOutput = ['Grid size not provided correctly. Please provide the upper-right coordinates of the grid.'];
        
        expect(runRobots(input)).toEqual(expectedOutput);
    });

    test ('position not provided correctly', () => {
        const input = ['5 6', '5 N', 'FLRFFLF'];
        const expectedOutput = ['Position not provided correctly.'];
        
        expect(runRobots(input)).toEqual(expectedOutput);
    })

    test ('no position provided', () => {
        const input = ['5 6', 'FLRFFLF'];
        const expectedOutput = ['No position provided.'];
        
        expect(runRobots(input)).toEqual(expectedOutput);
    })

    test ('no instructions provided', () => {
        const input = ['4 5', '1 1 E'];
        const expectedOutput = ['No instructions provided.'];
        
        expect(runRobots(input)).toEqual(expectedOutput);
    })

    test ('instructions not provided correctly', () => {
        const input = ['5 6', '5 2 E', 'FLRFFNLF'];
        const expectedOutput = ['Instructions not provided correctly.'];
        
        expect(runRobots(input)).toEqual(expectedOutput);
    })

    test('display true', () => {
        const input = ['4 4', '0 0 N', 'FRFLFRFLF'];

        const consoleSpy = jest.spyOn(console, 'log');
        
        runRobots(input, true);

        expect(consoleSpy).toHaveBeenCalled();
    });

});