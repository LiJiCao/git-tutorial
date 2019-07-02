/**
 * 206. 反转链表
 * 反转一个单链表。
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
// 将next指针的next指向head并刷新head
var reverseList = function(head) {
    let current = head
    while (current && current.next) {
        let node = current.next
        current.next = node.next
        node.next = head
        head = node
    }
    return head
};

// 把当前指针的next指向其前一个指针
var reverseList2 = function(head) {
    let current = head, prev = null
    while (current) {
        let node = current.next
        current.next = prev
        prev = current
        current = node
    }
    return prev
};

// 递归方法
var reverseList3 = function(head) {
    if (head == null || head.next == null) return head
    let p = reverseList3(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};