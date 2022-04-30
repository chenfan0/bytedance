// https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let max = Number.MIN_SAFE_INTEGER
  let cur = 0

  for (let i = 0; i < nums.length; i++) {
    cur += nums[i]
    max = Math.max(max, cur)
    cur = cur > 0 ? cur : 0
  }

  return max
}