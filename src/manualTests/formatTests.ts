import { splitStringByLine } from '../helperFunctions';
import { testCase } from './testTypes';
import * as tests from './testCases';

const testCases = Object.values(tests);

export let testObjects: testCase[] = [];

let i = 1;
testCases.forEach((test: string[]) => {
    const input = splitStringByLine(test[0]);
    const answer = splitStringByLine(test[1]);

    const testCase: testCase = {
        index: i,
        input: input,
        expectedResult: answer,
        actualResult: [],
        testResult: ''
    };

    testObjects.push(testCase);

    i++;
});
