/**
* @param {number[][]} grid
* @return {number}
*/

const orangesRotting = (
  grid
) => {
  let row = grid.length
  let col = grid[0].length
  let fresh = 0;
  let queue = [];
  let minutes = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        fresh += 1;
      } else if (grid[i][j] === 2) {
        queue.push([i, j])
      }
    }
  }
  let movement = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (queue.length !== 0 && fresh) {
    let size = queue.length
    while (size--) {
      let curCell = queue.shift()
      const x = curCell[0]
      const y = curCell[1]
      for (let d = 0; d < 4; d++) {
        const tx = x + movement[d][0]
        const ty = y + movement[d][1]
        if (tx < 0 || tx >= row || ty < 0 || ty >= col || grid[tx][ty] !== 1) {
          continue;
        }
        fresh--;
        grid[tx][ty] = 2
        queue.push([tx, ty])
      }
    }
    minutes++
  }
  return fresh ? -1 : minutes
}

// MARK: Test

const test1 = orangesRotting([[1, 1, 1], [1, 1, 0], [0, 2, 1]])
console.log("test1:", test1, test1 == 3 ? "success" : "fail")

const test2 = orangesRotting([[1, 0, 1], [0, 1, 1], [1, 1, 2]])
console.log("test2:", test2, test2 == -1 ? "success" : "fail")

const test3 = orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])
console.log("test3:", test3, test3 == 4 ? "success" : "fail")

const test4 = orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])
console.log("test4:", test4, test4 == -1 ? "success" : "fail")

const test5 = orangesRotting([[0,2]])
console.log("test5:", test5, test5 == 0 ? "success" : "fail")

// MARK: Explanation
// Big O: O(R x C)
