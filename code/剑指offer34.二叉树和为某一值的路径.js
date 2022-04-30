// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */

function pathSum(root, target) {
  if (!root) return []
  const result = []

  function process(node, path, currentSum) {
    currentSum += node.val
    path.push(node.val)
    if (!node.left && !node.right && currentSum === target) {
      result.push([...path])
      return
    }
    if (node.left) {
      process(node.left, path, currentSum)
      path.pop()
    }
    if (node.right) {
      process(node.right, path, currentSum)
      path.pop()
    }
  }

  process(root, [], 0)
  return result
}
