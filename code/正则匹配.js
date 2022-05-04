// https://leetcode-cn.com/problems/regular-expression-matching/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

function isMatch(s, p) {
  const n = s.length, m = p.length

  function recurse(i, j) {
    if (i === n && j === m) return true
    if (i > n || j > m) return false
    const isSame = s[i] === p[j] || p[j] === '.'

    if (p[j + 1] === '*') {
      return isSame && recurse(i + 1, j) || recurse(i, j + 2)
    }

    return isSame && recurse(i + 1, j + 1)
  }

  return recurse(0, 0)
}