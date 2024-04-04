export const test1 = [
`5 3

1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL`,
`1 1 E
3 3 N LOST
2 3 S`
];

export const test2 = [
`4 4
0 0 N
FRFLFRFLF`,
`2 3 N`
];

export const test3 = [
`3 2
8 5 N
FLRFFLF`,
`8 5 N LOST --This rover never made it to Mars!`
];

export const test4 = [
`4 5
1 1 E
FLFLFLFLFLFRFRFRFRFRFLFLFLFLFLFRFRFRFRFRFLFLFLFLFLFRFRFRFRFRFLFLFLFLFLFRFRFRFRFRFLFLFLFLFLFRFRFRFRFRFLFLFLFLFLFRFRFRFRFR`,
`Too many instructions - please provide maximum 100 commands.`
];

export const test5 = [
`4 5
1 1 E
`,
`No instructions provided.`
];

export const test6 = [
`4 5
1 1 E`,
`No instructions provided.`
];

export const test7 = [
`4 5 N
1 1 E
FRFLFRFLF`,
`Grid size not provided correctly. Please provide the upper-right coordinates of the grid.`
];

export const test8 = [
`4
1 1 E
FRFLFRFLF`,
`Grid size not provided correctly. Please provide the upper-right coordinates of the grid.`
];

export const test9 = [
`
1 1 E
FRFLFRFLF`,
`No grid size provided, please provide the upper-right coordinates of the grid.`
];

export const test10 = [
`1 1 E
FRFLFRFLF`,
`Grid size not provided correctly. Please provide the upper-right coordinates of the grid.`
];

export const test11 = [
`5 6
5 N
FLRFFLF`,
`Position not provided correctly.`
];

export const test12 = [
`5 6

FLRFFLF`,
`No position provided.`
];

export const test13 = [
`5 6
FLRFFLF`,
`No position provided.`
];

export const test14 = [
`5 6
N 3 N
FLRFFLF`,
`Position not provided correctly: x coordinate invalid.`
];

export const test15 = [
`5 6
3 E N
FLRFFLF`,
`Position not provided correctly: y coordinate invalid.`
];

export const test16 = [
`5 6
3 4 5
FLRFFLF`,
`Position not provided correctly: Orientation is invalid.`
];

export const test17 = [
`5 6
N 4 5
FLRFFLF`,
`Position not provided correctly: x coordinate invalid. Orientation is invalid.`
];

export const test18 = [
`5 6
3 S 5
FLRFFLF`,
`Position not provided correctly: y coordinate invalid. Orientation is invalid.`
];

export const test19 = [
`5 6
W S 5
FLRFFLF`,
`Position not provided correctly: x coordinate invalid. y coordinate invalid. Orientation is invalid.`
];

export const test20 = [
`5 6
2 3
FLRFFLF`,
`Position not provided correctly.`
];

export const test21 = [
`5 6
2 3
FLRFFLF
1 1 E
RFRFRFRF`,
`Position not provided correctly.
1 1 E`
];

export const test22 = [
`5 6
1 1 E
RFRFRFRF
2 3
FLRFFLF`,
`1 1 E
Position not provided correctly.`
];

export const test23 = [
`5 6
FLRFFLF
1 1 E
RFRFRFRF`,
`No position provided.
1 1 E`
];

export const test24 = [
`5 6
4 5 N
1 1 E
RFRFRFRF`,
`No instructions provided.
1 1 E`
];

export const test25 = [
`5 6
4 5 N
1 1 E
RFRFRFNF`,
`No instructions provided.
Instructions not provided correctly.`
];

export const test26 = [
`4 4
0 0 N
frflfrflf`,
`2 3 N`
];

export const test27 = [
`4 4
0 0 n
FRFLFRFLF`,
`2 3 N`
];

export const test28 = [
`a 4
0 0 N
FRFLFRFLF`,
`Grid size not provided correctly. Please provide the upper-right coordinates of the grid.`
];

export const test29 = [
`4 b
0 0 N
FRFLFRFLF`,
`Grid size not provided correctly. Please provide the upper-right coordinates of the grid.`
];

export const test30 = [
`C D
0 0 N
FRFLFRFLF`,
`Grid size not provided correctly. Please provide the upper-right coordinates of the grid.`
];

export const test31 = [
`4 4
0  N
FRFLFRFLF`,
`Position not provided correctly.`
];

export const test32 = [
`4 4
0 0 
FRFLFRFLF`,
`Position not provided correctly.`
];

export const test33 = [
`4 4
  N
FRFLFRFLF`,
`Position not provided correctly.`
];

export const test34 = [
`4 4
 0 
FRFLFRFLF`,
`Position not provided correctly.`
];

export const test35 = [
`4 4
   
FRFLFRFLF`,
`No position provided.`
];

export const test36 = [
`0 0

0 0 N
F

0 0 E
F

0 0 W
F

0 0 S
F

0 0 N
FLFLFLFL`,
`0 0 N LOST
0 0 E LOST
0 0 W LOST
0 0 S LOST
0 0 N`
];
