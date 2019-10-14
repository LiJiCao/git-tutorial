/**
 * 21. 合并两个有序链表
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let l3 = null
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val > l2.val) {
        l3 = l2
        l2 = l2.next
    } else {
        l3 = l1
        l1 = l1.next
    }
    let node = l3
    while (l1 && l2) {
        if (l1.val > l2.val) {
            node.next = l2
            l2 = l2.next
        } else {
            node.next = l1
            l1 = l1.next
        }
        node = node.next
    }
    if (l1) node.next = l1
    if (l2) node.next = l2
    return l3
};

// 递归的方法
var mergeTwoLists2 = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    let res = null
    if (l1.val >= l2.val) {
        res = l2
        res.next = mergeTwoLists2(l1, l2.next)
    } else {
        res = l1
        res.next = mergeTwoLists2(l1.next, l2)
    }
    return res
};