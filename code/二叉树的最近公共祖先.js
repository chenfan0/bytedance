/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function lowestCommonAncestor(root, p, q) {
  const map = new Map()

  function recurse(node) {
    if (node.left) {
      map.set(node.left, node)
      recurse(node.left)
    }

    if (node.right) {
      map.set(node.right, node)
      recurse(node.right)
    }
  }
  recurse(root)
  const set = new Set()
  while (p !== root) {
    set.add(p)
    p = map.get(p)
  }

  while (q !== root) {
    if (set.has(q)) return q
    q = map.get(q)
  }

  return root
}