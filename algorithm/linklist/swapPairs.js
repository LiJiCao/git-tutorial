// 24. 两两交换链表中的节点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) return null
    let next = head.next
    if (!next) return head
    head.next = swapPairs(next.next)
    next.next = head
    return next
};