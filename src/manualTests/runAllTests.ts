import { arrayEquals } from './testHelperFunctions';
import { testObjects } from './formatTests';
import { runRobots } from '../roverSimulator';

function runAllTests(): void {
    testObjects.forEach((test) => {
        test.actualResult = runRobots(test.input);

        if (arrayEquals(test.actualResult, test.expectedResult)) {
            console.log(`Test ${test.index} has passed.`);
            test.testResult = 'Passed';
        } else {
            console.log(`Test ${test.index} has failed.`);
            test.testResult = 'Failed';
            console.log('Input: ', test.input);
            console.log('Expected: ', test.expectedResult);
            console.log('Actual: ', test.actualResult);
        }
    });
}

runAllTests();
