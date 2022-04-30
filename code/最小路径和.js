// https://leetcode-cn.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */

function minPathSum(grid) {
  const row = grid.length
  const col = grid[0].length

  const helps = new Array(row).fill(0).map(_ => new Array(col).fill(0))
  helps[0][0] = grid[0][0]

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j > 0) {
        helps[i][j] = helps[i][j - 1] + grid[i][j]
      } else if (j === 0 && i > 0) {
        helps[i][j] = helps[i - 1][j] + grid[i][j]
      } else if (i > 0 && j > 0) {
        helps[i][j] = Math.min(helps[i - 1][j], helps[i][j - 1]) + grid[i][j]
      }
    }
  }

  return helps[row - 1][col - 1]
}