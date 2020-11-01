# Oranges Rotting

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
