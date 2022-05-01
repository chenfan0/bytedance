// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
  const n = s.length
  let max = 0
  let i = 0, j = 0
  while (j < n) {
    const str = s.slice(i, j + 1)
    max = Math.max(max, str.length)
    if (str.includes(s[j + 1])) {
      i++
    } else {
      j++
    }
  }
  return max
}
