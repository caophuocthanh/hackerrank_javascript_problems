# Problem #1

## Description
Given an integer array, all items repeat 5 times except for just one item that appears once. Please
find this single item.

## Example 1.
INPUT: [1, 1, 0, 1, 1, 1]
OUTPUT: 0

## Example 2.
INPUT: [3, 1, 3, 1, 1, 3, 3, 5, 1, 3, 1]
OUTPUT: 5

## NOTE
- Input array is always non empty.
- Try to optimize time and space complexity.
- Function signature is as below. But you can modify it according to language you are
familiar with.


# Problem #2

## Description
Given a grid as input, each item is one of the below things.
- 0: empty item
- 1: white item
- 2: black item
Every 2 seconds, white items that are adjacent (up, down, left, right) to black item become black.
Please return minimum seconds until there is no white item. If it is not possible, return -1.

## Example 1.
- INPUT: [[1,1,1], [1,1,0], [0,2,1]]
- OUTPUT: 6

## Example 2.
- INPUT: [[1,0,1], [0,1,1], [1,1,2]]
- OUTPUT: -1

## NOTE
- Input grid is 3 x 3.
- Try to optimize time and space complexity.
- Function signature is as below. But you can modify it according to language you are
familiar with.
