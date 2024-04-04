import { testObjects } from './formatTests';
import { runRobots } from '../roverSimulator';
import { testCase } from './testTypes';

// See all tests in testCases.ts. Change testIndex to the number of the test you want to run.

const testIndex = 34;

function runSingleTest(index: number): void {
    let testToRun = testObjects.find((i: testCase) => i.index === index);
    runRobots(testToRun?.input!, true);
}

runSingleTest(testIndex);
