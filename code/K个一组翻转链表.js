// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function reverseKGroup(head, k) {
  // 先将满足翻转条件的数据保存到helpItem中
  let help = [];
  let helpItem = [];
  let i = 0;

  while (head) {
    if (i < k) {
      helpItem.push(head);
      i++;
    } else {
      help.push(helpItem);
      helpItem = [head];
      i = 1;
    }
    head = head.next;
  }
  // 由于最后helpItem可能还有值
  help.push(helpItem);

  // 当help项中长度和k相同，则进行翻转
  for (const item of help) {
    if (item.length === k) {
      item.reverse();
    }
  }
  // 最后需要扁平化一下数组
  help = help.flat();

  // 然后就链表进行连接
  for (let i = 0; i < help.length; i++) {
    help[i].next = help[i + 1] === undefined ? null : help[i + 1];
  }

  return help[0];
}
