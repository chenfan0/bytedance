/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums) {
  let fast = 0, slow = 0
  const n = nums.length
  while (fast < n) {
    if (nums[fast] !== 0) {
      nums[slow++] = nums[fast]
    }
    fast++
  }

  while (slow < n) {
    nums[slow++] = 0
  }
}